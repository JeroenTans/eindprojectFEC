import React, {useContext} from 'react';
import './NavBarAdmin.css';
import {NavLink} from 'react-router-dom';
import {AuthContext} from "../Context/AuthContextProvider";

function NavBarAdmin (){

    const {logout} = useContext(AuthContext);

    return (

            <div className="mainContainer">
                <ul className="navContainerOne">
                    <nav className="navBar">
                            <NavLink to="/link" className="pages">Link</NavLink>
                            <NavLink to="/standaart_tip" className="pages">Standaard tip</NavLink>
                    </nav>
                </ul>
                <li className="logOutContainer">
                    <button className="logOut" onClick={logout}>Uitloggen</button>
                </li>
            </div>
    )
}

export default NavBarAdmin;