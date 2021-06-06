import React, { useState } from 'react';
import './TipSmallVersion.css'
import PopUp from "../popup/PopUp";
import CompleteTipFocus from "./CompleteTipFocus";


function TipSmallVersion ( { image, adres } ) {

    const [buttonPopup, toggleButtonPopup] = useState(false);

    function openPopup (e) {
        toggleButtonPopup(true);
        e.preventDefault()
    }

    return (

        <div className="completeSmallTipBox">
            <div id="pictureBox" className="smallTipBox">
                <img id="displayPic" src={image} alt={adres}/>
            </div>
            <div id="titelSmallTip" className="smallTipBox">
                <div className="adressBoxSmallTip">
                    {adres}hallo
                </div>
                <div className="buttonBoxReadMore">
                    <button id="readMoreButton"
                            onClick={(e)=>openPopup(e)}
                    >Klik hier om meer te lezen...</button>
                    <PopUp trigger={buttonPopup} setTrigger={toggleButtonPopup}>
                        <CompleteTipFocus/>
                    </PopUp>
                </div>
            </div>

        </div>
    )
}

export default TipSmallVersion;
