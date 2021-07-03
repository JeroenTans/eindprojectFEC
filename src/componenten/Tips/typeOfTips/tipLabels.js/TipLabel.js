import React from 'react'
import './TipLabel.css'

function TipLabel ({kindOfTip}) {
    return (
        <label id={ kindOfTip === "Standaard" && "standardTipLabel" ||
                    kindOfTip === "Privé" && "privateTipLabel" ||
                    kindOfTip === "Publiek" && "publicTipLabel"
                    }>{kindOfTip}</label>
    )
}

export default TipLabel;