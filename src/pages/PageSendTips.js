import React, {useContext, useEffect, useState} from 'react'
import './PageAvailableTip.css'
import NavBar from "../componenten/navBar/NavBar";
import Profile from "../componenten/profile/Profile";
import axios from "axios";
import {AuthContext} from "../context/AuthContextProvider";
import Tip from "../componenten/Tips/typeOfTips/Tip";

function PageSenTips () {

    const [publicTips, setPublicTips] = useState([])
    const [privateTips, setPrivateTips] = useState([])
    const {user} = useContext(AuthContext)

    async function fetchData (username) {
        try {
            const resultPublicTip = await axios.get(`https://locals4locals.herokuapp.com/api/v1/tips/${username}/publicTip`)
            const resultPrivateTip = await axios.get(`https://locals4locals.herokuapp.com/api/v1/tips/${username}/privateTip`)
            setPublicTips(resultPublicTip.data)
            setPrivateTips(resultPrivateTip.data)
        } catch (e) {
            console.error("het is niet gelukt, error: " + e)
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
                    {publicTips[0] === undefined ? <div className="tipBoxIsEmpty"><p className="tipIsEmpty">Hier komen jouw verstuurde publieke tips te staan</p></div>:
                    <Tip tips={publicTips}/>}
                </div>
                <div className="tipPageBoxPrive">
                    {privateTips[0] === undefined ? <div className="tipBoxIsEmpty"><p className="tipIsEmpty">Hier komen jouw verstuurde privé tips te staan</p></div>:
                    <Tip tips={privateTips}/>}
                </div>
            </div>
            <Profile className="profilePageBox"/>
        </div>

    )
}

export default PageSenTips;