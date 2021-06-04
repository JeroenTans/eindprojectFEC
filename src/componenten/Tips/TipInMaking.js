import React from 'react';
import './TipInMaking.css';
import { useForm } from 'react-hook-form';

function TipInMaking ({ uploadImage, uploadAlt, adres, whatIsTheTipAbout }) {

    const { handleSubmit, formState: { errors }, register } = useForm();

    function sendInfo (e) {
        console.log(e);
    }

    return (

                <form onSubmit={handleSubmit(sendInfo)}  className="tipInMakingBox">
                    <div className="pictureDisplay">
                        <img src={uploadImage} alt={uploadAlt}/>
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
                    <div className="checkboxTipInMakingOne" >
                        <input type="checkbox"/>Publiek
                    </div>
                    <div className="checkboxTipInMakingTwo">
                        <input type="checkbox"/>Prive
                    </div>
                    <button id="plusButton">Voeg uw tip toe</button>
                </form>

    )
}

export default TipInMaking;
