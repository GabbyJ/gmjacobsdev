import React from "react";
import {services} from "../../lists.js";

function Card(props){
    return(
    <div>
        <i className={props.image} />
        <h2>{props.service}</h2>
        <p className="description">{props.description}</p>
        <p className="subtitle1">{props.subtitle1}</p>
        <p className="subDescription1">{props.subDescription1}</p>
        <p className="subtitle2">{props.subtitle2}</p>
        <ul className="subDescription2">
        {props.subDescription2}
        </ul>
    </div>
    );
  }
  
  
  function createCard(oneService){
    var eachTool = oneService.subDescription2.map(x => <li> {x}</li> );
    return <Card 
      key = {oneService.id}
      image = {oneService.image}
      service = {oneService.service}
      description = {oneService.description}
      subtitle1 = {oneService.subtitle1}
      subDescription1 = {oneService.subDescription1}
      subtitle2 = {oneService.subtitle2}
      subDescription2 = {eachTool}
    />
  }


function Services() {
    return(
        <section className="service" id="services"> 
            <h2 data-aos="fade-up" data-aos-duration="700">Services</h2>
            <div className="services" data-aos="fade-up" data-aos-duration="700">
                <div className="design section" data-aos="fade-up" data-aos-duration="700">
                    {createCard(services[0])}
                </div>
                <div className="development section" data-aos="fade-up" data-aos-duration="700">
                    {createCard(services[1])}
                </div>
                <div className="photography section" data-aos="fade-up" data-aos-duration="700">
                    {createCard(services[2])}
                </div>
                {/*<div className="marketing section">
                    {createCard(services[3])}
                </div>*/}
            </div>
        </section>
    );
}

export default Services;