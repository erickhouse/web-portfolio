import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import { NavBar } from "./components/NavBar";
import { Heading } from "./components/Heading";
import { SideNav } from "./components/SideNav";
import { Skills } from "./components/Skills";
import { Banner } from "./components/Banner";
import { Content } from "./components/content/Content";
import { Resume, resume, Section } from "./models/resume";
import cn from "classnames";
import styles from "./App.module.scss";

function getNavSections(resume: Resume): string[] {
  return Object.keys(resume).filter((section) => section !== "skills");
}

function App() {
  const sections = getNavSections(resume);
  const [state, setSection] = useState({ active: sections[0] });

  return (
    <div>
      <div>
        <NavBar />
        <Banner />
      </div>
      <div className={cn("container")}>
        <Heading />
        <div className={cn("columns")}>
          <div className={cn("column", "is-2")}>
            <div className={styles.sticky}>
              <SideNav
                sections={sections}
                active={state.active}
                setSection={setSection}
              />
            </div>
          </div>
          <div className={cn("is-8", "column")}>
            <Content
              resume={resume}
              active={state.active}
              setSection={setSection}
            />
          </div>
          <div className={cn("column", "is-2")}>
            <div className={styles.sticky}>
              <Skills resume={resume}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
