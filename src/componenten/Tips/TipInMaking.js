import React, { useState } from 'react';
import './TipInMaking.css';
import { useForm } from 'react-hook-form';
import PopUp from "../popup/PopUp";
import Response from "../response/Response";
import CompleteTipFocus from "./CompleteTipFocus";

function TipInMaking ({ uploadImage, uploadAlt, adres, whatIsTheTipAbout }) {

    const { handleSubmit, formState: { errors }, register } = useForm();
    const [imageTip, setImageTip] = useState();
    const [buttonPopup, toggleButtonPopup] = useState(false);

    function openPopup (e) {
        toggleButtonPopup(true);
        e.preventDefault()
    }

    function sendInfo (data) {
        console.log(data);
        <PopUp trigger={buttonPopup} setTrigger={toggleButtonPopup}>
            <Response message="Super! De tip word z.s.m. gelinkt, veel plezier!"/>
        </PopUp>
    }

    return (

                <form onSubmit={handleSubmit(sendInfo)}  className="tipInMakingBox">
                    <div className="pictureDisplay">
                        <input  id="fileLoader"
                                type="file"
                                // ref={register}
                                name="picture"
                                value={imageTip}
                                onChange={(e)=>setImageTip(e.target.files)}
                                />
                        {/*<img src={uploadImage} alt={uploadAlt}/>*/}
                    </div>
                    <div className="adres">
                        <input  type="text"
                                className="inputAdres"
                                placeholder="Voeg hier de titel toe:"
                                {...register("adres")}
                                />{adres}
                    </div>
                        <textarea   className="textDis"
                                    cols="30" rows="10"
                                    placeholder="Voeg hier de omschrijving toe:"
                                    {...register("textAboutTheTip")}
                                    />{whatIsTheTipAbout}
                                    <div className="checkboxTipInMakingOne">
                                        <input  type="radio"
                                                value="publiek"
                                                {...register("whatTypeOfTip")}
                                                />Prive
                                    </div>
                                    <div className="checkboxTipInMakingTwo">
                                            <input  type="radio"
                                                    value="prive"
                                                    {...register("whatTypeOfTip")}
                                                    />Publiek
                                    </div>
                    <button id="plusButton">Voeg uw tip toe</button>
                </form>

    )
}

export default TipInMaking;
