import React, { useState } from 'react';
import './TipInMaking.css';
import { useForm } from 'react-hook-form';
import UploadImage from "../uploadImage/UploadImage";
import {encodeBase64} from "../../helpers/encodeBase64";
import axios from "axios";

function TipInMaking ({ uploadImage, uploadAlt, adres, whatIsTheTipAbout }) {

    const { handleSubmit, formState: { errors }, register } = useForm();
    const [buttonPopup, toggleButtonPopup] = useState(false);
    const [isPrivateTipFe, toggleIsPrivateTipFe] = useState(false);
    const [isPublicTipFe, toggleIsPublicTipFe] = useState(true);

    function openPopup (e) {
        toggleButtonPopup(true);
        e.preventDefault()
    }

    async function sendInfo (data) {

        const picturePath = encodeBase64(data.picturePath);
        const dataObject = {
            address: data.address,
            explanation: data.textAboutTheTip,
            privateTip: isPrivateTipFe,
            publicTip: isPublicTipFe,
            standardTip: false,
            picturePath: picturePath
        }
        console.log(isPrivateTipFe, isPublicTipFe)
        try {
            await axios.post('http://localhost:8080/api/v1/tips/post_tips', dataObject)
        } catch (e) {
            console.log("Het is niet gelukt, error: " + e)
        }
    }

    return (
                <form onSubmit={handleSubmit(sendInfo)}  className="tipInMakingBox">
                    <div className="pictureDisplay">
                        <UploadImage register={register("picturePath", {
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
                                />{errors.address && <p className="errorMessage">Het adres veld is niet ingevuld</p>}{adres}
                    </div>
                        <textarea   className="textDis"
                                    cols="30" rows="10"
                                    placeholder="Voeg hier de omschrijving toe:"
                                    {...register("textAboutTheTip")}
                                    />{whatIsTheTipAbout}
                                    <div className="checkboxTipInMakingOne">
                                        <input  type="checkbox"
                                                checked={isPrivateTipFe}
                                                onChange={(e)=> isPublicTipFe?toggleIsPublicTipFe(false) && toggleIsPrivateTipFe(e.target.checked):toggleIsPrivateTipFe(e.target.checked)}
                                                />Prive
                                                {/*{...register("whatTypeOfTip", {*/}
                                                {/*    required:true*/}
                                                {/*})}*/}
                                    </div>
                                    <div className="checkboxTipInMakingTwo">
                                            <input  type="checkbox"
                                                    checked={isPublicTipFe}
                                                    onChange={(e)=> isPrivateTipFe?toggleIsPrivateTipFe(false) && toggleIsPublicTipFe(e.target.checked):toggleIsPublicTipFe(e.target.checked)}
                                                    />Publiek
                                                    {/*{...register("whatTypeOfTip", {*/}
                                                    {/*    required:true*/}
                                                    {/*})}*/}
                                    </div>
                    <button id="plusButton">Voeg uw tip toe</button>
                </form>

    )
}

export default TipInMaking;
