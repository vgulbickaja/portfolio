import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../Styles/Home.scss";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, Violeta here!</h2>
        <div className="prompt">
          <p>
            A front-end developer dancing on the edge where technology and
            design meet and merge.
          </p>
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faGithub} />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>ReactJS, HTML, CSS</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Javascript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
