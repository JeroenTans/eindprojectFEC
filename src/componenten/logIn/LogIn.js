import React from 'react';
import { useForm } from 'react-hook-form';
import './LogIn.css';
import {NavLink, useHistory} from 'react-router-dom';
import {useAuthContext} from "../../context/AuthContextProvider";
import axios from "axios";

function LogInComp () {

    const {handleSubmit, register} = useForm();
    const {login} = useAuthContext();
    const history = useHistory()

    async function sendInfo(data) {
        try {
            const result = await axios.post('http://localhost:8080/api/v1/authenticate', data);
            login(result.data.jwt, result)
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
