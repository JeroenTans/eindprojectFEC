import React, {useContext, useEffect, useState} from 'react'
import './PageAvailableTip.css'
import NavBar from "../componenten/navBar/NavBar";
import Profile from "../componenten/profile/Profile";
import axios from "axios";
import {AuthContext} from "../componenten/Context/AuthContextProvider";
import Tip from "../componenten/Tips/typeOfTips/Tip";

function PageSenTips () {

    const [publicTips, setPublicTips] = useState([])
    const [privateTips, setPrivateTips] = useState([])
    const {user} = useContext(AuthContext)

    async function fetchData (username) {
        try {
            const resultPublicTip = await axios.get(`http://localhost:8080/api/v1/tips/${username}/publicTip`)
            const resultPrivateTip = await axios.get(`http://localhost:8080/api/v1/tips/${username}/privateTip`)

            setPublicTips(resultPublicTip.data)
            setPrivateTips(resultPrivateTip.data)
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
        <NavBar id="navBarAvailableTip" />
            <div className="allTips">
                <div className="tipPageBoxPublic">
                    <Tip tips={publicTips}/>
                </div>
                <div className="tipPageBoxPrive">
                    <Tip tips={privateTips}/>
                </div>
            </div>
            <Profile className="profilePageBox"/>
        </div>

    )
}

export default PageSenTips;