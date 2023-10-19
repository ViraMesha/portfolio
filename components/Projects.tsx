import React from "react";
import { projectsData } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Project from "./Project";

export default function Projects() {
  return (
    <section>
      <SectionHeading>My projects</SectionHeading>
      <ul>
        {projectsData.map((project, i) => (
          <React.Fragment key={i}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
}
