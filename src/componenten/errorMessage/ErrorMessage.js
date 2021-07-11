import React from 'react'
import './ErrorMessage.css'

function ErrorMessage ({message}) {

    return (
        <p className="errorMessageComp">{message}</p>
    )
}

export default ErrorMessage