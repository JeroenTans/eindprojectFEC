import React, { useContext ,useState, useEffect } from 'react';
import './StandardTip.css'
import PopUp from "../../popup/PopUp";
import CompleteTipFocus from '../CompleteTipFocus';
import StandardTipLabel from "./tipLabels.js/StandardTipLabel";
import {StandardTipContext} from "../../Context/StandardTipContextProvider";
import TipByIdContextProvider from "../../Context/TipByIdContextProvider";
import test from "../../../images/pictureCanalTwo.png"

function StandardTip (){

    const [buttonPopup, toggleButtonPopup] = useState(false);
    const [tipId, setTipId] = useState()
    const {tips, url} = useContext(StandardTipContext)
    console.log("Url: ", url)

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
                    { url && <img id="displayPic" src={url} className="hallo hebben we zeker weten de goede" alt={smallTip.address}/> }

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

export default StandardTip;



// async function fetchData (id) {
//     try {
//         const result = await axios.get('http://localhost:8080/api/v1/tips/standardTip')
//         const resultTwo = await axios.get(`http://localhost:8080/api/v1/tips/${id}/picturePath`, {
//             responseType: "arraybuffer",
//             headers: {
//                 'Content-Type': 'image/jpg',
//             }
//         });
//         console.log("resultTwo", resultTwo)
//         const blob = new Blob([result.data.config], {
//             type: 'image/jpg',
//         });
//         console.log(blob)
//         const objectUrl = URL.createObjectURL(blob);
//         setUrl(objectUrl);
//         console.log(blob)
//         console.log("result", result)
//         console.log("Blob: ",blob)
//         console.log("Blob type", blob.type);
//         console.log("ObjectUrl: ", objectUrl);
//         console.log("Url: ", url)
//         console.log(result)
//
//         setSmallTips(result.data)
//     } catch (e) {
//         console.log("het is niet gelukt, error: " + e)
//     }
// }

// async function fetchImage(id){
//     try {
//
//         const result = await axios.get(`http://localhost:8080/api/v1/tips/${id}/picturePath`, {
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