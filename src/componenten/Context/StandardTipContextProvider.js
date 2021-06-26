import React, { createContext, useState, useEffect } from 'react';
import axios from "axios";
import profile from "../../images/pictureCanal.png";

export const StandardTipContext = createContext({});

function StandardTipContextProvider ({children}) {
    const [tips, setTips] = useState([])
    const [url, setUrl] = useState(profile);

    async function fetchData () {
        try {
            const result = await axios.get("http://localhost:8080/api/v1/tips/standardTip")
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
        <StandardTipContext.Provider value={data}>
            {children}
        </StandardTipContext.Provider>
    )
}

export default StandardTipContextProvider;