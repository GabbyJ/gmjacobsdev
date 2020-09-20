import React from "react";
import Nav from "./Nav/Nav.jsx";
import HomeSection from "./Home/Home";
import AboutSection from "./About/About";
import AboutTabs from "./About/AboutTabs";
// import Services from "./Services/Services";
import Portfolio from "./Portfolio/Portfolio";
import ContactSection from "./Contact/Contact";
import Footer from "./Footer/Footer";
import PageBreak from "./PageBreaks/PageBreaks";
import AboutBreak from "./PageBreaks/AboutBreak";
import Learning from "./About/WhatImLearning";


function App() {
    return(
    <div>
        <Nav />
        <div className="container" id="home">
            <HomeSection />
            <AboutBreak />
            <AboutSection />
            <PageBreak />
            <AboutTabs />
            <PageBreak />
            <Learning />
            {/* <Services />*/}
            <PageBreak /> 
            <Portfolio />
            <PageBreak />
            <ContactSection />
        </div>
        <Footer />
    </div>
    ) ;
}

export default App;