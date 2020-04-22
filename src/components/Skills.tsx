import React from "react";
import styles from "./Skills.module.scss";
import cn from "classnames";
import * as _ from "lodash";
import { computeColorRange, Rgb, rgbToString } from "../compute/color";
import { Resume, Tag } from "../models/resume";

const dark: Rgb = {
  red: 54,
  green: 54,
  blue: 54,
};

const darkGreen = "rgb(37, 121, 66)";
const lightGreen = "rgb(72, 199, 116)";
const grey = "rgb(122, 122, 122)";
const green = {
  red: 72,
  green: 199,
  blue: 116,
};
const blue: Rgb = {
  red: 50,
  green: 152,
  blue: 220,
};

const sectionColor = blue;

const languages = {
  color: blue,
  skills: [
    "C#",
    "Typescript",
    "Python",
    "Kotlin",
    "F#",
    "Docker",
    "ASP.NET",
    "AWS",
  ],
  heading: "Languages",
};
const tools = {
  color: blue,
  skills: ["Docker", "ASP.NET", "AWS"],
  heading: "Tools",
};

export const Skills = (props: { resume: Resume }) => {
  const categories = props.resume.skills.categories;
  return (
    <div>
      <Heading />
      {categories.map((cat, index) => {
        return <Section key={index} {...cat} />;
      })}
    </div>
  );
};

const Heading = () => {
  return (
    <div>
      <h4
        className={cn(
          "is-size-6",
          styles.border,
          "has-text-primary",
          "is-uppercase"
        )}
      >
        Skills
      </h4>
    </div>
  );
};

const Section = (props: { title: string; tags: Tag[] }) => {
  const colors = computeColorRange(sectionColor, dark, props.tags.length).map(
    rgbToString
  );
  const tags = _.zip(props.tags, colors);
  return (
    <div>
      <SectionHeading label={props.title} />
      <div className="">
        <div
          className={cn(styles.subtitle, "is-size-7")}
          style={{ color: rgbToString(sectionColor) }}
        >
          <span className="icon is-medium">
            <i className="fas fa-sm fa-check" />
          </span>
          Proficient
        </div>
        <div className="tags is-marginless">
          {tags.map(([label, color], key) => {
            return (
              <div
                key={key}
                className="tag  is-light has-text-weight-bold"
                style={{ color }}
              >
                {label}
              </div>
            );
          })}
        </div>
        <div className={cn(styles.subtitle, "is-size-7")}>
          <span className="icon is-medium">
            <i className="fas fa-xs fa-circle" />
          </span>
          Developing
        </div>
      </div>
    </div>
  );
};

export const SectionHeading = (props: { label: string }) => {
  return (
    <div className={styles.title}>
      <h4 className="is-size-7 has-text-weight-light is-uppercase">
        {props.label}
      </h4>
    </div>
  );
};
