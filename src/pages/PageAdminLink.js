import React from 'react'
import './PageAdminLink.css'
import NavBarAdmin from "../componenten/navBar/NavBarAdmin";
import LinkAddressDisplayPriveTip from "../componenten/linkAdresDisplay/LinkAddressDisplayPriveTip";
import LinkAddressDisplayPublicTip from "../componenten/linkAdresDisplay/LinkAdressDisplayPublicTip";
import AdminLink from "../componenten/adminLink/AdminLink";

function PageAdminLink () {
    return (
        <div className="pageBackground">
            <NavBarAdmin/>
            <div className="linkBox">
                <div>
                    <LinkAddressDisplayPriveTip/>
                </div>
                <div className="linkSystem">
                    <AdminLink/>
                </div>
                <div>
                    <LinkAddressDisplayPublicTip/>
                </div>
            </div>
        </div>
    )
}

export default PageAdminLink;