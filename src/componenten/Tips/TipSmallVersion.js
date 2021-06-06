import React from 'react';
import './TipSmallVersion.css'
import PopUp from "../PopUp";

function TipSmallVersion ( { image, adres } ) {
    return (

        <form>
            <div className="smallTipBox">
                <div id="titelSmallTip">{adres}</div>
                <div className="pictureBox">
                    <img id="displayPic" src={image} alt={adres}/>
                </div>
                <button id="readMoreButton">Lees meer</button>
                <PopUp trigger={false}>
                    <p>Halloooo</p>
                </PopUp>
            </div>
        </form>
    )
}

export default TipSmallVersion;