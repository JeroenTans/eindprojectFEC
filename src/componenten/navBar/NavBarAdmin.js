import React from 'react';
import './NavBarAdmin.css';
import { NavLink, Route} from 'react-router-dom';

function NavBarAdmin (){
    return (

            <div className="mainContainer">
                <ul className="navContainerOne">
                    <nav className="navBar">
                            <NavLink to="/link" className="pages">Link</NavLink>
                            <NavLink to="/standaart_tip" className="pages">Standaard tip</NavLink>
                    </nav>
                </ul>
                <li className="logOutContainer">
                    <NavLink className="logOut" exact to="/">Uitloggen</NavLink>
                </li>
            </div>
    )
}

export default NavBarAdmin;