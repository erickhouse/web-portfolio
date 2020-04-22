import React, { useState } from "react";

export const Tags = (props: { tags: string[] }) => {
  const [state, setState] = useState({
    expanded: false,
  });
  const [icon, tags] = expandTags(state.expanded, props.tags);
  const maybeExpandButton =
    props.tags.length > 3 ? (
      <span
        className="tag is-white has-text-link button"
        onClick={() => setState({ expanded: !state.expanded })}
      >
        <span className="icon is-small">
          <i className={icon}></i>
        </span>
      </span>
    ) : undefined;
  return (
    <div className="tags has-text-weight-normal is-size-7">
      {tags.map((tag, key) => {
        return (
          <span key={key} className="tag">
            {tag}
          </span>
        );
      })}
      {maybeExpandButton}
    </div>
  );
};

function expandTags(expanded: boolean, tags: string[]): [string, string[]] {
  if (expanded) {
    return ["fas fa-lg fa-angle-left", tags];
  }
  return ["fas fa-lg fa-ellipsis-h", tags.filter((_, index) => index < 3)];
}
