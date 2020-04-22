import React, { useState } from "react";

export const Bullets = (props: { bullets: string[] }) => {
  const [state, setState] = useState({ expanded: false });
  const [label, items] = showMoreItems(state.expanded, props.bullets);
  const maybeShowMoreButton =
    props.bullets.length > 3 ? (
      <button
        className="button is-small is-text is-white has-text-link"
        onClick={() => setState({ expanded: !state.expanded })}
      >
        <span>{label}</span>
      </button>
    ) : undefined;
  return (
    <div className="card-content">
      <div className="content">
        <ul>
          {items.map((item, key) => {
            return <li key={key}>{item}</li>;
          })}
        </ul>
        {maybeShowMoreButton}
      </div>
    </div>
  );
};

function showMoreItems(expanded: boolean, items: string[]): [string, string[]] {
  if (expanded) {
    return ["show less", items];
  }
  return ["show more", items.filter((_, index) => index < 3)];
}
