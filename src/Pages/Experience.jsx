import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GraduationCap } from "phosphor-react";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<GraduationCap size={32} />}
        >
          <h3 className="vertical-timeline-element-title">
            Baltic Institute of Technology
          </h3>
          <p>Junior Programmer Certificate</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
