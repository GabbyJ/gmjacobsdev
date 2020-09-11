import React from "react";

function AboutSection(){
    return(
        <section className="about" id="about">
        <h2 data-aos="fade-up" data-aos-duration="700">About Me</h2>
        <div className="summary">
        <h3 className="aboutHeadline" data-aos="fade-up" data-aos-duration="700">A curiosity driven Front End Developer with multimedia chops</h3>
        <div data-aos="fade-up" data-aos-duration="700">
          <p>I am passionate about bringing both the technical and visual aspects of digital products to life. I care deeply about the user experience, beautiful pixels, and writing clean accessible code that's readable by humans.</p>
          <p>I'm happiest when I'm creating, learning, exploring, and thinking about how to make things better and solve problems.</p>
          <p>I'm a born and raised Pittsburgher who now lives in Dallas, TX.
            I'm a self-taught web developer who loves learning as much as I can. In 
            my free time, I'm usually playing an instrument, watching movies,
            or traveling the world. Keep scrolling down to find out more about me!
          </p>
        </div>
        </div>
        <div >
          <a href="./images/Gabrielle_Jacobs_Resume.pdf" target="_blank" rel="noreferrer noopener"><button>View Resume</button></a>
          <a href="#portfolio"><button>View Portfolio</button></a>
        </div>
      </section>
    );
}

export default AboutSection;