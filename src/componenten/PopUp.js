import React from 'react'

function PopUp (props) {
    return (props.trigger)?(
        <div className="popUp">
            <div className="popup-inner">
                <button className="closeButton">❌</button>
                {props.children}
            </div>
        </div>
    ) : ""
}

export default PopUp