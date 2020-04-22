import React from "react";
import cn from "classnames";
import styles from "./SideNav.module.scss";

export const SideNav = (props: {
  active: string;
  sections: string[];
  setSection: (section: { active: string }) => void;
}) => {
  const links = props.sections.map((section, key) => {
    return (
      <li className={styles.link} key={key} onClick={() => props.setSection({active: section})}>
        <a className={cn({ "is-active": section === props.active }, "is-link")} href={`#${section}`}>
          {section}
        </a>
      </li>
    );
  });
  return (
    <aside className="menu">
      <p className="menu-label">Sections</p>
      <ul className={styles.group}>{links}</ul>
    </aside>
  );
};
