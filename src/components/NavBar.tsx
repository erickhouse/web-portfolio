import React from "react";
import styles from "./NavBar.module.scss";
import cn from "classnames";

/**
 * Main page navbar
 */
export const NavBar = () => {
  return (
    <nav
      className={cn(styles.border, "navbar", "is-light")}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <Brand />
        <div className="navbar-menu">
            <Left/>
        </div>
      </div>
    </nav>
  );
};

/**
 * Branding
 */
const Brand = () => {
  return (
    <div className="navbar-brand">
      <div className="navbar-item">
        <div className="subtitle is-4">Erick House</div>
      </div>
    </div>
  );
};

/**
 * TODO fill with links
 */
const Left = () => {
  return (
    <div className="navbar-start">
      {/*<div className="navbar-item">Recent</div>*/}
      {/*<div className="navbar-item">Post</div>*/}
      {/*<div className="navbar-item">Project</div>*/}
      {/*<div className="navbar-item">Resume</div>*/}
    </div>
  );
};
