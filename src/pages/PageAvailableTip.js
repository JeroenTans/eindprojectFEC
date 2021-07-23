import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import './PageAvailableTip.css'
import NavBar from "../componenten/navBar/NavBar";
import Profile from "../componenten/profile/Profile";
import axios from "axios";
import {useAuthContext} from "../context/AuthContextProvider";
import Tip from "../componenten/Tips/typeOfTips/Tip";

function PageAvailableTip () {

    const [standardTips, setStandardTips] = useState([])
    const [publicTips, setPublicTips] = useState([])
    const [privateTips, setPrivateTips] = useState([])
    const {user} = useAuthContext();

    async function fetchData () {
        try {

            const resultStandardTip = await axios.get("https://locals4locals.herokuapp.com/api/v1/tips/standardTip")
            const resultPublicTip = await axios.get("https://locals4locals.herokuapp.com/api/v1/tips/publicTip")
            const resultPrivateTip = await axios.get(`https://locals4locals.herokuapp.com/api/v1/tips/${user.username}/privateTip`)
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
                    {standardTips[0] === undefined? <div className="tipBoxIsEmpty"><p className="tipIsEmpty">klik <NavLink className="stylingOfLink" to="/trade">hier</NavLink> om een tip aan te maken</p></div>:
                    <Tip tips={standardTips}/>}
                </div>
                <div className="tipPageBoxPrive">
                    {privateTips[0] === undefined? <div className="tipBoxIsEmpty"><p className="tipIsEmpty">klik <NavLink className="stylingOfLink" to="/trade">hier</NavLink> om een tip aan te maken</p></div>:
                    <Tip tips={privateTips}/>}
                </div>
                <div className="tipPageBoxPublic">
                    {publicTips[0] === undefined? <div className="tipBoxIsEmpty"><p className="tipIsEmpty">klik <NavLink className="stylingOfLink" to="/trade">hier</NavLink> om een tip aan te maken</p></div>:
                    <Tip tips={publicTips}/>}
                </div>
            </div>
        </div>

    )
}

export default PageAvailableTip;