import React, { createContext, useState, useEffect } from 'react';
import axios from "axios";
import profile from "../../images/pictureCanalTwo.png";


export const PrivateTipContext = createContext({});

function PrivateTipContextProvider ({children}) {
    const [tips, setTips] = useState([])
    const [url, setUrl] = useState(profile);

    async function fetchData () {
        try {
            const result = await axios.get("http://localhost:8080/api/v1/tips/privateTip")
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

    const data = {
        tips:tips,
        picturePath: url
    }

    useEffect(()=>{
        fetchData()
    },[])

    return (
        <PrivateTipContext.Provider value={data}>
            {children}
        </PrivateTipContext.Provider>
    )
}

export default PrivateTipContextProvider;