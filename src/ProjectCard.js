import React from 'react';
import './ProjectCard.css';

function ProjectCard({ img, name, url }) {

    return (
        <a            
        href = {url}
        target = "_blank">
            <div className = "projectCard">
                <img src = {img} alt = "" />
                <p>{name}</p>
            </div>
        </a>
    )
}

export default ProjectCard
