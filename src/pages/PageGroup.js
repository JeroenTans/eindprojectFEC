import React from 'react'
import './PageTrade.css'
import NavBar from "../componenten/navBar/NavBar";
import PublicTip from "../componenten/Tips/typeOfTips/PublicTip";
import pictureCanal from "../images/pictureCanal.png";
import Group from "../componenten/group/Group";
import './PageGroup.css'
import ReusableButton from "../componenten/button/ReusableButton";

function PageGroup () {
    return (
        <div className="pageBackground">
            <NavBar/>
            <div className="completeBox">
                <div className="boxGroup">
                    <PublicTip/>
                </div>
                <div className="boxGroupComp">
                        <Group
                        className="makeTipPage"/>
                </div>
            </div>
            <ReusableButton/>
        </div>
    )
}

export default PageGroup;