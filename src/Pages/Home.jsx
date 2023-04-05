import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../Styles/Home.scss";
import background3 from "../Styles/background3.png";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${background3})` }}>
      <div className="about">
        <h2> Hi, Violeta here!</h2>
        <div className="prompt">
          <p>
            A front-end developer dancing on the edge where technology and
            design meet and merge.
          </p>
          <div className="socialMedia">
            <a href="https://www.linkedin.com/in/violeta-gulbickaja-083b4417a/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/vgulbickaja">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
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
