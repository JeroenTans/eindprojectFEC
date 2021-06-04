import React from 'react'
import './AdminLink.css'

function AdminLink () {
    return (
        <>
            <form className="linkForm">
                <div className="titelLink">
                    <p>Link hier de tips d.m.v. de adressen op te geven</p>
                </div>
                <div className="linkInput">
                    <input  type="text"
                            className="adressOne"
                            placeholder="typ hier het eerste adres in:"
                            />
                    <input  type="text"
                            className="adressOne"
                            placeholder="type hier het tweede adres in:"
                            />
                </div>
                <button className="linkButton">link de tips</button>
            </form>
        </>
    )
}

export default AdminLink;