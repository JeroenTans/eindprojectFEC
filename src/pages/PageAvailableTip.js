import React, {useEffect, useState} from 'react';
import './PageAvailableTip.css'
import NavBar from "../componenten/navBar/NavBar";
import Profile from "../componenten/profile/Profile";
import axios from "axios";
import {useAuthContext} from "../componenten/Context/AuthContextProvider";
import Tip from "../componenten/Tips/typeOfTips/Tip";

function PageAvailableTip () {

    const [standardTips, setStandardTips] = useState([])
    const [publicTips, setPublicTips] = useState([])
    const [privateTips, setPrivateTips] = useState([])
    const {user} = useAuthContext();

    async function fetchData () {
        try {

            const resultStandardTip = await axios.get("http://localhost:8080/api/v1/tips/standardTip")
            const resultPublicTip = await axios.get("http://localhost:8080/api/v1/tips/publicTip")
            const resultPrivateTip = await axios.get(`http://localhost:8080/api/v1/tips/${user.username}/privateTip`)
            setStandardTips(resultStandardTip.data)
            setPublicTips(resultPublicTip.data)
            setPrivateTips(resultPrivateTip.data)
        } catch (e) {
            console.error("het is niet gelukt, error: " + e)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])


    return (
        <div className="pageBackground">
            <NavBar id="navBarAvailableTip" />
            <Profile className="profilePageBox"/>
            <div className="allTips">
                <div className="tipPageBoxStandard">
                    <Tip tips={standardTips}/>
                </div>
                <div className="tipPageBoxPrive">
                    <Tip tips={privateTips}/>
                </div>
                <div className="tipPageBoxPublic">
                    <Tip tips={publicTips}/>
                </div>
            </div>
        </div>

    )
}

export default PageAvailableTip;