import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./timeline.css";
import { FaCalendarAlt } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { education } from "../../lists.js";

function Card(props){
  return(
    <div>
    <h3 className="vertical-timeline-element-title">
          {props.degree}
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
        {props.school}
        </h4>
        <p>
          {props.description}
        </p>
        <p>
          {props.keywords}
        </p>
        
        

    </div>
  );
}


function createCard(oneEducation){
  var spacedKeyword = oneEducation.keywords.map(x => <span><span className="bubble">{x}</span>{" "}</span> );
  return <Card 
    key = {oneEducation.id}
    degree = {oneEducation.degree}
    school = {oneEducation.school}
    description = {oneEducation.description}
    keywords= {spacedKeyword }
  />
}



function EducationTab() {
    return(
      <div className="tab3-c">
        <VerticalTimeline>
      <VerticalTimelineElement
        iconStyle={{ background: "#872214", color: "#FAEBD7" }}
        icon={<MdSchool />}
      />
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={education[5].date}
        iconStyle={{ background: "#050404", color: "#FAEBD7" }}
        icon={<FaCalendarAlt />}
      >
      {/* LinkedIn PM */}
      {createCard(education[5])}
       
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={education[4].date}
        iconStyle={{ background: "#050404", color: "#FAEBD7" }}
        icon={<FaCalendarAlt />}
      >
      {/* Hubspot */}
      {createCard(education[4])}
       
      </VerticalTimelineElement>
      
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={education[3].date}
        iconStyle={{ background: "#050404", color: "#FAEBD7" }}
        icon={<FaCalendarAlt />}
      >
      {/* FreeCodeCamp */}
      {createCard(education[3])}
       
      </VerticalTimelineElement>
          <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#DE7F3F", color: "#FAEBD7" }}
        contentArrowStyle={{ borderRight: "7px solid  #DE7F3F" }}
        date={education[0].date}
        iconStyle={{ background: "#050404", color: "#FAEBD7" }}
        icon={<FaCalendarAlt />}
      >
        {/* Udemy */}
        {createCard(education[0])}
        
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={education[1].date}
        iconStyle={{ background: "#050404", color: "#FAEBD7" }}
        icon={<FaCalendarAlt />}
      >
      {/* College */}
        {createCard(education[1])}
      </VerticalTimelineElement>
      {/* <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={education[2].date}
        iconStyle={{ background: "#050404", color: "#FAEBD7" }}
        icon={<FaCalendarAlt />}
      >
        {/* High School */}
        {/* {createCard(education[2])} */}
      {/* </VerticalTimelineElement> */} 

      <p>&nbsp;</p>
    </VerticalTimeline>
    </div>   
        
    );
}

export default EducationTab;
