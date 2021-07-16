import React, { createContext, useState, useEffect, useContext } from 'react';
import {useHistory} from "react-router-dom";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext({});

export function useAuthContext (){
    return useContext(AuthContext) }

function AuthContextProvider({children}) {
    const [ authState, setAuthState ] = useState([{
        user: null,
        status: 'pending',
        usernameUser: null,
    }])
    const [userGroupNameContextState, setUserGroupNameContextState] = useState("")

    const history = useHistory();

    function isTokenValid() {
        const jwtToken = localStorage.getItem('token');
        if(!jwtToken) return false;
        const decodedToken = jwtDecode(jwtToken)
        const expirationUnix = decodedToken.exp;
        const now = new Date().getTime();
        const currentUnix = Math.round(now / 1000);

        const isTokenStillValid = expirationUnix - currentUnix > 0;
        return isTokenStillValid;
    }

    useEffect(() => {
            const token = localStorage.getItem('token');
            if (!authState.user && isTokenValid()) {
                const decodedToken = jwtDecode(token);
            } else {
                setAuthState({
                    user: null,
                    status: 'done',
                });
            }
    },[]);


    async function login(jwtToken, result) {
        localStorage.setItem('token', result.data.jwt);
        const decodedToken = jwtDecode(jwtToken)
        console.log("Ruilse en veel plezier!")
        // const userId = decodedToken.sub;
        setUserGroupNameContextState(result.data.groupName)
        setAuthState({
                user: {
                    username: result.data.username,
                    email: result.data.username,
                    authority: result.data.authorityRole,
                    groupName: result.data.groupName
                },
                status: 'done',
            }
        )
        {result.data.authorityRole === "ROLE_USER" && history.push("/available_tips")||result.data.authorityRole === "ROLE_ADMIN" && history.push("/link")}
    }

    function logout() {
        localStorage.removeItem("token");
        setAuthState({user: null, status: "done"});
        history.push("/");
    }

    const data = {
        ...authState,
        userGroupNameContextState: userGroupNameContextState,
        setUserGroupNameContextState: setUserGroupNameContextState,
        login: login,
        logout: logout,
        isTokenValid: isTokenValid
    };

    return (
        <AuthContext.Provider value={data}>
            {authState.status === 'pending'
                ? <p>We zijn bezig...</p>
                : children
            }
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
