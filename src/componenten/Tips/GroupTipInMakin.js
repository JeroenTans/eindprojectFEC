import React, {useContext, useState} from 'react';
import './TipInMaking.css';
import {useForm} from 'react-hook-form';
import axios from "axios";
import {AuthContext} from "../Context/AuthContextProvider";
import PopUp from "../popup/PopUp";
import Response from "../response/Response";

function GroupTipInMaking () {

    const { handleSubmit, formState: { errors }, register } = useForm();
    const [buttonPopupRead, toggleButtonPopupRead] = useState(false);
    const [isPrivateTipFe, toggleIsPrivateTipFe] = useState(false);
    const [isPublicTipFe, toggleIsPublicTipFe] = useState(true);
    const [isStandardTipFe, toggleStandardTipFe] = useState(false);
    const {user} = useContext(AuthContext);

    async function sendInfo (data) {

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
        formData.append("privateTip", false)
        formData.append("publicTip", false)
        formData.append("standardTip", false)
        formData.append("picturePath", data.picturePath[0])
        formData.append("username", user.username)
        formData.append("sendTip", true)
        formData.append("groupName", "Tipsy")

        sendInfo(formData)
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
                <div>
                    <input  type="text"
                            placeholder="Voeg de groepsnaam toe:"
                            id="groupInput"
                            {...register("groupName")}
                            />
                </div>
                {/*<div className="checkboxTipInMakingOne">*/}
                {/*    {user.authority === "ADMIN" ?*/}
                {/*        <input  type="checkbox"*/}
                {/*                checked={isStandardTipFe}*/}
                {/*                onChange={(e)=>standardFunction(e)}/>:*/}
                {/*        <input  type="checkbox"*/}
                {/*                checked={isPrivateTipFe}*/}
                {/*                onChange={(e)=> isPublicTipFe?toggleIsPublicTipFe(false) && toggleIsPrivateTipFe(e.target.checked):toggleIsPrivateTipFe(e.target.checked)}*/}
                {/*        />}Prive*/}
                {/*</div>*/}
                {/*<div className="checkboxTipInMakingTwo">*/}
                {/*    <input  type="checkbox"*/}
                {/*            checked={isPublicTipFe}*/}
                {/*            onChange={(e)=> isPrivateTipFe?toggleIsPrivateTipFe(false) && toggleIsPublicTipFe(e.target.checked):toggleIsPublicTipFe(e.target.checked)}*/}
                {/*    />Publiek*/}
                {/*</div>*/}
                <button id="plusButton" >Voeg uw tip toe</button>
            </form>
        </>
    )
}

export default GroupTipInMaking;