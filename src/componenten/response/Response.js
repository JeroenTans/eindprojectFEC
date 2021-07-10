import React from 'react';
import './Response.css';

function Response ({message}) {
    return (
        <div className="boxResponse">
            <div className="boxResponseTwo">
                <p id="messageBoxPar">{message}</p>
            </div>
        </div>
    )
}

export default Response;