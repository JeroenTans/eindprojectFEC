import React from 'react';
import './pageInlog.css'
import globe from '../images/globeLogin.png'
import LogIn from "../componenten/logIn/LogIn";

function PageInlog () {
    return (
            <div className="pageBackgroundColor">
                <div>
                    <img src={globe} alt="globeTwo" />
                </div>
                <div className="loginPageOne">
                    <LogIn/>
                </div>
            </div>
    )
}

export default PageInlog;