import React from "react";
import ProjectItem from "../Components/ProjectItem";
import "../Styles/Projects.scss";
import { ProjectList } from "../ProjectList";
import background3 from "../Styles/background3.png";

function Projects() {
  return (
    <div
      className="projects"
      style={{ backgroundImage: `url(${background3})` }}
    >
      <h1> My Personal Projects </h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem
              id={idx}
              name={project.name}
              image={project.image}
              description={project.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
