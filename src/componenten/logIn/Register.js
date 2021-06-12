import React, { useState } from 'react';
import './Register.css'
import { useForm } from 'react-hook-form';
import { NavLink } from "react-router-dom";
import axios from 'axios';
import * as url from "url";

function Register (){

    const { handleSubmit, formState: { errors }, register } = useForm();
    const [password, setPassword] = useState("");

    async function sendInfo (e) {

        console.log(e)

        try {
            await axios.post('http://localhost:8080/', e)

            console.log(e);
        } catch (error) {
            console.log("helaas")
        }

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
                />{errors.emailRegistration && <p className="errorMessage">Het e-mail adres is verplicht en moet een "@ "</p>}
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
                            type="text"
                            placeholder="➡ type hier uw wachtwoord:"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            />
                </label>
                <label className="labelRegister" htmlFor="wachtwoord">bevestig wachtwoord:
                    <input  className="inputFieldRegister"
                            type="text"
                            placeholder="➡ bevestig hier uw wachtwoord:"
                            {...register("confirmPassword", {
                                required: true,
                                validate: (value => validatePassword(value))
                            })}
                            />{errors.confirmPassword && <p className="errorMessage">De opgegeven wachtwoorden komen niet overeen</p>}
                </label>
                <div className="buttonRegisterPage">
                    <button type="submit" id="registerButton">registreer</button>
                </div>
        </form>
    </div>

)

}

export default Register;

// <label  htmlFor="first-name">Naam:
//     <input
//         type="text"
//         id="first-name"
//         {...register("voornaam", {
//             required: {value: true, message: "Dit veld is verplicht"}
//         })}
//     />
//     {errors.voornaam && <p>{errors.voornaam.message}</p>}
// </label>


// <form   onSubmit={handleSubmit(sendInfo)}>
//     <div className="registerForm">
//         <div className="boxRegisterChange">
//             <NavLink    exact to="/" className="changeRegister"
//                         id="logInPage">Login</NavLink>
//             <NavLink    to="/register" className="changeRegister"
//                         id="registerPage"
//             >Registreer</NavLink>
//         </div>
//         <label>
//             <input  type="text"
//                     id="emailFieldRegister"
//                     className="boxRegister"
//                     placeholder=" ➡ e-mail adres:"
//                     {...register("emailRegistration", {
//                 required: true,
//                 validate: (value) => value.includes('@')
// })}
// />{errors.emailRegistration && errors.emailRegistration.type === "required" && <span className="errorMessage">Dit veld is verplicht en moet een '@' bevatten.</span>}
//         </label>
//         <label id="city">
//             <input  type="text"
//                     className="boxRegister"
//                     placeholder=" ➡ woonachtig in:"
//                     {...register("city", {
//                         required:true,
//                     })}
//             />{errors.city && errors.city.type === "required" && <span className="errorMessage">Dit veld is verplicht.</span>}
//         </label>
//         <label id="makePassword">
//             <input  type="password"
//                     className="boxRegister"
//                     placeholder=" ➡ wachtwoord:"
//                     value={password}
//                     onChange={(e)=>setPassword(e.target.value)}/>
//             {/*{...register("password", {*/}
//             {/*    required:true,*/}
//             {/*    maxLength: {*/}
//             {/*        value:15,*/}
//             {/*    },*/}
//             {/*    minLength: {*/}
//             {/*        value: 6,*/}
//             {/*    },*/}
//             {/*})}*/}
//             {/*/>{errors.password && errors.password.type === "required" && <span className="errorMessage">Dit veld is verplicht en moet minimaal bestaan uit zes karakters en maximaal uit 15.</span>}*/}
//             <input  type="password"
//                     className="boxRegister"
//                     placeholder=" ➡ bevestig wachtwoord:"
//                     value={checkpassword}
//                     onChange={(e)=>setCheckPassword(e.target.value)}/>
//             {/*{...register("passwordConfirm", {*/}
//             {/*    required:true,*/}
//             {/*})}*/}
//             {/*/>{errors.passwordConfirm && errors.passwordConfirm.type === "required" && <span className="errorMessage">Dit wachtwoord komt niet overeen met het eerder opgegeven wachtwoord</span>}*/}
//             <button className="boxLogIn"
//                     type="submit"
//                     id="registerButton">registreer</button>
//         </label>
//     </div>
// </form>

// {...register("emailRegistration", {
//     required: true,
//     pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
//     message: "Please enter a valid e mail."
// })}
