import React, {Component} from "react";
import $ from "jquery";

class Nav extends Component{
    componentDidMount(){
        $('.nav-toggle').hover(function(e) {
  
            e.preventDefault();
            $("html").toggleClass("openNav");
            $(".nav-toggle").toggleClass("active");
          
          });
    }

    render(){
        return(
            <div className="primary-nav nav-toggle" data-aos="fade-right" data-aos-duration="700">
                <button href="#" className="hamburger open-panel">
                    <span className="screen-reader-text">Menu</span>
                </button>
                <nav role="navigation" className="menu">
                    <img className="logo" src="./images/gj-logo-red-orange.png" alt="Logo saying 'GJ'" />
                    <div className="overflow-container">
                        <ul className="menu-dropdown">
                        <li className="home-nav"><a href="#home">Home<span className="icon"><i className="fas fa-home" aria-label="Home icon" data-aos="fade-right" data-aos-duration="700"/></span></a></li>
                        <li><a href="#about">About<span className="icon"><i className="fas fa-address-card" aria-label="About icon" data-aos="fade-right" data-aos-duration="700"/></span></a></li>
                        <li><a href="#aboutTabs">Qualifications<span className="icon"><i className="fas fa-laptop-code" aria-label="Qualifications icon" data-aos="fade-right" data-aos-duration="700"/></span></a></li>
                        {/* <li><a href="#services">Services<span className="icon"><i className="fas fa-laptop-code" aria-label="Services icon" data-aos="fade-right" data-aos-duration="700"/></span></a></li> */}
                        <li><a href="#portfolio">Portfolio<span className="icon"><i className="fas fa-folder-open" aria-label="Portfolio icon" data-aos="fade-right" data-aos-duration="700"/></span></a></li>
                        <li><a href="#contact">Contact{/* / Hire */}<span className="icon"><i className="fa fa-handshake" aria-label="Contact icon" data-aos="fade-right" data-aos-duration="700"/></span></a></li>
                        {/* If I can figure out how to link to active tabs, use these instead of Contact / Hire
                        <li><a href="#contact">Contact<span className="icon"><i className="fa fa-envelope" aria-label="Contact/Hire icon" /></span></a></li>
                        <li><a href="#hire">Hire<span className="icon"><i className="fas fa-handshake" aria-label="Hire icon" /></span></a></li>
                        */}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;