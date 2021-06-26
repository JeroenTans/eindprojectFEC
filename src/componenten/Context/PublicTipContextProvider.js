import React, { createContext, useState, useEffect } from 'react';
import axios from "axios";
import profile from "../../images/pictureCanalThree.png";


export const PublicTipContext = createContext({});

function PublicTipContextProvider ({children}) {
    const [tips, setTips] = useState([])
    const [url, setUrl] = useState(profile);

    async function fetchData () {
        try {
            const result = await axios.get("http://localhost:8080/api/v1/tips/publicTip")
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

    console.log()

    const data = {
        tips:tips,
        picturePath: url
    }

    useEffect(()=>{
        fetchData()
    },[])

    return (
        <PublicTipContext.Provider value={data}>
            {children}
        </PublicTipContext.Provider>
    )
}

export default PublicTipContextProvider;