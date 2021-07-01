import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import './LogIn.css';
import { NavLink } from 'react-router-dom';
import {AuthContext} from "../Context/AuthContextProvider";
import axios from "axios";


function LogInComp () {

    const {handleSubmit, register} = useForm();
    const {login} = useContext(AuthContext);

    async function sendInfo(data) {
        try {
            const result = await axios.post('http://localhost:8080/api/v1/authenticate', data);
            login(result.data.jwt)
            console.log("jwt", result.data.jwt)
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

// <form   onSubmit={handleSubmit(sendInfo)}>
//     <div className="buttonBoxLogIn">
//         <NavLink    exact to="/" className="change"
//                     id="logIn">Login</NavLink>
//         <NavLink    to="/register" className="change"
//                     id="register"
//         >Registreer</NavLink>
//     </div>
//     <div className="email">
//         <label>
//             <input  className="boxLogIn"
//                     id="emailField"
//                     type="text"
//                     placeholder=" ➡ e-mail adres:"
//                     {...register("emailInput")}
//             />
//         </label>
//         <label id="password">
//             <input  className="boxLogIn"
//                     id="passwordField"
//                     type="password"
//                     placeholder=" ➡ wachtwoord:"
//                     {...register("passwordInput")}
//             />
//         </label>
//         <button id="forgotP"
//                 className="boxLogIn"
//         >Wachtwoord vergeten?
//         </button>
//     </div>
//     <div className="buttonBoxLogInTwo">
//         <button className="boxLogIn"
//                 type="submit"
//                 id="logInButton">Inloggen</button>
//     </div>
// </form>