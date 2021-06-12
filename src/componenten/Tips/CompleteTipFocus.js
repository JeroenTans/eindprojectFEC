import React, { useState, useEffect } from 'react';
import './CompleteTipFocus.css';
import PopUp from "../popup/PopUp";
import MakeReview from "../reviewScreen/MakeReview";
import axios from "axios";


function CompleteTipFocus ( { uploadImage, uploadAlt, adres, whatIsTheTipAbout } ) {

    const [buttonPopup, toggleButtonPopup] = useState(false);
    const [tips, setTips] = useState([]);

    function openPopup (e) {
        toggleButtonPopup(true);
        e.preventDefault()
    }

    async function fetchData () {
        try {
            const result = await axios.get('http://localhost:8080/api/v1/tips/get_tips');
            console.log(result)
            setTips(result.data);
            console.log(tips)
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

    return (
            <div className="tipBox">
                {tips.map((tip)=>(
                <div key={tip.id} className="tipBoxTwo" id="pictureDisplay">
                    <img id="pictureDisplay" src={tip.picturePath} alt={tip.address}/>
                </div>))}
                {tips.map((tip)=>(
                <div key={tip.id} id="adressDisplay"  className="tipBoxTwo" >{tip.address}</div>))}
                {tips.map((tip)=>(
                <div key={tip.id} id="textDisplayTip"  className="tipBoxTwo" >{tip.explanation}</div>))}

                <button
                    className="tipBoxTwoBut"
                    id="buttonOne">Lees review</button>
                <button
                    className="tipBoxTwoBut"
                    id="buttonTwo"
                    onClick={(e)=>openPopup(e)}
                    >Schrijf review</button>
                <PopUp trigger={buttonPopup} setTrigger={toggleButtonPopup}>
                    <MakeReview/>
                </PopUp>
            </div>

    )
}

export default CompleteTipFocus;