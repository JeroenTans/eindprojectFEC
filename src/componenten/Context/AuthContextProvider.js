import React, { createContext, useState, useEffect } from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [ authState, setAuthState ] = useState({
        user: null,
        status: 'pending',
    })

    const history = useHistory();

    useEffect(() => {
        // hier gaan we later checken of er toevallig nog een ingelogde gebruiker is, zodat we opnieuw gegevens kunnen ophalen
        // maar voor doen we dat niet, dus zetten we de status op 'done'
        setAuthState({
            user: null,
            status: 'done',
        })
    }, []);

    function login(jwtToken) {
        console.log("in de login functie")
        console.log(jwtToken)
        localStorage.setItem('token', jwtToken);
        const decodedToken = jwtDecode(jwtToken)
        console.log("decodedToken: ", decodedToken);
        const userId = decodedToken.sub;

        fetchUserData(jwtToken, userId);
    }

    async function fetchUserData(token, userId) {
        console.log("In de functie")
        try {
            console.log("in de try ")
            const result = await axios.get(`http://localhost:8080/api/v1/users/${userId}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            console.log(result);
            console.log("wat gebeurd hier?")

            setAuthState({
                user: {
                    username: result.data.username,
                    email: result.data.email,
                    // als je ook rollen hebt, plaats je die er ook bij!
                },
                status: 'done',
            });

            history.push('/available_tips');
        } catch(e) {
            console.error(e);
        }
    }

    function logout() {
        console.log('logout!');
    }

    // We hebben de gebruikersdata nodig, functies voor in- en uitloggen, de status van data-ophalen en, mocht het fout gaan, errors!
    // Omdat authState onderdeel willen maken van het data object (en geen object in een object) gebruiken we de spread-operator (...)
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
