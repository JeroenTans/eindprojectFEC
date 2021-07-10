import React from "react";
import './PageNotFound.css'
import {Link} from 'react-router-dom';

function PageNotFound (){

    return (
        <>
            <div className="pageBackground">
                <div className="notFoundBox">
                    <h1>404 PAGINA NIET GEVONDEN</h1>
                </div>
                <div className="notFoundBox">
                    <h2>Klik <Link to="/">hier</Link> om naar het log in scherm te gaan.</h2>
                </div>
            </div>
        </>
    )
}

export default PageNotFound;