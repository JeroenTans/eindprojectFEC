import React, {useState, useEffect} from 'react'
import './PageTrade.css'
import NavBar from "../componenten/navBar/NavBar";
import Group from "../componenten/group/Group";
import './PageGroup.css'
import Profile from "../componenten/profile/Profile";
import GroupTipInMakin from "../componenten/Tips/GroupTipInMakin";
import {useAuthContext} from "../context/AuthContextProvider";
import axios from "axios";
import Tip from "../componenten/Tips/typeOfTips/Tip";

function PageGroup () {

    const [groupTips, setGroupTips] = useState([]);
    const {userGroupNameContextState} = useAuthContext()

    async function fetchData () {
        try {
            const result = await axios.get(`http://localhost:8080/api/v1/tips/groupTips/${userGroupNameContextState}`)
            setGroupTips(result.data)
        } catch (e) {
            console.error("helaas: ", e)
        }
    }

    useEffect(()=>{
        fetchData()
    },[groupTips])

    return (
        <div className="pageBackground">
            <NavBar/>
            <div className="completeBox">
                <div className="boxGroup">
                    {groupTips[0] === undefined ? <div className="tipBoxIsEmpty"><p className="tipIsEmpty">Hier komen alle groep tips te staan</p></div>:
                    <Tip tips={groupTips}/>}
                </div>
                <div className="boxGroupComp">
                        <Group
                        className="makeTipPage"/>
                        <GroupTipInMakin/>
                </div>
            </div>
            <Profile className="profilePageBox"/>
        </div>
    )
}

export default PageGroup;