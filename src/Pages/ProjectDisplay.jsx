import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../ProjectList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../Styles/ProjectDisplay.scss";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} />
      <h4>{project.description}</h4>
      <a href="https://github.com/vgulbickaja">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
}

export default ProjectDisplay;
