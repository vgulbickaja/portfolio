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
        <h2> Hello and Welcome!</h2>
        <div className="prompt">
          <p>
            My name is Violeta. I am a beginner web developer. My background
            story? With considerable experience in the field of language
            teaching and translation in Lithuania and abroad, I felt my
            curiosity drawn to the kind of in-demand career that would merge
            design and raw technical skills. This is when programming and
            front-end development came into sight. Last year I completed a
            programming course (mainly focusing on JavaScript and React library)
            and now as I am constantly building up my skills and knowledge I am
            looking for other opportunities to put them into use.
            <hr />
            I'm currently looking for a junior, entry level developer's position
            or internship.
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
    </div>
  );
}

export default Home;
