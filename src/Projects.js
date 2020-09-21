import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';

function Projects() {
    return (
        <div className = "projects">
            <div className = "projects__row">
                <ProjectCard 
                    img = {require("./image/Amazon-Profile.png")}
                    name = "E-commerce - Amazon Clone"
                    AppUrl = "https://clone-27d1c.web.app/"
                    CodeUrl = "https://github.com/Hongdi-LAI/Amazon-clone"
                />
                <ProjectCard 
                    img = {require("./image/Whatsapp-Profile.PNG")}
                    name = "Realtime Chatting - Whatsapp Clone"
                    AppUrl = "https://whatsapp-clone-847bd.web.app/"
                    CodeUrl = "https://github.com/Hongdi-LAI/Whatsapp-clone"
                />
                <ProjectCard 
                    img = {require("./image/Airbnb-Profile.PNG")}
                    name = "Online Marketplace - Airbnb Clone"
                    AppUrl = "https://airbnb-clone-d469f.web.app/"
                    CodeUrl = "https://github.com/Hongdi-LAI/Airbnb-clone"
                />
            </div>

            <div className = "projects__row">
                <ProjectCard 
                    img = {require("./image/Spotify-Profile.PNG")}
                    name = "Music Streaming Service - Spotify Clone"
                    AppUrl = "https://spotify-clone-5603e.web.app"
                    CodeUrl = "https://github.com/Hongdi-LAI/Spotify-clone/tree/master/spotify-clone"
                />
                <ProjectCard 
                    img = {require("./image/Tinder-Profile.PNG")}
                    name = "Online Dating - Tinder Clone"
                    AppUrl = "https://tinder-clone-b6bc7.web.app/"
                    CodeUrl = "https://github.com/Hongdi-LAI/Tinder-clone"
                />
            </div>
            
        </div>
    )
}

export default Projects
