import React, { useState } from 'react';
import './ReusableButton.css';
import PopUp from "../popup/PopUp";
import CompleteTipFocus from "../Tips/CompleteTipFocus";
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
                >Uitleg</button>
            <PopUp trigger={buttonPopup} setTrigger={toggleButtonPopup}>
                <ExplainText/>
            </PopUp>
        </>
    )
}

export default ReusableButton;