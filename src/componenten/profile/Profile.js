import React,{Link} from "react-router-dom";
import {useContext, useState, useEffect} from "react";
import ReusableButton from "../button/ReusableButton";
// import {AuthContext} from "../Context/AuthContextProvider";
import "./Profile.css"
import axios from "axios";
import {AuthContext} from "../Context/AuthContextProvider";


function Profile () {
    const [privateContent, setPrivateContent] = useState({});
    const {user} = useContext(AuthContext)
    // const {user} = useContext(AuthContext);

    useEffect(()=>{
        const token = localStorage.getItem('token');

        async function getPrivateContent () {
            try {
                const result = await axios.get('http://localhost:8080/api/v1/authenticated',  {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                });
                setPrivateContent(result.data)
            } catch (e) {
                console.log("Helaas het is niet gelukt ", e)
            }
        }

    }, [])

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