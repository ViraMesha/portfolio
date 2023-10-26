"use client";
import { Fragment } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { useThemeContext } from "@/context/ThemeContext";
import { useSectionInView } from "@/hooks";
import { experiencesData } from "@/lib/data";

import SectionHeading from "./SectionHeading";

import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.5);
  const { theme } = useThemeContext();
  return (
    <section id="experience" ref={ref} className="mb-28 sm:mb-40 scroll-mt-28">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map(
          ({ title, location, description, icon, date }, i) => (
            <Fragment key={i}>
              <VerticalTimelineElement
                contentStyle={{
                  background:
                    theme === "light" ? "#e0f2fe" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.2)",
                  borderRadius: "0.5rem",
                  textAlign: "left",
                  padding: "1.2rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid #155e75"
                      : "0.4rem solid #0891b2",
                }}
                date={date}
                icon={icon}
                iconStyle={{
                  background: theme === "light" ? "#f0f9ff" : "#0891b2",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize">{title}</h3>
                <p className="!font-normal !mt-0 ">{location}</p>
                <p className="!mt-1 !font-normal text-sky-800 dark:text-sky-300">
                  {description}
                </p>
              </VerticalTimelineElement>
            </Fragment>
          )
        )}
      </VerticalTimeline>
    </section>
  );
}
