import React from "react";
import Style from '../Style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
function SocialFollow() {
  return (
    <div className="social">
      <a href="https://github.com/spanneerselvam" className="github-social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/sai-panneerselvam/" className="linkedin-social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://www.instagram.com/sai.panneer/" className="instagram-social">
        <FontAwesomeIcon icon={faInstagram} size="2x"/>
      </a>

    </div>
  );
}
export default SocialFollow;
