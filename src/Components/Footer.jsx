import React from "react";
import "../Styles/Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../Styles/Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faGithub} />
      </div>
    </div>
  );
}

export default Footer;
