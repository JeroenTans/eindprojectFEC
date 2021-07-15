import React, { createContext, useState, useEffect, useContext } from 'react';
import {useHistory} from "react-router-dom";
import jwtDecode from "jwt-decode";
// import axios from "axios";

export const AuthContext = createContext({});

export function useAuthContext (){
    return useContext(AuthContext) }

function AuthContextProvider({children}) {
    const [ authState, setAuthState ] = useState([{
        user: null,
        status: 'pending',
        usernameUser: null,
    }])

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
        if(!authState.user && isTokenValid()) {
            const decodedToken = jwtDecode(token);
            // fetchUserData(token, decodedToken.sub)
        } else {
            setAuthState({
                user: null,
                status: 'done',
            });
        }
    },[]);

    // async function fetchUserData(token, id) {
    //     console.log(token)
    //     try {
    //         const result = await axios.get(`http://localhost:8080/users/${id}`, {
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 Authorization: `Bearer ${token}`,
    //             }
    //         });
    //
    //     } catch(e) {
    //         console.error(e);
    //     }
    // }

    async function login(jwtToken, result) {
        localStorage.setItem('token', result.data.jwt);
        const decodedToken = jwtDecode(jwtToken)
        console.log("Beste leraren en leraressen, veel plezier!")
        const userId = decodedToken.sub;
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
