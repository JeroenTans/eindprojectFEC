import {Link} from "react-router-dom";
import React, {useEffect, useState} from 'react'
import ReusableButton from "../button/ReusableButton";
import "./Profile.css"
import {useAuthContext} from "../../context/AuthContextProvider";
import {uppercaseFirstLetter} from "../../helpers/upperCase";

function Profile () {

    const {user} = useAuthContext();
    const getUsername = user.email.substring(0, user.email.indexOf('@'))
    const username = uppercaseFirstLetter(getUsername.substring(0, 1).toUpperCase(), getUsername.substring(1, getUsername.length))

    useEffect(()=>{

    },[])

    return (
        <>
        {user &&
        <div className="userInfo">
            <p>Hallo {username}, klik<ReusableButton/>voor uitleg en <Link id="linkTrade" to="/trade">hier</Link> om een tip toe te voegen.</p>
        </div>}
        </>
    )
}

export default Profile;