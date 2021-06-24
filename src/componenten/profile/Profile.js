import React,{Link} from "react-router-dom";
import {useContext} from "react";
import ReusableButton from "../button/ReusableButton";
import {AuthContext} from "../Context/AuthContextProvider";
import "./Profile.css"


function Profile () {
    // const {user} = useContext(AuthContext);

    const {user} = useContext(AuthContext);

    return (
        <>
        {user &&
        <div className="userInfo">
            <p>Hallo {user.email}, klik<ReusableButton/>voor uitleg en <Link id="linkTrade" to="/trade">hier</Link> om een tip toe te voegen.</p>
        </div>}
        </>
    )
}

export default Profile;