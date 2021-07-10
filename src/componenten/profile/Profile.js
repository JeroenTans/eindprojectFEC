import React, {Link} from "react-router-dom";
import ReusableButton from "../button/ReusableButton";
import "./Profile.css"
import {useAuthContext} from "../Context/AuthContextProvider";


function Profile () {

    const {user} = useAuthContext();

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