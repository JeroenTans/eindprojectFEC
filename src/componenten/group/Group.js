import React from 'react'
import './Group.css'
import AddButton from "../button/AddButton";

function Group () {
    return (
        <>
            <div className="groupDisplay">
                <AddButton className="buttonPlus"/>
            </div>
        </>
    )
}

export default Group;