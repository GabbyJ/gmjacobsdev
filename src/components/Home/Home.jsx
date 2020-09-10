import React from "react";
import TypingEffect from "./Typing";

function HomeSection(){
    return(
      <header className="header">
        <img className="profilePic" src= "./images/orange-Avatar3.svg" alt="Avatar of Gabrielle Jacobs" data-aos="fade-down" data-aos-duration="1000"/>
        <TypingEffect/>
        <div className="socials" data-aos="fade-up" data-aos-duration="1000">
          <a href="https://github.com/GabbyJ" target="_blank" rel="noreferrer noopener" aria-label="Github"><i className="fab fa-github" title="Github" /></a>
          <a href="https://www.linkedin.com/in/gabrielle-jacobs-9a890473" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn"><i className="fab fa-linkedin-in" title="LinkedIn" /></a>
          <a href="sms:+1469-626-7843" target="_blank" rel="noreferrer noopener" aria-label="Call or Text"><i className="fas fa-mobile-alt" title="Call or Text" /></a>
          <a href="#contact" rel="noreferrer noopener" aria-label="E-mail"><i className="fas fa-envelope" title="E-mail" /></a>
        </div>
      </header>
    );
  }

export default HomeSection;