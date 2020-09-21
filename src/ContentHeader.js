import React from 'react'
import './ContentHeader.css'
import {Link} from 'react-router-dom';

function ContentHeader() {

    return (
        <div className = "contentHeader">
            <div className = "contentHeader__menu">
                <Link to= '/'>
                    <p>About</p>
                </Link>
                <Link to= '/projects'>
                    <p>Projects</p>
                </Link>
                <Link to= '/Resume'>
                    <p>Résumé</p>
                </Link>
                <Link to= '/contact'>
                    <p>Contact</p>
                </Link>
            </div>
        </div>
    )
}

export default ContentHeader
