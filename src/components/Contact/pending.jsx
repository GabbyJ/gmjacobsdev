// ****************** A T T E N T I O N ! ! ! **********************
// PASTE THIS INTO CONTACT.JSX ONCE THE HIRE ME SECTION IS GOOD TO GO

import React, {Component} from "react";
import $ from "jquery";
import MessageMe from './Message-me/MessageMe';
import HireMe from "./Hire-me/HireMe";


class ContactSection extends Component{
  componentDidMount(){
    $('.tab-nav-wrapper-2 ul li a').click(function(){  
      $('.tab-content-wrapper-2 > div').hide();
     $('.tab-content-wrapper-2 > div').eq($(this).parent().index()).show();  
    });
  }
  
  render(){
    return(
      <section className="experience-2" id="contact">
      <div className="tab-nav-wrapper-2">
        <h2 id="what-to-do">Do you want to...</h2>
        <ul>
        {/* eslint-disable-next-line*/}
          <li className="one-2"><a><h2>Message Me</h2></a></li>
          {/* eslint-disable-next-line*/}
          <li className="two-2"><a><h2>Hire Me</h2></a></li>
          <hr />
        </ul>
      </div>
      <div className="tab-content-wrapper-2">
        {/* Message Me Tab */}
        <div className="tab1-c-2">
          <MessageMe />
        </div>
        {/* Hire Me Tab */}
        <div className="tab2-c-2">
          <HireMe />
        </div>
      </div>   
    </section>
  );
  }
}

export default ContactSection;