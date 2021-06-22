import React, { useState, useEffect } from 'react';
import './PublicTip.css'
import PopUp from "../../popup/PopUp";
import CompleteTipFocus from "../CompleteTipFocus";
import axios from "axios";
import PublicTipLabel from "./tipLabels.js/PublicTipLabel";


function PublicTip ( { image, adres } ) {

    const [buttonPopup, toggleButtonPopup] = useState(false);
    const [smallTips, setSmallTips] = useState([])

    function openPopup (e) {
        toggleButtonPopup(true);
        e.preventDefault()
    }

    async function fetchData () {
        try {
            const result = await axios.get('http://localhost:8080/api/v1/tips/publicTip')
            setSmallTips(result.data)
        } catch (e) {
            console.log("het is niet gelukt, error: " + e)
        }
    }

    useEffect(()=>{
        fetchData()
    }, [])

    return (
        <>
            {smallTips.map((smallTip)=>(
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
                                onClick={(e)=>openPopup(e)}
                        >Klik hier om meer te lezen...</button>
                        <PopUp trigger={buttonPopup} setTrigger={toggleButtonPopup}>
                            <CompleteTipFocus/>
                        </PopUp>
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