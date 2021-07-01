import React, {useContext, useState} from 'react';
import './TipInMaking.css';
import {useForm} from 'react-hook-form';
import axios from "axios";
import {AuthContext} from "../Context/AuthContextProvider";



function TipInMaking () {

    const { handleSubmit, formState: { errors }, register } = useForm();
    // const [buttonPopup, toggleButtonPopup] = useState(false);
    const [isPrivateTipFe, toggleIsPrivateTipFe] = useState(false);
    const [isPublicTipFe, toggleIsPublicTipFe] = useState(true);
    const {user} = useContext(AuthContext);



    async function sendInfo (data) {

        try {
            await axios.post('http://localhost:8080/api/v1/tips/tip_upload', formData)
        } catch (e) {
            console.log(console.error(e))
        }
    }

    const formData = new FormData();

    const formSubmit = (data) => {
        console.log(data)
        console.log(user)
        console.log("ik zit in de formsubmit!")
        formData.append("explanation", data.textAboutTheTip)
        formData.append("address", data.address)
        formData.append("privateTip", isPrivateTipFe)
        formData.append("publicTip", isPublicTipFe)
        formData.append("standardTip", false)
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
                                    <div className="checkboxTipInMakingOne">
                                        <input  type="checkbox"
                                                checked={isPrivateTipFe}
                                                onChange={(e)=> isPublicTipFe?toggleIsPublicTipFe(false) && toggleIsPrivateTipFe(e.target.checked):toggleIsPrivateTipFe(e.target.checked)}
                                                />Prive
                                    </div>
                                    <div className="checkboxTipInMakingTwo">
                                            <input  type="checkbox"
                                                    checked={isPublicTipFe}
                                                    onChange={(e)=> isPrivateTipFe?toggleIsPrivateTipFe(false) && toggleIsPublicTipFe(e.target.checked):toggleIsPublicTipFe(e.target.checked)}
                                                    />Publiek
                                    </div>
                    <button id="plusButton">Voeg uw tip toe</button>
                </form>

    )
}

export default TipInMaking;
