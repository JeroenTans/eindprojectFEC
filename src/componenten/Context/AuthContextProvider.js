import React, { createContext, useState, useEffect } from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [ authState, setAuthState ] = useState({
        user: null,
        status: 'pending',
    })

    const history = useHistory();

    function isTokenValid(jwtToken) {
        const decodedToken = jwtDecode(jwtToken);
        const expirationUnix = decodedToken.exp;
        const now = new Date().getTime();
        const currentUnix = Math.round(now / 1000);
        const isTokenStillValid = expirationUnix - currentUnix > 0;

        return isTokenStillValid;
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        //
        // if (authState.user.authority === "USER") history.push("/available_tips")
        // // else {
        // //     history.push("/link")
        // // }
        if (!authState.user && token && isTokenValid(token)){
            const decodedToken = jwtDecode(token);
            fetchUserData(token, decodedToken.sub)
        } else {
            setAuthState({
                user: null,
                status: 'done'
            })
        }
    }, []);

    async function fetchUserData(token, userId) {
        try {
            const result = await axios.get(`http://localhost:8080/api/v1/users/${userId}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            setAuthState({
                user: {
                    username: result.data.username,
                    email: result.data.email,
                    authority: result.data.authorities[0].authority
                },
                status: 'done',
            });
            // {authState.user.authority === "USER" && history.push("/available_tips")}
            // {authState.user.authority === "ADMIN" && history.push("/link")}
            console.log("Authorityyyyyy", result.data.authorities[0].authority)
        } catch(e) {
            console.error(e);
        }
    }

    async function login(jwtToken) {
        localStorage.setItem('token', jwtToken);
        const decodedToken = jwtDecode(jwtToken)
        const userId = decodedToken.sub;

        try {
            const result = await axios.get(`http://localhost:8080/api/v1/users/${userId}`)
            if (result.data.authorities[0].authority === "USER") history.push("/available_tips")
            if (result.data.authorities[0].authority === "ADMIN") history.push("/link")

        } catch (e) {
            console.log("helaas")
        }

        fetchUserData(jwtToken, userId);
        // history.push("/available_tips")
        // authState.user.authority === "ADMIN" && history.push("/link")
        // authState.user.authority === "ADMIN" && history.push("/link");
        // console.log(authState.user.authority)
    }

    function logout() {
        console.log('logout!');
    }

    const data = {
        ...authState,
        login: login,
        logout: logout,
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
