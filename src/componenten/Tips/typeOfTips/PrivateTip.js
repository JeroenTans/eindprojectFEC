import React, { useState, useEffect } from 'react';
import './PrivateTip.css'
import PopUp from "../../popup/PopUp";
import CompleteTipFocus from "../CompleteTipFocus";
import axios from "axios";


function PrivateTip ( { image, adres } ) {

    const [buttonPopup, toggleButtonPopup] = useState(false);
    const [smallTips, setSmallTips] = useState([])

    function openPopup (e) {
        toggleButtonPopup(true);
        e.preventDefault()
    }

    async function fetchData () {
        try {
            const result = await axios.get('http://localhost:8080/api/v1/tips/privateTip')
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
                                onClick={(e)=>openPopup(e)}
                        >Klik hier om meer te lezen...</button>
                        <PopUp trigger={buttonPopup} setTrigger={toggleButtonPopup}>
                            <CompleteTipFocus/>
                        </PopUp>
                    </div>
                </div>

            </div>))}
        </>
    )
}

export default PrivateTip;