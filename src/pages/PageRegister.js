import React from 'react';
import './PageRegister.css'
import Register from "../componenten/logIn/Register";
import globe from "../images/globeLogin.png";

function PageRegister () {
    return (
        <>
            <div className="completeLoginPage">
                <div className="imageOne">
                    <img className="globeOne" src={globe} alt="globeTwo" />
                </div>
                <div className="registerPageTwo">
                    <Register/>
                </div>
            </div>
        </>
    )
}

export default PageRegister;