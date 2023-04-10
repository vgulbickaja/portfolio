import React from "react";
import "../Styles/Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../Styles/Footer.scss";

function Footer() {
  return (
    <div className="footer">
      {/* <div className="socialMedia">
        <a href="https://www.linkedin.com/in/violeta-gulbickaja-083b4417a/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/vgulbickaja">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div> */}
      <ul className="contact">
        <p>Location: Vilnius, Lithuania</p>
        <p>Email: v.gulbickaja@gmail.com</p>
        <p>Phone: +37063603229</p>
      </ul>
    </div>
  );
}

export default Footer;
