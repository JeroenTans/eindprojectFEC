import React, {useContext, useEffect, useState} from 'react';
import './PageAvailableTip.css'
import NavBar from "../componenten/navBar/NavBar";
import Profile from "../componenten/profile/Profile";
import axios from "axios";
import {AuthContext} from "../componenten/Context/AuthContextProvider";
import Tip from "../componenten/Tips/typeOfTips/Tip";


function PageAvailableTip () {

    const [standardTips, setStandardTips] = useState([])
    const [publicTips, setPublicTips] = useState([])
    const [privateTips, setPrivateTips] = useState([])
    const [url, setUrl] = useState();
    const {user} = useContext(AuthContext)

    async function fetchData (username) {
        try {
            const resultStandardTip = await axios.get("http://localhost:8080/api/v1/tips/standardTip")
            const resultPublicTip = await axios.get("http://localhost:8080/api/v1/tips/publicTip")
            const resultPrivateTip = await axios.get(`http://localhost:8080/api/v1/tips/${username}/privateTip`)
            setStandardTips(resultStandardTip.data)
            setPublicTips(resultPublicTip.data)
            setPrivateTips(resultPrivateTip.data)
        } catch (e) {
            console.error("het is niet gelukt, error: " + e)
        }
    }

    useEffect(()=>{
        if (user) {
            fetchData(user.username)
        }

    },[])


    return (
        <div className="pageBackground">
            <NavBar id="navBarAvailableTip" />
            <Profile className="profilePageBox"/>
            <div className="allTips">
                <div className="tipPageBoxStandard">
                    <Tip tips={standardTips} url={url}/>
                </div>
                <div className="tipPageBoxPrive">
                    <Tip tips={privateTips} url={url}/>
                </div>
                <div className="tipPageBoxPublic">
                    <Tip tips={publicTips} url={url}/>
                </div>
            </div>
        </div>

    )
}

export default PageAvailableTip;