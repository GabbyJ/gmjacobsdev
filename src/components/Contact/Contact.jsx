import React, {Component} from "react";
import MessageMe from './Message-me/MessageMe';
//import HireMe from "./Hire-me/HireMe";


class ContactSection extends Component{
  render(){
    return(
      <section className="experience-2" id="contact" data-aos="fade-up" data-aos-duration="1000">
        <MessageMe />
      </section>
  );
  }
}

export default ContactSection;