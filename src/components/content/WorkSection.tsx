import React from "react";
import { Job, Work } from "../../models/resume";
import { Tags } from "../elements/Tags";
import { Bullets } from "../elements/Bullets";
import {formatDate, formatDistance, formatDistanceInWords} from "../elements/format";

export const WorkSection = (props: { work: Work }) => {
  return (
    <div>
      {props.work.jobs.map((job, key) => {
        return (
          <div className="card is-shadowless" key={key}>
            <Header job={job} />
            <Bullets bullets={job.bullets} />
          </div>
        );
      })}
    </div>
  );
};

const Header = ({ job }: { job: Job }) => {
  const start = new Date(job.start);
  const end =
    job.end === "Present"
      ? new Date(Date.now())
      : new Date(job.end)
  const endFmt =
    job.end === "Present" ? (
      <span className="has-text-info">Present</span>
    ) : (
      formatDate(end)
    );
  return (
    <header className="card-header">
      <div className="card-header-title media">
        <div className="media-content">
          <div className="card-item">
            <p className="title is-4 is-marginless">{job.company}</p>
          </div>
          <p className="card-item is-size-7 has-text-weight-normal">
            {job.role}
            <span className="icon is-medium">
              <i className="fas fa-xs fa-circle" />
            </span>
            {job.product}
            <span className="icon is-medium">
              <i className="fas fa-map-marker-alt" />
            </span>
            {job.location}
          </p>
          <Tags tags={job.tags} />
        </div>
        <div className="media-right">
          <div className="card-item">
            <div className="has-text-right has-text-weight-light">
              {formatDate(start)} - {endFmt}
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
