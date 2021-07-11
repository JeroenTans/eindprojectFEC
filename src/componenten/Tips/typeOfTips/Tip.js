import React, {useEffect, useState} from "react";
import PopUp from "../../popup/PopUp";
import CompleteTipFocus from "../CompleteTipFocus";
import TipLabel from "./tipLabels.js/TipLabel";
import "./Tip.css"
import TipImage from "./TipImage";

function Tip ({tips}){

    const [buttonPopup, toggleButtonPopup] = useState(false);
    const [tipId, setTipId] = useState()

    function openPopup (smallTipId) {
        toggleButtonPopup(true);
        setTipId(smallTipId)
    }

    useEffect(()=>{
    }, [])


    return (
        <>
            <PopUp trigger={buttonPopup} setTrigger={toggleButtonPopup}>
                    <CompleteTipFocus smallTipId={tipId}/>
            </PopUp>
            {tips.map((smallTip)=>(
                <div key={smallTip.id} className="completeSmallTipBox">
                    <div key={smallTip.id} id="pictureBox" className="smallTipBox">
                        <TipImage props={smallTip.id}/>
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
                            {smallTip.privateTip && <TipLabel kindOfTip={"Privé"}/>}
                            {smallTip.publicTip && <TipLabel kindOfTip={"Publiek"}/>}
                            {smallTip.standardTip && <TipLabel kindOfTip={"Standaard"}/>}
                            {smallTip.groupTip && <TipLabel kindOfTip={"Groep"}/>}
                        </div>
                    </div>

                </div>))}
        </>
    )
}

export default Tip;