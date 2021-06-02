import React from 'react';
import './TipSmallVersion.css'

function TipSmallVersion ( { image, adres } ) {
    return (

        <form>
            <div className="smallTipBox">
                <div id="titelSmallTip">{adres}</div>
                <div className="pictureBox">
                    <img id="displayPic" src={image} alt={adres}/>
                </div>
                <button id="readMoreButton">Lees meer</button>
            </div>
        </form>
    )
}

export default TipSmallVersion;