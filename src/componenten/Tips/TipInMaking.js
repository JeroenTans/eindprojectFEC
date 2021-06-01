import React from 'react';
import './TipInMaking.css';

function TipInMaking ({ uploadImage, uploadAlt, adres, whatIsTheTipAbout }) {
    return (
        <>
            <div>
                <form  className="tipInMakingBox">
                    <div className="tipBoxTwo" id="pictureDisplay">
                        <img id="pictureDisplay" src={uploadImage} alt={uploadAlt}/>
                    </div>
                    <div id="adressDisplay"  className="tipBoxTwo" >{adres}</div>
                    <div id="textDisplayTip"  className="tipBoxTwo" >{whatIsTheTipAbout}</div>
                    <div className="checkboxTipInMakingOne" >
                    <input type="checkbox" id="checkboxTipInMakingOne"/>Publieke tip</div>
                    <div className="checkboxTipInMakingTwo">
                    <input type="checkbox" id="checkboxTipInMakingTwo"/>Prive tip</div>
                    <button id="plusButton">Voeg uw tip toe</button>
                </form>
            </div>
        </>
    )
}

export default TipInMaking;