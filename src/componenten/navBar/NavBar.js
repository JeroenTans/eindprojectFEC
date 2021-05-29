import React from 'react';
import './NavBar.css';

function NavBar (){
    return (
        <>
            <div className="mainContainer">
                <div className="navContainer">
                    <nav className="navBar">
                        <div className="textContainer">
                            <li className="pages">Home</li>
                        </div>
                        <div className="textContainer">
                            <li className="pages">Trade</li>
                        </div>
                        <div className="textContainer">
                            <li className="pages">Verstuurd</li>
                        </div>
                        <div className="textContainer">
                            <li className="pages">Groep</li>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default NavBar;