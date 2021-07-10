import React, { useState } from 'react';
import './ReusableButton.css';
import PopUp from "../popup/PopUp";
import ExplainText from "../explainText/ExplainText";

function ReusableButton () {

    const [buttonPopup, toggleButtonPopup] = useState(false);

    function openPopup (e) {
        toggleButtonPopup(true);
        e.preventDefault()
    }

    return (
        <>
        <button type="submit"
                className="explainButton"
                onClick={(e)=>openPopup(e)}
                >hier</button>
            <PopUp trigger={buttonPopup} setTrigger={toggleButtonPopup}>
                <ExplainText/>
            </PopUp>
        </>
    )
}

export default ReusableButton;