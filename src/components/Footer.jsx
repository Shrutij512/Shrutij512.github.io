import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">

        <div className="socials">
          <ul id="social-icons">
            <li id="contact-github">
              <a target="_blank" rel="noreferrer" href="https://github.com/Shrutij512">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li id="contact-linkedin">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/shruti-jain-152b32263/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <a href="https://github.com/Shrutij512">
            Designed and built by Shruti Jain{" "}
            <FontAwesomeIcon icon={faHeart} />
          </a>
        </div>
        <a href="mailto: codecode355@gmail.com" id="contact-email">jainshruti0512@gmail.com<hr /></a>
      </div>
    </footer>
  );
}
