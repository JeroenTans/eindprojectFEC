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
            // fetchUserData(token, decodedToken.sub);
        } else {
            setAuthState({
                user: null,
                status: 'done',
            });
        }
    },[]);

    // async function fetchUserData(token, userId) {
    //     try {
    //         await axios.get(`http://localhost:8080/api/v1/users/${userId}`, {
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 Authorization: `Bearer ${token}`,
    //             }
    //         });
    //         // setAuthState({
    //         //     user: {...authState.user,
    //         //     },
    //         //     status: 'done',
    //         // });
    //     } catch(e) {
    //         console.error(e);
    //     }
    // }

    async function login(jwtToken, result) {
        localStorage.setItem('token', result.data.jwt);
        const decodedToken = jwtDecode(jwtToken)
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
        {result.data.authorityRole === "USER" && history.push("/available_tips")||result.data.authorityRole === "ADMIN" && history.push("/link")}
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
                ? <p>Loading...</p>
                : children
            }
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
