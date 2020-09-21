import React from 'react';
import './Sidebar.css';
import {IconButton} from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';


function Sidebar() {
    return (
        <div className = "sidebar">
            {/* Personal Photo and Name */}
            <img 
            src = "https://media-exp1.licdn.com/dms/image/C4D03AQH-gRWzBMsHVw/profile-displayphoto-shrink_400_400/0?e=1606348800&v=beta&t=ssaf3P3CkyWsEwpAQxdsdnorS_rE6IY3cIAqu3f68UA"
            alt = ""
            />
            <h2>Hongdi LAI</h2>

            {/* Job */}

            <p> Software/ Web Developer </p>

            {/* Social Media and stuff */}
            <div className = "sidebar__contact">
                <IconButton href = "https://github.com/Hongdi-LAI"> 
                    <GitHubIcon />
                </IconButton>
                <IconButton href = "https://www.linkedin.com/in/hongdilai/">
                    <LinkedInIcon />
                </IconButton>
                {/* an email writing pop-up */}
                <IconButton href = "https://github.com/Hongdi-LAI">
                    <EmailIcon />
                </IconButton>
            </div>

            {/* Personal Interests */}

            {/* Contacts */}
        </div>
    )
}

export default Sidebar
