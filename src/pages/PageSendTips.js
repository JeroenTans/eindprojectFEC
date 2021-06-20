import React from 'react'
import './PageAvailableTip.css'
import PublicTip from "../componenten/Tips/typeOfTips/PublicTip";
import PrivateTip from "../componenten/Tips/typeOfTips/PrivateTip";
import NavBar from "../componenten/navBar/NavBar";
import ReusableButton from "../componenten/button/ReusableButton";

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
        <ReusableButton/>
        </div>

    )
}

export default PageSenTips;