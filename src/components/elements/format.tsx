import * as dt from "date-fns";
import React from "react";

export function formatDate(date: Date): string {
  return dt.format(date, "MMMM yyyy");
}

export function formatDistanceInWords(start: Date, end: Date): string {
  return dt.formatDistanceStrict(start, end);
}

export function formatDistance(start: Date, end: Date) {
  const totalMonths = dt.differenceInMonths(end, start);
  const years = Math.round(totalMonths / 12);
  const months = totalMonths % 12;
  if (years && months) {
    return (
      <div className="has-text-weight-bold">
        {years} {"years "}
        <span className=" is-size-7 has-text-weight-light">
          {months} months
        </span>
      </div>
    );
  }
  if (years) {
    return <div className="has-text-weight-bold">{years} years</div>;
  }
  if (months) {
    return (
      <span className=" is-size-7 has-text-weight-light">{months} months</span>
    );
  }
  return (
    <span className=" is-size-7 has-text-weight-light">less than a month</span>
  );
}
