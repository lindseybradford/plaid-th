import { useState, useCallback } from "react";
import { Drawer } from "@src/components/Drawer";
import { SectionProps } from "@src/types";

interface ExtendedSectionProps extends SectionProps {
  sectionIndex: number;
  reducedMotion: boolean;
}

export function Section({
  section,
  sectionRef,
  sectionIndex,
  reducedMotion,
}: ExtendedSectionProps) {
  const [openDrawers, setOpenDrawers] = useState<Set<number>>(new Set());

  const toggleDrawer = useCallback((index: number) => {
    setOpenDrawers((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  }, []);

  const sectionId = `section-${sectionIndex}`;
  const sectionTitle = `${section.title.transition} ${section.title.static}`;

  return (
    <section
      ref={sectionRef}
      className="service-section"
      id={sectionId}
      aria-labelledby={`${sectionId}-heading`}
    >
      <h2 id={`${sectionId}-heading`} className="section-title">
        ({section.title.transition} {section.title.static} services)
      </h2>

      <div
        role="region"
        aria-label={`${sectionTitle} services`}
        className="accordion-group"
      >
        {section.drawers.map((drawer, index) => (
          <Drawer
            key={`${section.title.transition}-${index}`}
            drawer={drawer}
            isOpen={openDrawers.has(index)}
            onToggle={() => toggleDrawer(index)}
            sectionIndex={sectionIndex}
            drawerIndex={index}
            reducedMotion={reducedMotion}
          />
        ))}
      </div>
    </section>
  );
}
