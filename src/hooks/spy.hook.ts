import { useState, useEffect } from "react";
import throttle from "lodash/fp/throttle";

export interface Spy {
  activeSectionDefault: number;
  offsetPx: number;
  sectionElementRefs: any[];
  throttleMs: number;
}

export const useSpy = ({
  activeSectionDefault,
  offsetPx,
  sectionElementRefs,
  throttleMs,
}: Spy) => {
  const [activeSection, setActiveSection] = useState(activeSectionDefault);

  const handle = throttle(throttleMs, () => {
    let currentSectionId = activeSection;
    for (let i = 0; i < sectionElementRefs.length; i++) {
      const section = sectionElementRefs[i].current;
      if (!section || !(section instanceof Element)) continue;

      const top = section.getBoundingClientRect().top + offsetPx;
      //console.log(top);
      //console.log(section.id);
      if (top < 0) {
        console.log(section.id);
        currentSectionId = i;
        continue;
      }

      break;
    }

    setActiveSection(currentSectionId);
  });

  useEffect(() => {
    window.addEventListener("scroll", handle);

    return () => {
      window.removeEventListener("scroll", handle);
    };
  }, [sectionElementRefs, offsetPx]);
  return activeSection;
};
