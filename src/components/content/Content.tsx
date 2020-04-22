import styles from "./Content.module.scss";
import cn from "classnames";
import React, { useEffect, useRef } from "react";
import "./bulma.override.scss";
import { WorkSection } from "./WorkSection";
import { Resume, Section } from "../../models/resume";
import { useSpy } from "../../hooks/spy.hook";
import { ProjectsSection } from "./ProjectsSection";
import { EducationSection } from "./EducationSection";

export const Heading = React.forwardRef(
  (props: { id: string; text?: string }, ref: any) => {
    return (
      <div id={props.id} ref={ref} className={styles.heading}>
        <h4
          className={cn(
            "is-size-6",
            styles.border,
            "has-text-primary",
            "is-uppercase"
          )}
        >
          {props.text}
        </h4>
      </div>
    );
  }
);

export const Content = (props: {
  resume: Resume;
  active: string;
  setSection: (section: { active: string }) => void;
}) => {
  const resume = props.resume;

  const sections = new Map([
    [Section.Objective, useRef(null)],
    [Section.Work, useRef(null)],
    [Section.Projects, useRef(null)],
    [Section.Education, useRef(null)],
  ]);

  const spy = {
    activeSectionDefault: 0,
    offsetPx: 0,
    sectionElementRefs: [...sections.values()],
    throttleMs: 100,
  };
  const activeIndex = useSpy(spy);
  const active = [...sections.keys()][activeIndex];
  useEffect(() => props.setSection({ active: active }), [active]);

  return (
    <div>
      <Objective
        text={resume.objective.body}
        ref={sections.get(Section.Objective)}
      />
      <Heading
        id={Section.Work}
        ref={sections.get(Section.Work)}
        text={resume.work.heading}
      />
      <WorkSection work={resume.work} />
      <Heading
        id={Section.Projects}
        ref={sections.get(Section.Projects)}
        text={resume.projects.heading}
      />
      <ProjectsSection projects={resume.projects} />
      <Heading
        id={Section.Education}
        ref={sections.get(Section.Education)}
        text={resume.education.heading}
      />
      <div className={styles.last}>
        <EducationSection education={resume.education} />
      </div>
    </div>
  );
};

const Objective = React.forwardRef((props: { text: string }, ref: any) => {
  return (
    <p
      id={Section.Objective}
      ref={ref}
      className={cn(styles.heading, "has-text-weight-light")}
    >
      {props.text}
    </p>
  );
});
