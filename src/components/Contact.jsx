import React, { useEffect } from "react";
import AOS from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


export default function Contact() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section data-aos="fade-up" className="contact-continer sections" id="contact">
      <h1 className="heading">
        <span className="sauce">Contact Me</span>
      </h1>
      <div data-aos="fade-up" className="flex-center">
        <h1 className="title">Get In Touch</h1>
        <p style={{ textAlign: "center", "": 700 }}>
          Send an Email. I would love to talk more to you.
        </p>
        <div className="button-container">
          <a
            className="contact-button"
            href="mailto:jainshruti0512@gmail.com"
          >
            Send an email
          </a>
        </div>
        <div id="contact-phone" className="button-container">
          <a
            className="contact-button"
            href="tel:+917073822475"
          >
            Give a Ring
          </a>
          <div id="contact-icons">
            <li id="contact-github-1">
              <a target="_blank" rel="noreferrer" href="https://github.com/Shrutij512">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li id="contact-linkedin-1">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/shruti-jain-152b32263/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </div>
        </div>
      </div>
    </section>
  );
}
