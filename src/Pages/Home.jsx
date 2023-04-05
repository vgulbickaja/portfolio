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
          {/* <div className="socialMedia">
            <a href="https://www.linkedin.com/in/violeta-gulbickaja-083b4417a/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/vgulbickaja">
              <FontAwesomeIcon icon={faGithub} />
            </a> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
