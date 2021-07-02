import React from 'react'
import './PageAdminStandartTip.css'
import NavBarAdmin from "../componenten/navBar/NavBarAdmin";
import TipInMaking from "../componenten/Tips/TipInMaking";
import TipDisplayAdmin from "../componenten/Tips/TipDisplayAdmin";

function PageAdminStandartTip () {
    return(
        <div className="pageBackground">
            <NavBarAdmin/>
            <div className="boxAdminStandartTip">
                <TipDisplayAdmin id="formTip"/>
            </div>
        </div>
    )
}

export default PageAdminStandartTip;

