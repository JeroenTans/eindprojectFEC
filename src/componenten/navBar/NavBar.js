import React from 'react';
import './NavBar.css';
import {NavLink} from 'react-router-dom';
import {useAuthContext} from "../../context/AuthContextProvider";


function NavBar (){

    const {logout} = useAuthContext()

    return (
            <div className="mainContainer">
                <ul className="navContainer">
                    <nav className="navBar">
                            <NavLink to="/available_tips" className="pages" >Overzicht</NavLink>
                            <NavLink to="/trade" className="pages" >Ruil/Maak tips</NavLink>
                            <NavLink to="/verstuurde_tips" className="pages" >Verstuurde tips</NavLink>
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