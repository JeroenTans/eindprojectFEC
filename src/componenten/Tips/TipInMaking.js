import React from 'react';
import './TipInMaking.css';

function TipInMaking ({ uploadImage, uploadAlt, adres, whatIsTheTipAbout }) {
    return (
        <>
                <form  className="tipInMakingBox">

                    <div className="pictureDisplay">
                        <img src={uploadImage} alt=""/>
                    </div>

                    <div className="adres">
                        <input  type="text"
                                className="inputAdres"
                                placeholder="Voeg hier de titel toe:"/>
                    </div>

                        <textarea   className="textDis"
                                    cols="30" rows="10"
                                    placeholder="Voeg hier de omschrijving toe:"/>

                    <div className="checkboxTipInMakingOne" >
                        <input type="checkbox"/>Publiek
                    </div>

                    <div className="checkboxTipInMakingTwo">
                        <input type="checkbox"/>Prive
                    </div>

                    <button id="plusButton">Voeg uw tip toe</button>
                </form>
        </>
    )
}

export default TipInMaking;
