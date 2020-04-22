import React from "react";
import styles from "./Heading.module.scss";

/**
 * Pulls from the public folder
 */
const pdfPath = "/text.txt";
const pdfName = "cool.txt";

export const Heading = () => {
  return (
    <div className={styles.heading}>
      <div className="level">
        <div className="level-left">
          <h3 className="level-item title is-marginless">Resume</h3>
        </div>
        <div className="level-right">
          <a className="level-item button" href={pdfPath} download={pdfName}>
            <span className="icon is-small has-text-danger">
              <i className="far fa-file-pdf" />
            </span>
            <div>Download</div>
          </a>
        </div>
      </div>
    </div>
  );
};

