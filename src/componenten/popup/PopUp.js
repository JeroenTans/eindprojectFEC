import React from 'react'
import './PopUp.css'

function PopUp (props) {
    return (props.trigger)?(
        <div className="popup">
            <div className="popup-inner">
                <button className="closeButton" onClick={()=>props.setTrigger(false)}>close</button>
                {props.children}
            </div>
        </div>
    ) : ""
}

export default PopUp