import React from 'react';
import './pageInlog.css'
import globe from '../images/globeLogin.png'
import LogInComp from "../componenten/logIn/LogIn";

function PageInlog () {
    return (
            <div className="pageBackgroundColor">
                <div>
                    <img src={globe} alt="globeTwo" />
                </div>
                <div className="loginPageOne">
                    <LogInComp/>
                </div>
            </div>
    )
}

export default PageInlog;