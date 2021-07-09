import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import './LogIn.css';
import { NavLink, useHistory } from 'react-router-dom';
import {useAuthContext} from "../Context/AuthContextProvider";
import axios from "axios";


function LogInComp () {

    const {handleSubmit, register} = useForm();
    const {login, user} = useAuthContext();
    const history = useHistory();

    async function sendInfo(data) {
        try {
            const result = await axios.post('http://localhost:8080/api/v1/authenticate', data);
            // {result.data.authorityRole === "USER" && history.push("/available_tips")||result.data.authorityRole === "ADMIN" && history.push("/link")}
            // {result.data.authorityRole === "ADMIN" && history.push("/link")}

            login(result.data.jwt, result)

            // Maak backend zo dat de backend gelijk alle belangrijke informatie over de gebruiker meestuurt
            // Geef die mee aan de login functie in de context
            // in de context kan gelijk de state worden gezet met de user
            // En weet je gelijk wat de rol is en naar welke pagina deze gestuurd moet worden
            // login(result.data.jwt, data)
        } catch (e) {
            console.error(e);
        }
    }

        return (
            <div className="completeRegister">
                <form onSubmit={handleSubmit(sendInfo)}>
                    <div className="logInAndRegister">
                        <NavLink exact to="/" id="loginPageIdOne" className="logInRegister">Login</NavLink>
                        <NavLink to="/register" id="registerPageIdOne" className="logInRegister">Registreer</NavLink>
                    </div>
                    <label className="labelRegister" htmlFor="e-mail">e-mail:
                        <input
                            className="inputFieldRegister"
                            type="text"
                            placeholder="➡ type hier uw e-mail adres:"
                            {...register("username")}
                        />
                    </label>
                    <label className="labelRegister" htmlFor="wachtwoord">wachtwoord:
                        <input className="inputFieldRegister"
                               type="text"
                               placeholder="➡ type hier uw wachtwoord:"
                               {...register("password")}
                        />
                    </label>
                    <div className="buttonRegisterPage">
                        <button id="registerButton">inloggen</button>
                    </div>
                </form>
            </div>
        )

}
export default LogInComp;
