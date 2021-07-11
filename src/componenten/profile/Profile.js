import React, {Link} from "react-router-dom";
import ReusableButton from "../button/ReusableButton";
import "./Profile.css"
import {useAuthContext} from "../Context/AuthContextProvider";


function Profile () {

    const {user} = useAuthContext();
    const getUsername = user.email.substring(0, user.email.indexOf('@'))
    const username = getUsername.substring(0, 1).toUpperCase() + getUsername.substring(1, getUsername.length);

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