import React from 'react';
import './NavBarAdmin.css';
import { NavLink, Route} from 'react-router-dom';

function NavBarAdmin (){
    return (

            <div className="mainContainerAdmin">
                <ul className="navContainerAdmin">
                    <nav className="navBarAdmin">
                        <li className="textContainerAdmin">
                            <NavLink to="/link" className="pagesAdmin">Link</NavLink>
                        </li>
                        <li className="textContainerAdmin">
                            <NavLink to="/standaart_tip" className="pagesAdmin">Standaard tip</NavLink>
                        </li>
                        <li className="textContainerAdmin">
                            <NavLink exact to="/" className="pagesAdmin" >Log-uit</NavLink>
                        </li>
                    </nav>
                </ul>
            </div>
    )
}

export default NavBarAdmin;