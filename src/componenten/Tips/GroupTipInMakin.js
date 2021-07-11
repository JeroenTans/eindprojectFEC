import React, {useState} from 'react';
import './TipInMaking.css';
import {useForm} from 'react-hook-form';
import axios from "axios";
import {useAuthContext} from "../Context/AuthContextProvider";
import PopUp from "../popup/PopUp";
import Response from "../response/Response";
import ErrorMessage from "../errorMessage/ErrorMessage";

function GroupTipInMaking () {

    const { handleSubmit, formState: { errors }, register } = useForm();
    const [buttonPopupRead, toggleButtonPopupRead] = useState(false);
    const {user} = useAuthContext()

    async function sendInfo (data) {

        try {
            await axios.post('http://localhost:8080/api/v1/tips/tip_upload', formData)
            openPopup()
        } catch (e) {
            console.error("De upload is niet gelukt", e)
        }
    }

    const formData = new FormData();

    const formSubmit = (data) => {

        formData.append("explanation", data.textAboutTheTip)
        formData.append("address", data.address)
        formData.append("privateTip", false)
        formData.append("publicTip", false)
        formData.append("standardTip", false)
        formData.append("groupTip", true)
        formData.append("picturePath", data.picturePath[0])
        formData.append("username", user.username)
        formData.append("sendTip", true)
        formData.append("groupName", user.groupName)

        sendInfo(formData)
    }

    function openPopup () {
        toggleButtonPopupRead(true)
    }


    return (
        <>
            <PopUp trigger={buttonPopupRead} setTrigger={toggleButtonPopupRead}>
                <Response message="Bedankt voor de tip, deze is in goede orde ontvangen en verstuurd!"/>
            </PopUp>
            <form onSubmit={handleSubmit(formSubmit)}  className="tipInMakingBox">
                <div className="pictureDisplay">
                    <input type="file"
                           {...register("picturePath", {
                               required:true
                           })}/>{errors.picturePath && <ErrorMessage message="Het is verplicht een image te uploaden."/>}
                </div>
                <div className="adres">
                    <input  type="text"
                            name="address"
                            className="inputAdres"
                            placeholder="Voeg hier het adres toe:"
                            {...register("address", {
                                required:true
                            })}/>{errors.address && <ErrorMessage message="Het is verplicht een adres op te geven."/>}
                </div>
                <textarea   className="textDis"
                            cols="30" rows="10"
                            placeholder="Voeg hier de omschrijving toe:"
                            {...register("textAboutTheTip", {
                                required:true
                            })}
                />{errors.textAboutTheTip && <ErrorMessage message="Het is verplicht alle velden in te vullen"/>}
                <button id="plusButton" >Voeg uw tip toe</button>
            </form>
        </>
    )
}

export default GroupTipInMaking;