import React from 'react'
import './PageTrade.css'
import NavBar from "../componenten/navBar/NavBar";
import Group from "../componenten/group/Group";
import './PageGroup.css'
import Profile from "../componenten/profile/Profile";

function PageGroup () {
    return (
        <div className="pageBackground">
            <NavBar/>
            <div className="completeBox">
                <div className="boxGroup">
                    {/*<PublicTip/>*/}
                </div>
                <div className="boxGroupComp">
                        <Group
                        className="makeTipPage"/>
                </div>
            </div>
            <Profile className="profilePageBox"/>
        </div>
    )
}

export default PageGroup;