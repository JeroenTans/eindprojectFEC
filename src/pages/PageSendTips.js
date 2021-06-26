import React from 'react'
import './PageAvailableTip.css'
import PublicTip from "../componenten/Tips/typeOfTips/PublicTip";
import PrivateTip from "../componenten/Tips/typeOfTips/PrivateTip";
import NavBar from "../componenten/navBar/NavBar";
import Profile from "../componenten/profile/Profile";

function PageSenTips () {
    return (
        <div className="pageBackground">
        <NavBar id="navBarAvailableTip" />
            <div className="allTips">
                <div className="tipPageBoxPublic">
                    <PublicTip/>
                </div>
                <div className="tipPageBoxPrive">
                    <PrivateTip/>
                </div>
            </div>
            <Profile className="profilePageBox"/>
        </div>

    )
}

export default PageSenTips;