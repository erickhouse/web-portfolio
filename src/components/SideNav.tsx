import React from "react";
import cn from "classnames";


function isViewingSection(section: string): boolean {
  const el = document.querySelector(`#${section}`);
  const rect = el?.getBoundingClientRect();
  // const top = rect?.top ?? 0;
  // const bottom = rect?.bottom ?? 0;
  // return top >= 0 && bottom <= window.innerHeight;
  const windowY = window.scrollY;
  const topOffset = rect?.top ?? 0 - windowY;
  const bottomOffset = rect?.bottom ?? 0 - windowY;
  return topOffset <= 0 && bottomOffset > 0;
}

export const SideNav = (props: {
  active: string;
  sections: string[];
  setSection: (section: { active: string }) => void;
}) => {
  const links = props.sections.map((section, key) => {
    return (
      <li key={key} onClick={() => props.setSection({active: section})}>
        <a className={cn({ "is-active": section === props.active })} href={`#${section}`}>
          {section}
        </a>
      </li>
    );
  });
  return (
    <aside className="menu">
      <p className="menu-label">Sections</p>
      <ul className="menu-list is-active">{links}</ul>
    </aside>
  );
};
