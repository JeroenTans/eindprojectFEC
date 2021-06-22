import React from 'react';
import './NavBar.css';
import { NavLink, Route} from 'react-router-dom';
import PopUp from "../popup/PopUp";
import ExplainText from "../explainText/ExplainText";
import ReusableButton from "../button/ReusableButton";

function NavBar (){
    return (
            <div className="mainContainer">
                <ul className="navContainer">
                    <nav className="navBar">
                            <NavLink to="/available_tips" className="pages" >Home</NavLink>
                            <NavLink to="/trade" className="pages" >Trade</NavLink>
                            <NavLink to="/verstuurde_tips" className="pages" >Verstuurd</NavLink>
                            <NavLink to="/groep" className="pages" >Groep</NavLink>
                    </nav>
                </ul>
                <li className="logOutContainer">
                    <NavLink className="logOut" exact to="/">Uitloggen</NavLink>
                </li>
            </div>
    )
}

export default NavBar;