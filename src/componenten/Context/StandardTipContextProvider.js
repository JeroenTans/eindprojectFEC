import React, { createContext, useState, useEffect } from 'react';
import axios from "axios";
import profile from "../../images/pictureCanal.png";
import {get} from "react-hook-form";

export const StandardTipContext = createContext({});

function StandardTipContextProvider ({children}) {
    const [tips, setTips] = useState([])
    const [url, setUrl] = useState();

    async function fetchData () {
        try {
            const result = await axios.get("http://localhost:8080/api/v1/tips/standardTip")
            // const idImage = result.data[0].id
            // const resultTwo = await axios.get(`http://localhost:8080/api/v1/tips/26/picturePath`)
            // const image = resultTwo.data
            // console.log("image req: ", image.data)
            // console.log("result data", result.data)
            // console.log("image: ",image)
            // const blob = new Blob([image], {
            //     type: 'image/jpg',
            // });
            // console.log("result: ", result)
            // console.log("blob: ", blob)
            // // const objectUrl = URL.createObjectURL(blob);
            // // setUrl(objectUrl);
            // const imageOne = URL.createObjectURL(blob)
            // setUrl(imageOne)
            // console.log("objectUrl: ", imageOne)
            // console.log("tips: ", tips)
            // console.log("url: ", url)
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
    console.log(data)

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