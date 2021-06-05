import React from 'react'
import './PageAdminLink.css'
import NavBarAdmin from "../componenten/navBar/NavBarAdmin";
import LinkAdresDisplay from "../componenten/linkAdresDisplay/LinkAdresDisplay";
import AdminLink from "../componenten/adminLink/AdminLink";

function PageAdminLink () {
    return (
        <div className="pageBackground">
            <NavBarAdmin/>
            <div className="linkBox">
                <div>
                    <LinkAdresDisplay/>
                </div>
                <div className="linkSystem">
                    <AdminLink/>
                </div>
                <div>
                    <LinkAdresDisplay/>
                </div>
            </div>
        </div>
    )
}

export default PageAdminLink;