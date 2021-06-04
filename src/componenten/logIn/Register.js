import React, { useState } from 'react';
import './Register.css'
import { useForm } from 'react-hook-form';
import {NavLink} from "react-router-dom";


function Register (){

    const { handleSubmit, formState: { errors }, register } = useForm();

    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [isError, setIsError] = useState("")

    function sendInfo (e) {
        console.log(e);
    }

    const validatePassword = (e)=> {
        setConfirmPassword(e.target.value)
        if (password === e.target.value) console.log(confirmPassword)
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
                            {...register("e-mailInputRegister")}
                            />
                </label>
                <label className="labelRegister" htmlFor="woonplaats">woonplaats:
                    <input  className="inputFieldRegister"
                            type="text"
                            placeholder="➡ type hier waar u woont:"
                            {...register("residence")}
                            />
                </label>
                <label className="labelRegister" htmlFor="wachtwoord">wachtwoord:
                    <input  className="inputFieldRegister"
                            type="text"
                            placeholder="➡ type hier uw wachtwoord:"

                            onChange={(e)=>setPassword(e.target.value)}
                            {...register("password", {
                                required:true,
                                setValueAs: password
                            })}
                            />
                </label>
                <label className="labelRegister" htmlFor="wachtwoord">bevestig wachtwoord:
                    <input  className="inputFieldRegister"
                            type="text"
                            placeholder="bevestig hier uw wachtwoord:"
                            onChange={(e)=>validatePassword(e)}
                            {...register("passwordCheck", {
                                required:true,
                                setValueAs: (e)=>validatePassword(e)
                            })}
                            />
                </label>
                <div className="buttonRegisterPage">
                    <button id="registerButton">registreer</button>
                </div>
        </form>
    </div>

)

}

export default Register;


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
//                         required: true,
//                         validate: (value) => value.includes('@')
//                     })}
//             />{errors.emailRegistration && errors.emailRegistration.type === "required" && <span className="errorMessage">Dit veld is verplicht en moet een '@' bevatten.</span>}
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
