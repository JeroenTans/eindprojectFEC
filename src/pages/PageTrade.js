import React, {useContext, useEffect, useState} from 'react';
import './PageTrade.css'
import NavBar from "../componenten/navBar/NavBar";
import TipInMaking from "../componenten/Tips/TipInMaking";
import Tip from "../componenten/Tips/typeOfTips/Tip";
import Profile from "../componenten/profile/Profile";
import {useAuthContext} from "../componenten/Context/AuthContextProvider";
import axios from "axios";


function PageTrade () {
    const [sendTips, setSendTips] = useState([])
    const {user} = useAuthContext()

    async function fetchData (username) {
        try {
            const result =  await axios.get(`http://localhost:8080/api/v1/tips/getAllTradedTips/${username}`)
            setSendTips(result.data)
        } catch (e) {
            console.log("het is niet gelukt, error: " + e)
        }
    }

    useEffect(()=>{
        const username = user.username
        fetchData(username)
    },[])

    return (

        <div className="pageBackground">
            <NavBar/>
            <Profile className="profilePageBox"/>
            <div className="box">
                <div className="whatToDo">Ontvangen tips</div>
                <div className="whatToDo">Maak uw tip</div>
            </div>
            <div className="completeBox">
                <div className="boxTrade">
                        <Tip tips={sendTips}/>
                </div>
                    <div className="makeTipBoxPage">
                        <TipInMaking/>
                    </div>
                </div>
        </div>

    )
}

export default PageTrade