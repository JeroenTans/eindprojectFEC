import React, { useContext ,useState, useEffect } from 'react';
import './PublicTip.css'
import PopUp from "../../popup/PopUp";
import CompleteTipFocus from "../CompleteTipFocus";
import PublicTipLabel from "./tipLabels.js/PublicTipLabel";
import {PublicTipContext} from "../../Context/PublicTipContextProvider";
import TipByIdContextProvider from "../../Context/TipByIdContextProvider";

function PublicTip () {

    const [buttonPopup, toggleButtonPopup] = useState(false);
    const [tipId, setTipId] = useState()
    const {tips} = useContext(PublicTipContext)

    function openPopup (smallTipId) {
        toggleButtonPopup(true);
        setTipId(smallTipId)
    }

    useEffect(()=>{
    }, [])

    return (
        <>
            <PopUp trigger={buttonPopup} setTrigger={toggleButtonPopup}>
                <TipByIdContextProvider smallTipId={tipId}>
                    <CompleteTipFocus smallTipId={tipId}/>
                </TipByIdContextProvider>
            </PopUp>
            {tips.map((smallTip)=>(
            <div key={smallTip.id} className="completeSmallTipBoxPublic">
                <div key={smallTip.id} id="pictureBox" className="smallTipBoxPublic">
                    <img id="displayPic" src={smallTip.picturePath} alt={smallTip.address}/>
                </div>
                <div id="titelSmallTip" className="smallTipBoxPublic">
                    <div className="adressBoxSmallTip">
                        {smallTip.address}
                    </div>
                    <div className="buttonBoxReadMore">
                        <button id="readMoreButton"
                                onClick={(e)=>openPopup(smallTip.id)}
                        >Klik hier om meer te lezen...</button>
                    </div>
                    <div className="labelBox">
                        <PublicTipLabel/>
                    </div>
                </div>

            </div>))}
        </>
    )
}

export default PublicTip;