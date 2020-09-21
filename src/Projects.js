import React from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard'

function Projects() {
    return (
        <div className = "projects">
            <div className = "projects__row">
                <ProjectCard 
                img = {require("./image/Amazon-Profile.png")}
                name = "E-commerce - Amazon Clone"
                url = "https://clone-27d1c.web.app/"
                />
                <ProjectCard 
                img = {require("./image/Whatsapp-Profile.PNG")}
                name = "Realtime Chatting - Whatsapp Clone"
                url = "https://whatsapp-clone-847bd.web.app/"
                />
                <ProjectCard 
                img = {require("./image/Airbnb-Profile.PNG")}
                name = "Online Marketplace - Airbnb Clone"
                url = "https://airbnb-clone-d469f.web.app/"
                />
            </div>

            <div className = "projects__row">
                <ProjectCard 
                img = {require("./image/Spotify-Profile.PNG")}
                name = "Music Streaming Service - Spotify Clone"
                url = "https://spotify-clone-5603e.web.app"
                />
                <ProjectCard 
                img = {require("./image/Tinder-Profile.PNG")}
                name = "Online Dating - Tinder Clone"
                url = "https://tinder-clone-b6bc7.web.app/"
                />
            </div>
        </div>
    )
}

export default Projects
