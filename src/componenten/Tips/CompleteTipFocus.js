import React, { useState } from 'react';
import './CompleteTipFocus.css';
import PopUp from "../popup/PopUp";
import MakeReview from "../reviewScreen/MakeReview";

function CompleteTipFocus ( { uploadImage, uploadAlt, adres, whatIsTheTipAbout } ) {

    const [buttonPopup, toggleButtonPopup] = useState(false);

    function openPopup (e) {
        toggleButtonPopup(true);
        e.preventDefault()
    }

    return (
            <div className="tipBox">
                <div className="tipBoxTwo" id="pictureDisplay">
                    <img id="pictureDisplay" src={uploadImage} alt={uploadAlt}/>
                </div>
                <div id="adressDisplay"  className="tipBoxTwo" >{adres}</div>
                <div id="textDisplayTip"  className="tipBoxTwo" >{whatIsTheTipAbout}</div>

                <button
                    className="tipBoxTwoBut"
                    id="buttonOne">Lees review</button>
                <button
                    className="tipBoxTwoBut"
                    id="buttonTwo"
                    onClick={(e)=>openPopup(e)}
                    >Schrijf review</button>
                <PopUp trigger={buttonPopup} setTrigger={toggleButtonPopup}>
                    <MakeReview/>
                </PopUp>
            </div>

    )
}

export default CompleteTipFocus;