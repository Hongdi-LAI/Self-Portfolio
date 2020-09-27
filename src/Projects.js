import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

function Projects() {
  return (
    <div className="projects">
      <div className="projects__title">
        <h1>About Projects</h1>
        <p>
          Projects and relative code could be accessed respectively down below
        </p>
      </div>

      <div className="projects__seperate">
        <p>———————————————————————— · ————————————————————————</p>
      </div>

      <div className="projects__row">
        <ProjectCard
          img={require("./image/Amazon-Profile.png")}
          name="E-commerce - Amazon Clone"
          AppUrl="https://clone-27d1c.web.app/"
          CodeUrl="https://github.com/Hongdi-LAI/Amazon-clone"
        />
        <ProjectCard
          img={require("./image/Whatsapp-Profile.PNG")}
          name="Realtime Chatting - Whatsapp Clone"
          AppUrl="https://whatsapp-clone-847bd.web.app/"
          CodeUrl="https://github.com/Hongdi-LAI/Whatsapp-clone"
        />
      </div>
      <div className="projects__row">
        <ProjectCard
          img={require("./image/Airbnb-Profile.PNG")}
          name="Online Marketplace - Airbnb Clone"
          AppUrl="https://airbnb-clone-d469f.web.app/"
          CodeUrl="https://github.com/Hongdi-LAI/Airbnb-clone"
        />
        <ProjectCard
          img={require("./image/Tinder-Profile.PNG")}
          name="Online Dating - Tinder Clone"
          AppUrl="https://tinder-clone-b6bc7.web.app/"
          CodeUrl="https://github.com/Hongdi-LAI/Tinder-clone"
        />
      </div>
      <div className="projects__row">
        <ProjectCard
          img={require("./image/Spotify-Profile.PNG")}
          name="Music Streaming Service - Spotify Clone"
          AppUrl="https://spotify-clone-5603e.web.app"
          CodeUrl="https://github.com/Hongdi-LAI/Spotify-clone/tree/master/spotify-clone"
        />
      </div>

      <div className="projects__seperate">
        <p>———————————————————————— · ————————————————————————</p>
      </div>

      <div className="projects__pageChange">
        <Link to="/about">
          <div className="projects__pageChangeButton">
            <ChevronLeftIcon />
            <p>About</p>
          </div>
        </Link>
        <h5>|</h5>
        <Link to="/resume">
          <div className="projects__pageChangeButton">
            <p>Resume</p>
            <ChevronRightIcon />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
