import React from 'react';
import './ReviewScreen.css'

function ReviewScreen () {
    return (
        <>
            <div className="tipBox">
                <div className="tipBoxTwo" id="pictureDisplay">
                    <img id="pictureDisplay" src="" alt=""/>
                </div>
                <div id="adressDisplay"  className="tipBoxTwo" />
                <div id="textDisplayTip"  className="tipBoxTwo" />
                <button id="buttonHeartBrokenScreen" className="heartsScreen">💔</button>
                <button id="buttonHeartScreen" className="heartsScreen">💖</button>
            </div>
        </>

    )
}

export default ReviewScreen;