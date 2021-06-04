import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './LogIn.css';
import { NavLink, Link } from 'react-router-dom';


function LogIn (){

    const { handleSubmit, formState: { errors }, register } = useForm();

    function sendInfo (e) {
        console.log(e);
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
                            {...register("e-mailInput")}
                            />
                </label>
                <label className="labelRegister" htmlFor="wachtwoord">wachtwoord:
                    <input  className="inputFieldRegister"
                            type="text"
                            placeholder="➡ type hier uw wachtwoord:"
                            {...register("passwordInput")}
                            />
                </label>
                <div className="buttonRegisterPage">
                    <button id="registerButton">inloggen</button>
                </div>
            </form>
        </div>
    )
}

export default LogIn;

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