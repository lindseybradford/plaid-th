import { useEffect, useState, useRef, useCallback } from "react";
import type { PageContent } from "@src/types";
import { TopNavbar } from "@src/components/TopNavbar";
import { Section } from "@src/components/Section";
import { Sidecar } from "@src/components/Sidecar";

const pageContent: PageContent = {
  topNavbar: {
    label: "Our services",
    linkList: [
      {
        label: "Let's work together",
        href: "mailto:lindsey.l.bradford@gmail.com",
      },
    ],
  },
  sections: [
    {
      title: {
        transition: `Front`,
        static: `End`,
      },
      drawers: [
        {
          title: "Interactive experiences",
          description:
            "Custom interactive web experiences using Three.js, WebGL, and creative coding techniques to create memorable digital moments.",
        },
        {
          title: "Data visualization",
          description:
            "Transform complex data into compelling visual stories using D3.js, Chart.js, and custom visualization libraries.",
        },
        {
          title: "Experimental interfaces",
          description:
            "Push the boundaries of web interaction with experimental UI patterns, gesture controls, and immersive user experiences.",
        },
        {
          title: "Creative coding",
          description:
            "Generative art, procedural animations, and algorithmic design systems that bring digital experiences to life.",
        },
        {
          title: "Animation",
          description:
            "CSS animations and transitions, JavaScript animations, SVG animations, and Web Animations API.",
        },
        {
          title: "Performance optimization",
          description:
            "CSS animations and transitions, JavaScript animations, SVG animations, and Web Animations API.",
        },
        {
          title: "Landing Pages optimization",
          description:
            "CSS animations and transitions, JavaScript animations, SVG animations, and Web Animations API.",
        },
      ],
    },
    {
      title: {
        transition: `Back`,
        static: `End`,
      },
      drawers: [
        {
          title: "Back end structures",
          description:
            "Server architecture, API design, database optimization, and scalable backend solutions.",
        },
        {
          title: "Content management systems",
          description:
            "Headless CMS integration, custom content solutions, and dynamic content delivery.",
        },
        {
          title: "User authentication",
          description:
            "Secure authentication systems, OAuth integration, and user management solutions.",
        },
        {
          title: "Remote updating",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a odio eget massa semper rutrum nec eget neque. Vivamus in dolor sodales consectetur adipiscing elit.",
        },
        {
          title: "Cloud storage",
          description:
            "Scalable cloud storage solutions, file management systems, and data backup strategies.",
        },
        {
          title: "Hosting",
          description:
            "Reliable hosting solutions, server management, and deployment optimization.",
        },
      ],
    },
  ],
};

const INTERSECTION_OPTIONS = {
  root: null,
  rootMargin: "-20% 0px -20% 0px",
  threshold: 0.5,
};

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const sectionRefs = useRef<(HTMLElement | null)[]>(
    Array(pageContent.sections.length).fill(null),
  );

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionIndex = sectionRefs.current.findIndex(
            (ref) => ref === entry.target,
          );
          if (sectionIndex !== -1) {
            setActiveSection(sectionIndex);
          }
        }
      });
    },
    [],
  );

  const setSectionRef = useCallback(
    (index: number) => (el: HTMLElement | null) => {
      sectionRefs.current[index] = el;
    },
    [],
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      handleIntersection,
      INTERSECTION_OPTIONS,
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [handleIntersection]);

  const handleSkipToMain = () => {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.focus();
    }
  };

  return (
    <div className={`font-sans ${reducedMotion ? "reduced-motion" : ""}`}>
      <a href="#main-content" className="skip-link" onClick={handleSkipToMain}>
        Skip to main content
      </a>

      <h1 className="sr-only">
        Our Services - Front End and Back End Development
      </h1>

      <TopNavbar content={pageContent.topNavbar} />

      <div className="parent-container">
        <div className="parent-grid">
          <Sidecar
            sections={pageContent.sections}
            activeSection={activeSection}
            reducedMotion={reducedMotion}
          />

          <main
            id="main-content"
            className="half-column pb-24"
            role="main"
            aria-label="Services content"
            tabIndex={-1}
          >
            {pageContent.sections.map((section, index) => (
              <Section
                key={`section-${index}`}
                section={section}
                sectionRef={setSectionRef(index)}
                sectionIndex={index}
                reducedMotion={reducedMotion}
              />
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
