import React, {useState, useEffect, useContext} from 'react';
import './CompleteTipFocus.css';
import PopUp from "../popup/PopUp";
import MakeReview from "../reviewScreen/MakeReview";
import ReviewScreen from "../reviewScreen/ReviewScreen";
import {TipByIdContext} from "../Context/TipByIdContextProvider";
import axios from "axios";

function CompleteTipFocus ({smallTipId}) {

    const [buttonPopup, toggleButtonPopup] = useState(false);
    const [buttonPopupRead, toggleButtonPopupRead] = useState(false);
    // const [tip, setTip] = useState([]);
    const [url, setUrl] = useState();
    const {tip} = useContext(TipByIdContext)
    const tipId = smallTipId;


    function openPopup (e) {
        toggleButtonPopup(true);
        // e.preventDefault()
    }

    function openPopupRead (e) {
        toggleButtonPopupRead(true);
        // e.preventDefault()
    }

    useEffect(()=>{
    },[])

    return (
        <>
            <PopUp trigger={buttonPopupRead} setTrigger={toggleButtonPopupRead}>
                <ReviewScreen tipId={tipId}/>
            </PopUp>
            <div className="tipBox">
                <div className="tipBoxTwo" id="pictureDisplay">
                    <img id="pictureDisplay" src={url} alt="foto"/>
                </div>
                <div key={tip.id}  id="adressDisplay"  className="tipBoxTwo" ><p>{tip.address}</p></div>
                <div id="textDisplayTip"  className="tipBoxTwo" ><p>{tip.explanation}</p></div>
                <button
                    className="tipBoxTwoBut"
                    id="buttonOne"
                    onClick={(e)=>openPopupRead(e)}
                    >Lees review</button>
                <button
                    className="tipBoxTwoBut"
                    id="buttonTwo"
                    onClick={(e)=>openPopup(e)}
                    >Schrijf review</button>
                <PopUp trigger={buttonPopup} setTrigger={toggleButtonPopup}>
                    <MakeReview smallTipId={tipId}/>
                </PopUp>
            </div>
            {/*))}*/}
                </>
    )
}

export default CompleteTipFocus;

//
// async function fetchData(tipId){
//     try {
//         const result = await axios.get(`http://localhost:8080/api/v1/tips/tip/${tipId}`)
//         setTip(result.data)
//     } catch (e) {
//         console.log(e);
//     }
// }
//
// async function fetchImage(tipId){
//     try {
//
//         const result = await axios.get(`http://localhost:8080/api/v1/tips/${tipId}/picturePath`, {
//             responseType: "arraybuffer",
//             headers: {
//                 'Content-Type': 'image/jpg',
//             }
//         });
//         const blob = new Blob([result.data.config], {
//             type: 'image/jpg',
//         });
//         const objectUrl = URL.createObjectURL(blob);
//         setUrl(objectUrl);
//         console.log("result", result)
//         console.log("Blob: ",blob)
//         console.log("Blob type", blob.type);
//         console.log("ObjectUrl: ", objectUrl);
//         console.log("Url: ", url)
//     } catch (e) {
//         console.error(e);
//     }
// }

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

//
// async function fetchData(tipId){
//     try {
//         const result = await axios.get(`http://localhost:8080/api/v1/tips/tip/${tipId}`)
//         setTip(result.data)
//     } catch (e) {
//         console.log(e);
//     }
// }
//
// async function fetchImage(tipId){
//     try {
//
//         const result = await axios.get(`http://localhost:8080/api/v1/tips/${tipId}/picturePath`, {
//             responseType: "arraybuffer",
//             headers: {
//                 'Content-Type': 'image/jpg',
//             }
//         });
//         const blob = new Blob([result.data.config], {
//             type: 'image/jpg',
//         });
//         const objectUrl = URL.createObjectURL(blob);
//         setUrl(objectUrl);
//         console.log("result", result)
//         console.log("Blob: ",blob)
//         console.log("Blob type", blob.type);
//         console.log("ObjectUrl: ", objectUrl);
//         console.log("Url: ", url)
//     } catch (e) {
//         console.error(e);
//     }
// }