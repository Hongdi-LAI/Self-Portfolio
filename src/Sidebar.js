import React from 'react';
import './Sidebar.css';
import {IconButton} from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import BusinessIcon from '@material-ui/icons/Business';


function Sidebar() {
    
    
    
    return (
        <div className = "sidebar">
            {/* Personal Photo */}
            <div className = "sidebar__icon">
                <img 
                src = "https://media-exp1.licdn.com/dms/image/C4D03AQH-gRWzBMsHVw/profile-displayphoto-shrink_400_400/0?e=1606348800&v=beta&t=ssaf3P3CkyWsEwpAQxdsdnorS_rE6IY3cIAqu3f68UA"
                alt = ""
                />
                <p>_____________________</p>
            </div>

            {/* Name and work */}
            <div className = "sidebar__info">
                <h2>Hongdi LAI</h2>
                <p> Software/Web Developer </p>
            </div>

            

            {/* Personal Photo */}
            <div className = "sidebar__location">
                <LocationOnIcon/>
                <p>Singapore</p>
            </div>

            <a
            className = "sidebar__employ" 
            href = {"https://www.dhigroup.com/dhi-worldwide/sg"} 
            target = "_blank">
                <BusinessIcon />
                <p>DHI Singapore</p>
            </a>

            <p className = "sidebar__seperate">_____________________</p>

            {/* Social Media and stuff */}
            <div className = "sidebar__contact">
                
                <IconButton  href = {"https://github.com/Hongdi-LAI"} target="_blank"> 
                    <GitHubIcon />
                </IconButton>
                <IconButton  href = {"https://www.linkedin.com/in/hongdilai/"} target="_blank">
                    <LinkedInIcon />
                </IconButton>
                {/* an email writing pop-up */}
                <IconButton  href = {"https://github.com/Hongdi-LAI"} target="_blank">
                    <EmailIcon />
                </IconButton>
            </div>

            {/* Personal Interests */}

            {/* Contacts */}
        </div>
    )
}

export default Sidebar
