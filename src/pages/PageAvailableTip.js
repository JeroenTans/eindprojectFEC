import React from 'react';
import './PageAvailableTip.css'
import StandardTip from "../componenten/Tips/typeOfTips/StandardTip";
import PrivateTip from "../componenten/Tips/typeOfTips/PrivateTip";
import PublicTip from "../componenten/Tips/typeOfTips/PublicTip";
import NavBar from "../componenten/navBar/NavBar";
import ReusableButton from "../componenten/button/ReusableButton";

function PageAvailableTip () {
    return (
        <div className="pageBackground">
            <NavBar id="navBarAvailableTip" />
            <div className="allTips">
                <div className="tipPageBoxStandard">
                    <StandardTip/>
                </div>
                <div className="tipPageBoxPrive">
                    <PrivateTip/>
                </div>
                <div className="tipPageBoxPublic">
                    <PublicTip/>
                </div>
            </div>
                <ReusableButton/>
        </div>

    )
}

export default PageAvailableTip;