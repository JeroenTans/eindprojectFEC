import React from 'react';
import './PageTrade.css'
import NavBar from "../componenten/navBar/NavBar";
import TipInMaking from "../componenten/Tips/TipInMaking";
import PublicTip from "../componenten/Tips/typeOfTips/PublicTip";
import ReusableButton from "../componenten/button/ReusableButton";
import Profile from "../componenten/profile/Profile";


function PageTrade () {
    return (

        <div className="pageBackground">
            <NavBar/>
            <div className="box">
                <div className="whatToDo">Opgeslagen Tips</div>
                <div className="whatToDo">Maak uw tip</div>
            </div>
            <div className="completeBox">
                <div className="boxTrade">
                        <PublicTip/>
                </div>
                    <div className="makeTipBoxPage">
                        <TipInMaking/>
                    </div>
                </div>
            <Profile className="profilePageBox"/>
        </div>

    )
}

export default PageTrade