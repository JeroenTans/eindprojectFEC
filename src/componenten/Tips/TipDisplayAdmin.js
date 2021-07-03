import React, {useContext, useState} from 'react'
import './TipDisplayAdmin.css'
import {useForm} from "react-hook-form";
import {AuthContext} from "../Context/AuthContextProvider";
import axios from "axios";

function TipDisplayAdmin () {
    const { handleSubmit, formState: { errors }, register } = useForm();
    const {user} = useContext(AuthContext);



    async function sendInfo (data) {

        try {
            await axios.post('http://localhost:8080/api/v1/tips/standardTip_upload', formData)
        } catch (e) {
            console.log("Helaas, het is niet gelukt ", e)
        }
    }

    const formData = new FormData();

    const formSubmit = (data) => {
        console.log(data)
        console.log(user)
        console.log("ik zit in de formsubmit!")
        formData.append("explanation", data.textAboutTheTip)
        formData.append("address", data.address)
        formData.append("privateTip", false)
        formData.append("publicTip", false)
        formData.append("standardTip", true)
        formData.append("picturePath", data.picturePath[0])
        formData.append("username", user.username)

        sendInfo(formData)
    }

    return (
        <form onSubmit={handleSubmit(formSubmit)}  className="tipInMakingBox">
            <div className="pictureDisplay">
                <input type="file" {...register("picturePath", {
                    required:true
                })}
                />
            </div>
            <div className="adres">
                <input  type="text"
                        className="inputAdres"
                        placeholder="Voeg hier de titel toe:"
                        {...register("address", {
                            required:true
                        })}
                />{errors.address && <p className="errorMessage">Het adres veld is niet ingevuld</p>}
            </div>
            <textarea   className="textDis"
                        cols="30" rows="10"
                        placeholder="Voeg hier de omschrijving toe:"
                        {...register("textAboutTheTip")}
            />
            <button id="plusButton">Voeg uw tip toe</button>
        </form>

    )
}

export default TipDisplayAdmin;