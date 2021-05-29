import React from 'react';
import './LogIn.css';

function LogIn (){
    return (
        <form className="formComplete">
            <div className="formContainerTwo">
                <div className="optionsContainer">
                    <ul className="options">
                        <li>Log in</li>
                        <li>Registreer</li>
                    </ul>
                </div>
                <div className="inputLogReg">
                    <input type="text" id="logIn" placeholder={"E-mail adress:"}/>
                    <input type="text" id="registreer" placeholder={"Wachtwoord:"}/>
                </div>
            </div>
        </form>
    )
}

export default LogIn;