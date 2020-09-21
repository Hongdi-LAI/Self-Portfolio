import React from 'react'
import './ContentHeader.css'
import {Link} from 'react-router-dom';

function ContentHeader() {
    return (
        <div className = "contentHeader">

            <div className = "contentHeader__menu">

                <p>About</p>
                <p>Projects</p>
                <p>Skills</p>
            </div>
            
        </div>
    )
}

export default ContentHeader
