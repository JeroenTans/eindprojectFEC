import React, { useState } from 'react';
import './Register.css'
import { useForm } from 'react-hook-form';
import { NavLink } from "react-router-dom";
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';


function Register (){

    const { handleSubmit, formState: { errors }, register } = useForm();
    const [password, setPassword] = useState("");
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');
    const [registerSuccess, toggleRegisterSuccess] = useState(false);
    const history = useHistory();

    async function sendInfo (data) {
        setError('');
        toggleLoading(true);

        try {
            const result = await axios.post('http://localhost:8080/api/v1/users', {
                email: data.emailRegistration,
                password: data.confirmPassword,
                residence: data.residence,
                username: data.emailRegistration
            });
            toggleRegisterSuccess(true);
            setTimeout(() => {
                history.push('/');
            }, 2000);
        } catch(e) {
            console.error(e);
            setError(`Het registeren is mislukt. Probeer het opnieuw (${e.message})`);
        }
        toggleLoading(false);
    }

    const validatePassword = (value)=> {
        if (password !== value) return false;
    }

    const checkCity = (value) => {
        const availableCity = "Amsterdam"
        if (value !== availableCity) return false;
    }

return (

    <div className="completeRegister">
        <form onSubmit={handleSubmit(sendInfo)}>
            <div className="logInAndRegister">
                        <NavLink id="loginPageId" className="logInRegister" exact to="/">Login</NavLink>
                        <NavLink id="registerPageId" className="logInRegister" to="/register">Registreer</NavLink>
            </div>
            <label className="labelRegister" htmlFor="e-mail">e-mail:
                <input  className="inputFieldRegister"
                        type="text"
                        placeholder="➡ type hier uw e-mail adres:"
                        {...register("emailRegistration", {
                            required: true,
                            validate: (value) => value.includes('@'),
                        })}
                />{errors.emailRegistration && <p className="errorMessage">Het e-mail adres is verplicht en moet een "@" bevatten</p>}
                </label>
                <label className="labelRegister" htmlFor="woonplaats">woonplaats:
                    <input  className="inputFieldRegister"
                            type="text"
                            placeholder="➡ type hier waar u woont:"
                            {...register("residence", {
                                required: true,
                                validate: (value) => checkCity(value),
                            })}
                            />{errors.residence && <p className="errorMessage">Dit veld is verplicht en kan momenteel alleen Amsterdam zijn.</p>}
                </label>
                <label className="labelRegister" htmlFor="wachtwoord">wachtwoord:
                    <input  className="inputFieldRegister"
                            type="password"
                            placeholder="➡ type hier uw wachtwoord:"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            />
                </label>
                <label className="labelRegister" htmlFor="wachtwoord">bevestig wachtwoord:
                    <input  className="inputFieldRegister"
                            type="password"
                            placeholder="➡ bevestig hier uw wachtwoord:"
                            {...register("confirmPassword", {
                                required: true,
                                validate: (value => validatePassword(value))
                            })}
                            />{errors.confirmPassword && <p className="errorMessage">De opgegeven wachtwoorden komen niet overeen</p>}
                </label>
                <div className="buttonRegisterPage">
                    <button type="submit" id="registerButton" disabled={loading}>{loading?"Versturen..":"Registreer"}</button>
                    {registerSuccess === true &&  <p className="succesMessageLogin">Registeren is gelukt! Je wordt nu doorgestuurd naar de inlog pagina!</p>}
                    {error && <p className="error-message">{error}</p>}
                </div>
        </form>
    </div>
    )
}

export default Register;

