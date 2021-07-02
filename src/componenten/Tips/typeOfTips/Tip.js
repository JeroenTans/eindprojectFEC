import React, {useContext, useEffect, useState} from "react";
import PopUp from "../../popup/PopUp";
import TipByIdContextProvider from "../../Context/TipByIdContextProvider";
import CompleteTipFocus from "../CompleteTipFocus";
import StandardTipLabel from "./tipLabels.js/StandardTipLabel";
import "./Tip.css"
import TipImage from "./TipImage";

function Tip ({tips, url}){

    const [buttonPopup, toggleButtonPopup] = useState(false);
    const [tipId, setTipId] = useState()


    function openPopup (smallTipId) {
        toggleButtonPopup(true);
        setTipId(smallTipId)
        console.log(url)
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
                <div key={smallTip.id} className="completeSmallTipBox">
                    <div key={smallTip.id} id="pictureBox" className="smallTipBox">
                        { url && <TipImage props={tips}/>}

                    </div>
                    <div id="titelSmallTip" className="smallTipBox">
                        <div className="adressBoxSmallTip">
                            {smallTip.address}
                        </div>
                        <div className="buttonBoxReadMore">
                            <button id="readMoreButton"
                                    onClick={(e)=>openPopup(smallTip.id)}
                            >Klik hier om meer te lezen...</button>
                        </div>
                        <div className="labelBox">
                            <StandardTipLabel/>
                        </div>
                    </div>

                </div>))}
        </>
    )
}

export default Tip;