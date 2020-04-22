import cn from "classnames";
import styles from "./Banner.module.scss";
import React from "react";

const github = "https://github.com/erickhouse";
const linkedIn = "https://linkedin.com/in/erickhouse";

export const Banner = () => {
  return (
    <div className="">
      <div
        className={cn(
          styles.banner,
          "content",
          "is-small",
          "container",
          "has-text-dark",
          "is-family-monospace"
        )}
      >
        <Icon
          icon={"fas fa-sm fa-terminal"}
          text={"Senior Software Engineer"}
        />
        <Icon
          icon={"fas fa-lg fa-map-marker-alt"}
          text={"Greater Seattle Area"}
        />
        <Icon icon={"fas fa-lg fa-at"} text={"erickhouse01@gmail.com"} />
        <Link icon={"fab fa-lg fa-github-alt"} text={"Github"} href={github} />
        <Link
          icon={"fab fa-lg fa-linkedin"}
          text={"LinkedIn"}
          href={linkedIn}
        />
      </div>
    </div>
  );
};

const Icon = (props: { icon: string; text: string }) => {
  return (
    <div className={styles.icon}>
      <span className="icon is-medium has-text-primary">
        <i className={props.icon} />
      </span>
      <div>{props.text}</div>
    </div>
  );
};

const Link = (props: { icon: string; text: string; href: string }) => {
  return (
    <div className={styles.icon}>
      <span className="icon is-medium has-text-primary">
        <i className={props.icon} />
      </span>
      <a href={props.href} className="button is-text is-small is-paddingless">
        {props.text}
      </a>
    </div>
  );
};
