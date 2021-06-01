import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './LogIn.css';


function LogIn (){

    const { handleSubmit, formState: { errors }, register } = useForm();

    function sendInfo (e) {
        console.log(e);
    }


    return (
        <>
            <form   onSubmit={handleSubmit(sendInfo)}>
                <div>
                    <div className="buttonBoxLogIn">
                        <button className="change"
                                id="logIn">Login</button>
                        <button className="change"
                                id="register"
                                >Registreer</button>
                    </div>
                    <div className="email">
                    <label>
                        <input  className="boxLogIn"
                                id="emailField"
                                type="text"
                                placeholder=" ➡ e-mail adres:"
                                {...register("emailInput")}
                                />
                    </label>
                    <label id="password">
                        <input  className="boxLogIn"
                                id="passwordField"
                                type="password"
                                placeholder=" ➡ wachtwoord:"
                                {...register("passwordInput")}
                                />
                    </label>
                        <button id="forgotP"
                                className="boxLogIn"
                                >Wachtwoord vergeten?
                    </button>
                </div>
                    <div className="buttonBoxLogInTwo">
                        <button className="boxLogIn"
                                type="submit"
                                id="logInButton">Inloggen</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default LogIn;