"use client";
import { Fragment } from "react";

import { useSectionInView } from "@/hooks";
import { projectsData } from "@/lib/data";

import Project from "./Project";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section id="projects" className="scroll-mt-28" ref={ref}>
      <SectionHeading>My projects</SectionHeading>
      <ul>
        {projectsData.map((project, i) => (
          <Fragment key={i}>
            <Project {...project} />
          </Fragment>
        ))}
      </ul>
    </section>
  );
}
