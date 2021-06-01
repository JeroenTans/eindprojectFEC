import React from 'react';
import './Register.css'
import { useForm } from 'react-hook-form';


function Register (){

    const { handleSubmit, formState: { errors }, register } = useForm();

    function sendInfo (e) {
        console.log(e);
    }

return (
    <>
        <form   onSubmit={handleSubmit(sendInfo)}
                >
            <div className="registerForm">
                <div>
                    <button className="changeRegister"
                            id="logInPage">Login</button>
                    <button className="changeRegister"
                            id="registerPage"
                    >Registreer</button>
                </div>
                <label>
                    <input  type="text"
                            id="emailFieldRegister"
                            className="boxRegister"
                            placeholder=" ➡ e-mail adres:"
                            {...register("emailRegistration")}
                            />
                </label>
                <label id="city">
                    <input  type="text"
                            className="boxRegister"
                            placeholder=" ➡ woonachtig in:"
                            {...register("city")}
                            />
                </label>
                <label id="makePassword">
                    <input  type="password"
                            className="boxRegister"
                            placeholder=" ➡ wachtwoord:"
                            {...register("password")}
                            />
                    <input  type="password"
                            className="boxRegister"
                            placeholder=" ➡ bevestig wachtwoord:"
                            {...register("passwordConform")}
                            />
                    <button
                            type="submit"
                            id="registerButton">registreer</button>
                </label>
            </div>
        </form>
    </>
)

}

export default Register;