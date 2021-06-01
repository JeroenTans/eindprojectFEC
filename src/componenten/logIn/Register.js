import React, { useState } from 'react';
import './Register.css'
import { useForm } from 'react-hook-form';


function Register (){

    const { handleSubmit, formState: { errors }, register } = useForm();

    function sendInfo (e) {
        console.log(e);
    }

    const [password, setPassword] = React.useState("");
    const [checkpassword, setCheckPassword] = React.useState("");



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
                            {...register("emailRegistration", {
                                required: true,
                                validate: (value) => value.includes('@')
                            })}
                            />{errors.emailRegistration && errors.emailRegistration.type === "required" && <span className="errorMessage">Dit veld is verplicht en moet een '@' bevatten.</span>}
                </label>
                <label id="city">
                    <input  type="text"
                            className="boxRegister"
                            placeholder=" ➡ woonachtig in:"
                            {...register("city", {
                                required:true,
                                })}
                            />{errors.city && errors.city.type === "required" && <span className="errorMessage">Dit veld is verplicht.</span>}
                </label>
                <label id="makePassword">
                    <input  type="password"
                            className="boxRegister"
                            placeholder=" ➡ wachtwoord:"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}/>
                            {/*{...register("password", {*/}
                            {/*    required:true,*/}
                            {/*    maxLength: {*/}
                            {/*        value:15,*/}
                            {/*    },*/}
                            {/*    minLength: {*/}
                            {/*        value: 6,*/}
                            {/*    },*/}
                            {/*})}*/}
                            {/*/>{errors.password && errors.password.type === "required" && <span className="errorMessage">Dit veld is verplicht en moet minimaal bestaan uit zes karakters en maximaal uit 15.</span>}*/}
                    <input  type="password"
                            className="boxRegister"
                            placeholder=" ➡ bevestig wachtwoord:"
                            value={checkpassword}
                            onChange={(e)=>setCheckPassword(e.target.value)}/>
                            {/*{...register("passwordConfirm", {*/}
                            {/*    required:true,*/}
                            {/*})}*/}
                            {/*/>{errors.passwordConfirm && errors.passwordConfirm.type === "required" && <span className="errorMessage">Dit wachtwoord komt niet overeen met het eerder opgegeven wachtwoord</span>}*/}
                    <button className="boxLogIn"
                            type="submit"
                            id="registerButton">registreer</button>
                </label>
            </div>
        </form>
    </>
)

}

export default Register;