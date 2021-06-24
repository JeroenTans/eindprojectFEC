import React, { useState, useEffect } from 'react';
import './CompleteTipFocus.css';
import PopUp from "../popup/PopUp";
import MakeReview from "../reviewScreen/MakeReview";
import ReviewScreen from "../reviewScreen/ReviewScreen";
import axios from "axios";
import {decodeBase64} from "../../helpers/encodeBase64";
import porfile from "../../images/pictureCanal.png"

function CompleteTipFocus () {

    const [buttonPopup, toggleButtonPopup] = useState(false);
    const [buttonPopupRead, toggleButtonPopupRead] = useState(false);
    const [tips, setTips] = useState([]);
    const [url, setUrl] = useState(porfile);

    function openPopup (e) {
        toggleButtonPopup(true);
        e.preventDefault()
    }

    function openPopupRead (e) {
        toggleButtonPopupRead(true);
        e.preventDefault()
    }

    async function fetchData(id){
        try {
            const result = await axios.get(`http://localhost:8080/api/v1/tips/tip/${id}`)
            setTips(result.data)
            console.log(result.data)
        } catch (e) {
            console.log(e);
        }
    }

    async function fetchImage(id){
        try {

            const result = await axios.get(`http://localhost:8080/api/v1/tips/${id}/picturePath`, {
                responseType: "arraybuffer",
                headers: {
                    'Content-Type': 'image/jpg',
                }
            });
            const blob = new Blob([result.data.config], {
                type: 'image/jpg',
            });
            const objectUrl = URL.createObjectURL(blob);
            setUrl(objectUrl);
            console.log("result", result)
            console.log("Blob: ",blob)
            console.log("Blob type", blob.type);
            console.log("ObjectUrl: ", objectUrl);
            console.log("Url: ", url)
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(()=>{
        fetchImage(15);
        fetchData(15);
    },[])

    return (
        <>
            {/*{tips.map((tip)=>(*/}
            <div className="tipBox">
                <div className="tipBoxTwo" id="pictureDisplay">
                    <img id="pictureDisplay" src={url} alt="foto"/>
                </div>
                <div key={tips.id}  id="adressDisplay"  className="tipBoxTwo" ><p>{tips.address}</p></div>
                <div id="textDisplayTip"  className="tipBoxTwo" ><p>{tips.explanation}</p></div>
                <button
                    className="tipBoxTwoBut"
                    id="buttonOne"
                    onClick={(e)=>openPopupRead(e)}
                    >Lees review</button>
                <PopUp trigger={buttonPopupRead} setTrigger={toggleButtonPopupRead}>
                    <ReviewScreen/>
                </PopUp>
                <button
                    className="tipBoxTwoBut"
                    id="buttonTwo"
                    onClick={(e)=>openPopup(e)}
                    >Schrijf review</button>
                <PopUp trigger={buttonPopup} setTrigger={toggleButtonPopup}>
                    <MakeReview/>
                </PopUp>
            </div>
            {/*))}*/}
                </>
    )
}

export default CompleteTipFocus;


// decodeBase64(result.data[0].picturePath)

// const imageString = result[0].picturePath;

// console.log(imageString)

// console.log(result.data[0])

//
// decodeBase64(result.data.picturePath);
//
//
// console.log(result.data)
// console.log(result.data.picturePath)

// const dataObjectCompleteTip = {
//     address: result.data.address,
//     picturePath: decodeBase64(result),
//     explanation: result.data.explanation
// }