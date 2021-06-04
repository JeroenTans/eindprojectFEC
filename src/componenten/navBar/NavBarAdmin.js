import React from 'react';
import './NavBarAdmin.css';
import { Link } from 'react-router-dom';

function NavBarAdmin (){
    return (
        <>
            <div className="mainContainerAdmin">
                <div className="navContainerAdmin">
                    <nav className="navBarAdmin">
                        <div className="textContainerAdmin">
                            <li className="pagesAdmin">Link</li>
                        </div>
                        <div className="textContainerAdmin">
                            <li className="pagesAdmin">Standaard tip</li>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default NavBarAdmin;