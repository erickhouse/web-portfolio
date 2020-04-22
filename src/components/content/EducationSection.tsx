import {Education, School} from "../../models/resume";
import React from "react";
import uw from "../../assets/uw.png";
import * as dt from "date-fns";
import {formatDate} from "../elements/format";

const logos = new Map([["uw", uw]]);

export const EducationSection = (props: { education: Education }) => {
  return (
    <div>
      {props.education.schools.map((school, key) => {
        return (
          <div className="card is-shadowless" key={key}>
            <Header school={school} />
          </div>
        );
      })}
    </div>
  );
};

const Header = ({ school }: { school: School }) => {
  const logo = logos.get(school.logo);
  const maybeLogo = logo ? (
    <figure className="image is-48x48">
      <img src={logo} />
    </figure>
  ) : undefined;
  const start = new Date(school.start);
  const end = new Date(school.end);
  return (
    <header className="card-header">
      <div className="card-header-title media">
        <div className="media-left">{maybeLogo}</div>
        <div className="media-content">
          <div className="">
            <h4 className="title is-4">{school.name}</h4>
          </div>
          <div className="is-size-7 has-text-weight-normal">
            {school.major}
          </div>
        </div>
        <div className="media-right">
          {formatGraduation(end)}
        </div>
      </div>
    </header>
  );
};

function formatGraduation(date: Date) {
  return <div className="has-text-right">
    <div className="has-text-weight-light has-text-ali">Graduated</div>
    <div className="has-text-weight-bold">{formatDate(date)}</div>
  </div>
}
