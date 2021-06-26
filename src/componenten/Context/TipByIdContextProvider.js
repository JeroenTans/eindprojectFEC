import React, { createContext, useState, useEffect } from 'react';
import axios from "axios";
import profile from "../../images/pictureCanal.png";

export const TipByIdContext = createContext({});

function TipByIdContextProvider ({children, smallTipId}) {
    const [tip, setTip] = useState([])
    const [url, setUrl] = useState(profile);
    const tipId = smallTipId;


        async function fetchData(tipId){
            try {
                const result = await axios.get(`http://localhost:8080/api/v1/tips/tip/${tipId}`)
                setTip(result.data)
            } catch (e) {
                console.log(e);
            }
        }

        async function fetchImage(tipId){
            try {

                const result = await axios.get(`http://localhost:8080/api/v1/tips/${tipId}/picturePath`, {
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
                // console.log("result", result)
                // console.log("Blob: ",blob)
                // console.log("Blob type", blob.type);
                // console.log("ObjectUrl: ", objectUrl);
                // console.log("Url: ", url)
            } catch (e) {
                console.error(e);
            }
        }

        useEffect(()=>{
            fetchImage(tipId);
            fetchData(tipId);
        },[])

    const data = {
            tip: tip,
            picturePath:url
    }

    return (
        <TipByIdContext.Provider value={data}>
            {children}
        </TipByIdContext.Provider>
    )
}

export default TipByIdContextProvider;