import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GraduationCap } from "phosphor-react";
import { Suitcase } from "phosphor-react";

function Education() {
  return (
    <div className="education">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<GraduationCap size={32} />}
        >
          <h3 className="vertical-timeline-element-title">
            "Baltic Institute of Technology"
          </h3>
          <p>
            Junior Programmer:
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>HTML5</li>
              <li>CSS</li>
              <li>MySQL</li>
            </ul>
          </p>
          <hr />
          <p>2022</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<Suitcase size={32} />}
        >
          <h3 className="vertical-timeline-element-title">
            "Language Coaching"{" "}
          </h3>
          <p>
            English Language lecturer:
            <ul>
              <li>Individual and group teaching of all levels (A1-C1) </li>
              <li>Business English teaching</li>
            </ul>
          </p>
          <hr />
          <p>2019 – 2022</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<Suitcase size={32} />}
        >
          <h3 className="vertical-timeline-element-title">"Profi-Lingua" </h3>
          <p>
            English and Russian Language lecturer:
            <ul>
              <li>Individual and group teaching of all levels (A1–C1)</li>
              <li>Business, General, Medical English teaching</li>
            </ul>
          </p>
          <hr />
          <p>2015 – 2018</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<GraduationCap size={32} />}
        >
          <h3 className="vertical-timeline-element-title">
            "University of Gdańsk"{" "}
          </h3>
          <p>English Translation Studies</p>
          <hr />
          <p>2013 – 2015</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<GraduationCap size={32} />}
        >
          <h3 className="vertical-timeline-element-title">
            "Lithuanian University of Educational Sciences"
          </h3>
          <p>English Philology</p>
          <hr />
          <p>2009 – 2013</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Education;
