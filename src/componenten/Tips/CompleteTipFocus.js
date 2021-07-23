import React, {useState, useEffect} from 'react';
import './CompleteTipFocus.css';
import PopUp from "../popup/PopUp";
import MakeReview from "../reviewScreen/MakeReview";
import ReviewScreen from "../reviewScreen/ReviewScreen";
import axios from "axios";
import TipImage from "./typeOfTips/TipImage";

function CompleteTipFocus ({smallTipId}) {

    const [buttonPopup, toggleButtonPopup] = useState(false);
    const [buttonPopupRead, toggleButtonPopupRead] = useState(false);
    const [tip, setTip] = useState([]);
    const [address, setAddress] = useState();

    const tipId = smallTipId;

    async function fetchData(tipId){
        try {
            const result = await axios.get(`https://locals4locals.herokuapp.com/api/v1/tips/tip/${tipId}`)
            setTip(result.data)
        } catch (e) {
            console.error(e);
        }
    }

    function openPopup () {
        toggleButtonPopup(true);
    }

    function openPopupRead (address) {
        toggleButtonPopupRead(true);
        setAddress(address)
    }

    useEffect(()=>{
        fetchData(tipId)
    },[])

    return (
        <>
            <PopUp trigger={buttonPopupRead} setTrigger={toggleButtonPopupRead}>
                <ReviewScreen tipId={tipId} addressTip={address}/>
            </PopUp>
            <div className="tipBox">
                <div className="tipBoxTwo" id="pictureDisplay">
                    <TipImage props={tip.id}/>
                </div>
                <div key={tip.id}  id="adressDisplay"  className="tipBoxTwo" ><p>{tip.address}</p></div>
                <div id="textDisplayTip"  className="tipBoxTwo" ><p>{tip.explanation}</p></div>
                <button
                    className="tipBoxTwoBut"
                    id="buttonOne"
                    onClick={(e)=>openPopupRead(tip.address)}
                    >Lees review</button>
                <button
                    className="tipBoxTwoBut"
                    id="buttonTwo"
                    onClick={(e)=>openPopup()}
                    >Schrijf review</button>
                <PopUp trigger={buttonPopup} setTrigger={toggleButtonPopup}>
                    <MakeReview smallTipId={tipId}/>
                </PopUp>
            </div>
                </>
    )
}

export default CompleteTipFocus;
