import React, { createContext, useState, useEffect } from 'react';
import axios from "axios";
import profile from "../../images/pictureCanal.png";

export const TipContext = createContext({});

function TipContextProvider ({children}) {
    const [tips, setTips] = useState([])
    const [url, setUrl] = useState(profile);

    async function fetchData () {
        try {
            const result = await axios.get('http://localhost:8080/api/v1/tips/standardTip')
            const blob = new Blob([result.data.config], {
                type: 'image/jpg',
            });
            const objectUrl = URL.createObjectURL(blob);
            setUrl(objectUrl);
            setTips(result.data)
        } catch (e) {
            console.log("het is niet gelukt, error: " + e)
        }
    }

    const data = {...tips,
        picturePath: url
    }

    return (
           <TipContext.Provider value={data}>

           </TipContext.Provider>
    )
}

export default TipContextProvider;