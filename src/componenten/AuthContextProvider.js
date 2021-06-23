import React, { createContext, useState, useEffect } from 'react';
import {useHistory} from "react-router-dom";

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

    function login() {
        console.log('login!');
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
