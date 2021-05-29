import React from 'react';
import './LogIn.css';


function LogIn (){
    return (
        <>
            <form className="formComplete">
                <div className="logInForm">
                    <div className="buttonBoxLogIn">
                        <button className="change" id="logIn">Login</button>
                    {/*</div>*/}
                    {/*<div className="buttonBoxRegister">*/}
                        <button className="change" id="register">Registreer</button>
                    </div>
                    <label id="email">
                        <input  className="boxLogIn"
                                id="emailField"
                                type="text" placeholder=" ➡ e-mail adres:"/>
                    </label>
                    <label id="password">
                        <input  className="boxLogIn"
                                id="passwordField"
                                type="password" placeholder=" ➡ wachtwoord:"/>
                    </label>
                    <button id="forgotP"
                            className="boxLogIn"
                            >Wachtwoord vergeten?
                    </button>
                    <div className="ButtonBoxLogIn">
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