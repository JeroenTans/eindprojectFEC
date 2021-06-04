import React from 'react';
import './PageRegister.css'
import Register from "../componenten/logIn/Register";
import globe from "../images/globeLogin.png";

function PageRegister () {
    return (
            <div className="pageBackgroundColor">
                <div>
                    <img src={globe} alt="globeTwo" />
                </div>
                <div>
                    <Register/>
                </div>
            </div>
    )
}

export default PageRegister;