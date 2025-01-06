import React from "react";

function AboutSection(){
    return(
        <section className="about" id="about">
        <h2 data-aos="fade-up" data-aos-duration="700">About Me</h2>
        <div className="summary">
        <h3 className="aboutHeadline" data-aos="fade-up" data-aos-duration="700">A curiosity-driven Web Producer with a knack for front end development and multimedia</h3>
        <div data-aos="fade-up" data-aos-duration="700">
          <p>I am passionate about creating seamless digital experiences by blending technical expertise with creative problem-solving. As a Web Producer, I specialize in managing and enhancing web content, streamlining workflows, and delivering projects that prioritize usability and accessibility.</p>
          <p>I care deeply about user experience, beautiful design, and ensuring digital solutions are intuitive and functional. While I’ve honed my skills as a Front-End Developer, my focus has evolved into orchestrating web production processes that bring digital visions to life.</p>
            <p>I'm happiest when I'm creating, learning, exploring, and thinking about how to make things better and solve problems.</p>
          <p>I'm a born and raised Pittsburgher who now lives in Dallas, TX.
            I’m self-taught and love learning as much as I can. In 
            my free time, you can find me playing an instrument, watching movies, trying a new hobby,
            or traveling the world. Keep scrolling to find out more about me!
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
