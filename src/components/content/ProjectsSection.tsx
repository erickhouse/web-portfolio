import { Job, Project, Projects } from "../../models/resume";
import { Tags } from "../elements/Tags";
import React from "react";
import styles from "./Content.module.scss";
import { Bullets } from "../elements/Bullets";
import {formatDate, formatDistance, formatDistanceInWords} from "../elements/format";

export const ProjectsSection = (props: { projects: Projects }) => {
  return (
    <div>
      {props.projects.items.map((project, key) => {
        return (
          <div className="card is-shadowless" key={key}>
            <Header project={project} />
            <Bullets bullets={project.bullets} />
          </div>
        );
      })}
    </div>
  );
};

const Header = ({ project }: { project: Project }) => {
  const start = new Date(project.start);
  const end = new Date(project.end);
  return (
    <header className="card-header">
      <div className="card-header-title media">
        <div className="media-content">
          <div className="">
            <h4 className="title is-4">{project.name}</h4>
          </div>
          <div className="is-size-7 has-text-weight-normal">
            <p className={styles.description}>{project.description}</p>
          </div>
          <Tags tags={project.tags} />
        </div>
        <div className="media-right">
          <div className="card-item">
            <div className="has-text-right has-text-weight-light">
              {formatDate(start)} - {formatDate(end)}
            </div>
          </div>
          <div className="card-item">
            <div className="title is-6 is-marginless has-text-right">
              {formatDistanceInWords(start, end)}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
