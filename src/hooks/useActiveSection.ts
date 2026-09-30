import { useEffect, useState } from "react";

const useActiveSection = (sectionIds: string[], defaultSection = "home") => {
  const [activeSection, setActiveSection] = useState(defaultSection);

  useEffect(() => {
    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (firstEntry, secondEntry) =>
              secondEntry.intersectionRatio - firstEntry.intersectionRatio,
          );

        const mostVisibleSection = visibleSections[0];

        if (mostVisibleSection?.target.id) {
          setActiveSection(mostVisibleSection.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0.05, 0.15, 0.3, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, [sectionIds]);

  return activeSection;
};

export default useActiveSection;
