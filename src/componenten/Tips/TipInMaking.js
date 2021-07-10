import React, {useState} from 'react';
import './TipInMaking.css';
import {useForm} from 'react-hook-form';
import axios from "axios";
import {useAuthContext} from "../Context/AuthContextProvider";
import PopUp from "../popup/PopUp";
import Response from "../response/Response";

function TipInMaking () {

    const { handleSubmit, formState: { errors }, register } = useForm();
    const [buttonPopupRead, toggleButtonPopupRead] = useState(false);
    const [isPrivateTipFe, toggleIsPrivateTipFe] = useState(false);
    const [isPublicTipFe, toggleIsPublicTipFe] = useState(true);
    const [isStandardTipFe, toggleStandardTipFe] = useState(false);
    const {user} = useAuthContext()

    async function sendInfo (formData) {

        try {
            await axios.post('http://localhost:8080/api/v1/tips/tip_upload', formData)
            openPopup()
        } catch (e) {
            console.log(console.error(e))
        }
    }

    const formData = new FormData();

    const formSubmit = (data) => {

        formData.append("explanation", data.textAboutTheTip)
        formData.append("address", data.address)
        {user.authority === "ROLE_ADMIN" ? (
            formData.append("privateTip", false)):(
            formData.append("privateTip", isPrivateTipFe))}
        {user.authority === "ROLE_ADMIN" ? (
            formData.append("publicTip", false)):(
            formData.append("publicTip", isPublicTipFe))}
        {user.authority === "ROLE_ADMIN" ? (
            formData.append("standardTip", true)):(
            formData.append("standardTip", isStandardTipFe))}
        formData.append("groupTip", false)
        formData.append("picturePath", data.picturePath[0])
        formData.append("username", user.username)
        formData.append("sendTip", true)
        formData.append("groupName", "No Group")

        sendInfo(formData)
    }

    function standardFunction(e){
        toggleIsPrivateTipFe(false)
        toggleStandardTipFe(true)
        toggleIsPublicTipFe(false)
    }

    function openPopup (e) {
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
                                })}/>{errors.picturePath && <p className="errorMessageImage">Het is verplicht een foto te uploaden.</p>}
                    </div>
                    <div className="adres">
                        <input  type="text"
                                name="address"
                                className="inputAdres"
                                placeholder="Voeg hier het adres toe:"
                                {...register("address", {
                                    required:true
                                })}/>{errors.address && <p className="errorMessageAddress">Het is verplicht een adres op te geven.</p>}
                    </div>
                        <textarea   className="textDis"
                                    cols="30" rows="10"
                                    placeholder="Voeg hier de omschrijving toe:"
                                    {...register("textAboutTheTip", {
                                        required:true
                                    })}
                                    />{errors.textAboutTheTip && <p className="errorMessage">Het is verplicht alle velden in te vullen</p>}
                                    <div className="checkboxTipInMakingOne">
                                        {user.authority === "ADMIN" ?
                                                <input  type="checkbox"
                                                        checked={isStandardTipFe}
                                                        onChange={(e)=>standardFunction(e)}/>:
                                        <input  type="checkbox"
                                                checked={isPrivateTipFe}
                                                onChange={(e)=> isPublicTipFe?toggleIsPublicTipFe(false) && toggleIsPrivateTipFe(e.target.checked):toggleIsPrivateTipFe(e.target.checked)}
                                                />}Prive
                                    </div>
                                    <div className="checkboxTipInMakingTwo">
                                            <input  type="checkbox"
                                                    checked={isPublicTipFe}
                                                    onChange={(e)=> isPrivateTipFe?toggleIsPrivateTipFe(false) && toggleIsPublicTipFe(e.target.checked):toggleIsPublicTipFe(e.target.checked)}
                                                    />Publiek
                                    </div>
                    <button id="plusButton" >Voeg uw tip toe</button>
                </form>
        </>
    )
}

export default TipInMaking;
