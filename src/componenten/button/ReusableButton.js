import React from 'react';
import './ReusableButton.css';

function ReusableButton ( { buttonTitle } ) {
    return (
        <button type="submit" className="explainButton">{buttonTitle}</button>
    )
}

export default ReusableButton;