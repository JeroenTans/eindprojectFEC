import React from 'react'
import './PageAdminLink.css'
import NavBarAdmin from "../componenten/navBar/NavBarAdmin";
import Group from "../componenten/group/Group";
import AdminLink from "../componenten/adminLink/AdminLink";

function PageAdminLink () {
    return (
        <div className="pageBackground">
            <NavBarAdmin/>
            <div className="linkBox">
                <div>
                    <Group/>
                </div>
                <div className="linkSystem">
                    <AdminLink/>
                </div>
                <div>
                    <Group/>
                </div>
            </div>
        </div>
    )
}

export default PageAdminLink;