"use client";
import { Fragment } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { useSectionInView } from "@/hooks";
import { experiencesData } from "@/lib/data";

import SectionHeading from "./SectionHeading";

import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.5);
  return (
    <section id="experience" ref={ref}>
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map(
          ({ title, location, description, icon, date }, i) => (
            <Fragment key={i}>
              <VerticalTimelineElement
                contentStyle={{
                  background: "#e0f2fe",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.2)",
                  borderRadius: "0.5rem",
                  textAlign: "left",
                  padding: "1.2rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight: "0.4rem solid #155e75",
                }}
                date={date}
                icon={icon}
                iconStyle={{
                  background: "#f0f9ff",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize">{title}</h3>
                <p className="!font-normal !mt-0">{location}</p>
                <p className="!mt-1 !font-normal text-sky-800">{description}</p>
              </VerticalTimelineElement>
            </Fragment>
          )
        )}
      </VerticalTimeline>
    </section>
  );
}
