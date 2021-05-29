import React from 'react';
import './CompleteTipFocus.css';

function CompleteTipFocus ( { uploadImage, uploadAlt, adres, whatIsTheTipAbout } ) {
    return (
        <>
            <div className="tipBox">
                <div className="tipBoxTwo" id="pictureDisplay">
                    <img id="pictureDisplay" src={uploadImage} alt={uploadAlt}/>
                </div>
                <div id="adressDisplay"  className="tipBoxTwo" >{adres}</div>
                <div id="textDisplayTip"  className="tipBoxTwo" >{whatIsTheTipAbout}</div>

                <button
                    className="tipBoxTwo"
                    id="buttonOne">Lees review</button>
                <button
                    className="tipBoxTwo"
                    id="buttonTwo">Schrijf review</button>

            </div>
        </>

    )
}

export default CompleteTipFocus;