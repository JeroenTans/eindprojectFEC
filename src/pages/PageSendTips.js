import React from 'react'
import './PageAvailableTip.css'
import TipSmallVersion from "../componenten/Tips/TipSmallVersion";
import pictureCanal from "../images/pictureCanal.png";
import pictureCanalTwo from "../images/pictureCanalTwo.png";
import pictureCanalThree from "../images/pictureCanalThree.png";
import pictureCanalFour from "../images/pictureCanalFour.png";
import NavBar from "../componenten/navBar/NavBar";
import ReusableButton from "../componenten/button/ReusableButton";

function PageSenTips () {
    return (
        <div className="pageBackground">
        <NavBar id="navBarAvailableTip" />
            <div className="allTips">
                <div className="tipPageBoxPublic">
                    <TipSmallVersion/>
                </div>
                <div className="tipPageBoxPrive">
                    <TipSmallVersion/>
                </div>
            </div>
        <ReusableButton/>
        </div>

    )
}

export default PageSenTips;