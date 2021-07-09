import React, {useContext, useState} from 'react';
import './NavBar.css';
import { NavLink} from 'react-router-dom';
import {AuthContext} from "../Context/AuthContextProvider";


function NavBar (){

    const {logout} = useContext(AuthContext);

    return (
            <div className="mainContainer">
                <ul className="navContainer">
                    <nav className="navBar">
                            <NavLink to="/available_tips" className="pages" >Overzicht</NavLink>
                            <NavLink to="/trade" className="pages" >Ruil</NavLink>
                            <NavLink to="/verstuurde_tips" className="pages" >Verstuurd</NavLink>
                            <NavLink to="/groep" className="pages" >Groep</NavLink>
                    </nav>
                </ul>
                <li className="logOutContainer">
                    <button className="logOut" onClick={logout}>Uitloggen</button>
                </li>
            </div>
    )
}

export default NavBar;