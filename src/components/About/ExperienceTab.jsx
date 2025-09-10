import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./timeline.css";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { jobs } from "../../lists.js";

function Card(props){
  return(
    <div>
    <h3 className="vertical-timeline-element-title">
          {props.position}
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
        {props.company}
        </h4>
        <span>
          {props.description}
        </span>
        <p>
          {props.keywords}
        </p>
        
        

    </div>
  );
}


function createCard(oneJob){
  var spacedKeyword = oneJob.keywords.map(x => <span><span className="bubble">{x}</span>{" "}</span> );
  var eachDescription = oneJob.description.map(x => <p>~ {x}</p>)
  return <Card 
    key = {oneJob.id}
    position = {oneJob.position}
    company = {oneJob.company}
    description = {eachDescription}
    keywords= {spacedKeyword }
  />
}

function ExperienceTab(){
        return(
            <div className="tab2-c">
                <VerticalTimeline>
      <VerticalTimelineElement
        iconStyle={{ background: "#872214", color: "#FAEBD7" }}
        icon={<FaBriefcase />}
      />
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#DE7F3F", color: "#FAEBD7" }}
        contentArrowStyle={{ borderRight: "7px solid  #DE7F3F" }}
        date={jobs[0].date}
        iconStyle={{ background: "#050404", color: "#FAEBD7" }}
        icon={<FaCalendarAlt />}
      >
      {createCard(jobs[0])}
       
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#DE7F3F", color: "#FAEBD7" }}
        contentArrowStyle={{ borderRight: "7px solid  #DE7F3F" }}
        date={jobs[1].date}
        iconStyle={{ background: "#050404", color: "#FAEBD7" }}
        icon={<FaCalendarAlt />}
      >
      {createCard(jobs[1])}
   
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={jobs[2].date}
        iconStyle={{ background: "#050404", color: "#FAEBD7" }}
        icon={<FaCalendarAlt />}
      >
      {createCard(jobs[2])}
        
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={jobs[3].date}
        iconStyle={{ background: "#050404", color: "#FAEBD7" }}
        icon={<FaCalendarAlt />}
      >
      {createCard(jobs[3])}
        
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={jobs[4].date}
        iconStyle={{ background: "#050404", color: "#FAEBD7" }}
        icon={<FaCalendarAlt />}
      >
      {createCard(jobs[4])}
        
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={jobs[5].date}
        iconStyle={{ background: "#050404", color: "#FAEBD7" }}
        icon={<FaCalendarAlt />}
      >
      {createCard(jobs[5])}
        
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={jobs[6].date}
        iconStyle={{ background: "#050404", color: "#FAEBD7" }}
        icon={<FaCalendarAlt />}
      >
      {createCard(jobs[6])}
        
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={jobs[7].date}
        iconStyle={{ background: "#050404", color: "#FAEBD7" }}
        icon={<FaCalendarAlt />}
      >
      {createCard(jobs[7])}
        
      </VerticalTimelineElement>
                  <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={jobs[8].date}
        iconStyle={{ background: "#050404", color: "#FAEBD7" }}
        icon={<FaCalendarAlt />}
      >
      {createCard(jobs[8])}
        
      </VerticalTimelineElement>

      <p>&nbsp;</p>
    </VerticalTimeline>
            </div> 
        );
      }


export default ExperienceTab;
