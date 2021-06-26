import React, { useContext ,useState, useEffect } from 'react';
import './PrivateTip.css'
import PopUp from "../../popup/PopUp";
import CompleteTipFocus from "../CompleteTipFocus";
import PrivateTipLabel from "./tipLabels.js/PrivateTipLabel";
import {PrivateTipContext} from "../../Context/PrivateTipContextProvider";
import TipByIdContextProvider from "../../Context/TipByIdContextProvider";

function PrivateTip () {

    const [buttonPopup, toggleButtonPopup] = useState(false);
    const [tipId, setTipId] = useState()
    const {tips} = useContext(PrivateTipContext)

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
            <div key={smallTip.id} className="completeSmallTipBoxPrivate">
                <div key={smallTip.id} id="pictureBox" className="smallTipBoxPrivate">
                    <img id="displayPic" src={smallTip.picturePath} alt={smallTip.address}/>
                </div>
                <div id="titelSmallTip" className="smallTipBoxPrivate">
                    <div className="adressBoxSmallTip">
                        {smallTip.address}
                    </div>
                    <div className="buttonBoxReadMore">
                        <button id="readMoreButton"
                                onClick={(e)=>openPopup(smallTip.id)}
                        >Klik hier om meer te lezen...</button>
                    </div>
                    <div className="labelBox">
                        <PrivateTipLabel/>
                    </div>
                </div>

            </div>))}
        </>
    )
}

export default PrivateTip;