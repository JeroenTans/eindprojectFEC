import React from 'react';
import './NavBar.css';
import { NavLink, Route} from 'react-router-dom';

function NavBar (){
    return (
            <div className="mainContainer">
                <ul className="navContainer">
                    <nav className="navBar">
                        <li  className="textContainer">
                            <NavLink to="/available_tips" className="pages" >Home</NavLink>
                        </li>
                        <li  className="textContainer">
                            <NavLink to="/trade" className="pages" >Trade</NavLink>
                        </li>
                        <li  className="textContainer">
                            <NavLink to="/verstuurde_tips" className="pages" >Verstuurd</NavLink>
                        </li>
                        <li  className="textContainer">
                            <NavLink to="/groep" className="pages" >Groep</NavLink>
                        </li>
                        <li  className="textContainer">
                            <NavLink exact to="/" className="pages" >Log-uit</NavLink>
                        </li>
                    </nav>
                </ul>
            </div>
    )
}

export default NavBar;