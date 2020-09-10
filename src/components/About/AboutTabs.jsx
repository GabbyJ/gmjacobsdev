import React, {Component} from "react";
import SkillsTab from "./SkillsTab";
import ExperienceTab from "./ExperienceTab";
import EducationTab from "./EducationTab";
import $ from "jquery";

class AboutTabs extends Component{
    componentDidMount(){
        $('.tab-nav-wrapper ul li a').click(function(){  
                $('.tab-content-wrapper > div').hide();
            $('.tab-content-wrapper > div').eq($(this).parent().index()).show();  
            });
        
    }
    
    render(){
        return(
        <section className="experience" id="aboutTabs">
            <div className="tab-nav-wrapper" data-aos="fade-up" data-aos-duration="700">
                <ul>
                {/* eslint-disable-next-line*/}
                <li className="one"><a><h2>Skills</h2></a></li>
                {/* eslint-disable-next-line*/}
                <li className="two"><a><h2>Experience</h2></a></li>
                {/* eslint-disable-next-line*/}
                <li className="three"><a><h2>Education</h2></a></li>
                <hr />
                </ul>
            </div>
            <div className="tab-content-wrapper" data-aos="fade-up" data-aos-duration="700">
                <SkillsTab />
                <ExperienceTab />
                <EducationTab />
            </div>
        </section>
        );
    }
}


export default AboutTabs;