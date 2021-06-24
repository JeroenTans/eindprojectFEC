import React, { createContext ,useState, useEffect } from 'react';
import './StandardTip.css'
import PopUp from "../../popup/PopUp";
import CompleteTipFocus from '../CompleteTipFocus';
import axios from "axios";
import StandardTipLabel from "./tipLabels.js/StandardTipLabel";
import profile from "../../../images/pictureCanal.png";

export const standardTipContext = createContext({})

function StandardTip (){

    const [buttonPopup, toggleButtonPopup] = useState(false);
    const [smallTips, setSmallTips] = useState([])
    const [url, setUrl] = useState(profile);

    function openPopup (e) {
        toggleButtonPopup(true);
        e.preventDefault()
    }

    async function fetchData (id) {
        try {
            const result = await axios.get('http://localhost:8080/api/v1/tips/standardTip')
            const resultTwo = await axios.get(`http://localhost:8080/api/v1/tips/${id}/picturePath`, {
                responseType: "arraybuffer",
                headers: {
                    'Content-Type': 'image/jpg',
                }
            });
            console.log("resultTwo", resultTwo)
            const blob = new Blob([result.data.config], {
                type: 'image/jpg',
            });
            console.log(blob)
            const objectUrl = URL.createObjectURL(blob);
            setUrl(objectUrl);
            console.log(blob)
            console.log("result", result)
            console.log("Blob: ",blob)
            console.log("Blob type", blob.type);
            console.log("ObjectUrl: ", objectUrl);
            console.log("Url: ", url)
            console.log(result)

            setSmallTips(result.data)
        } catch (e) {
            console.log("het is niet gelukt, error: " + e)
        }
    }

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

    useEffect(()=>{
        fetchData(25)
        // fetchImage(25)
    }, [])

    const data = {...smallTips
    }
    console.log(data)

    return (
        <>
            {smallTips.map((smallTip)=>(
            <div key={smallTip.id} className="completeSmallTipBox">
                <div key={smallTip.id} id="pictureBox" className="smallTipBox">
                    <img id="displayPic" src={url} alt={smallTip.address}/>
                </div>
                <div id="titelSmallTip" className="smallTipBox">
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
                        <StandardTipLabel/>
                    </div>
                </div>

            </div>))}
        </>
    )
}

export default StandardTip;