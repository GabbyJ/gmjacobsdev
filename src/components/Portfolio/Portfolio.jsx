import React from "react"; 
import { portfolio } from "../../lists.js";



function Card(props){
  return(
    <div className="project" id={props.id} data-aos="fade-up" data-aos-duration="700">
        <div className="img-container">
            <img className="image" src={props.image} alt="project"/>
            <div className="img-overlay">
                <p className="hover-text">{props.description}</p>
                {props.tech}
            </div>
        </div>
        <p className="title-panel">{props.title}
            <span className="link-panel">
                <a href={props.github} target="_blank" rel="noopener noreferrer" aria-label="Github"><i className="fab fa-github" title="Github"/></a>
                {/* <a href={props.codepen} target="_blank" rel="noopener noreferrer" aria-label="Codepen"><i className="fab fa-codepen" title="Codepen"/></a> */}
                <a href={props.link} target="_blank" rel="noopener noreferrer" aria-label="Go to live site"><i className="fas fa-link" title="Go to live site"/></a>
            </span>
        </p>
    </div> 
  );
}





function createCard(oneProject){
  var eachTech = oneProject.tech.map(x => <span className="tech"> {x}</span> );
  return <Card 
    key = {oneProject.id}
    image = {oneProject.image}
    title = {oneProject.title}
    description = {oneProject.description}
    tech = {eachTech}
    github = {oneProject.github}
    // codepen = {oneProject.codepen}
    link = {oneProject.link}
  />
  
}


function Portfolio() {
    return(
        <section className="portfolio" id="portfolio">
            <h2 data-aos="fade-up" data-aos-duration="700">Portfolio</h2>
            <div id="projects" >
                {portfolio.map(createCard)}
            </div>
            <a href="https://github.com/GabbyJ" target="_blank" rel="noreferrer noopener" aria-label="Github" data-aos="fade-up" data-aos-duration="700"><button><i className="fab fa-github" title="Github" /> See more on GitHub</button></a>
            {/* Language icons
                HTML - <i class="fab fa-html5"></i>
                CSS3 - <i class="fab fa-css3-alt"></i>
                Sass - <i class="fab fa-sass"></i>
                Bootstrap - <i class="fab fa-bootstrap"></i>
                Javascript - <i class="fab fa-js"></i>
                jQuery - 
                Python - <i class="fab fa-python"></i>
                React - <i class="fab fa-react"></i>
                Node - <i class="fab fa-node"></i>
                WordPress - <i class="fab fa-wordpress"></i>
            */}
      </section>
    );
}

export default Portfolio;