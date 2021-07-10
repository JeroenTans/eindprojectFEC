import React from 'react'
import './PageAdminStandartTip.css'
import NavBarAdmin from "../componenten/navBar/NavBarAdmin";
import TipInMaking from "../componenten/Tips/TipInMaking";

function PageAdminStandartTip () {
    return(
        <div className="pageBackground">
            <NavBarAdmin/>
            <div className="boxAdminStandartTip">
                <TipInMaking id="formTip"/>
            </div>
        </div>
    )
}

export default PageAdminStandartTip;

