import { useState, useCallback } from "react";
import { Drawer } from "@src/components/Drawer";
import { SectionProps } from "@src/types";

export function Section({ section, sectionRef }: SectionProps) {
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

  return (
    <section ref={sectionRef} className="service-section">
      {section.title && (
        <h2 className="section-title">({section.title} services)</h2>
      )}
      <div role="group" aria-label={`${section.title} services`}>
        {section.drawers.map((drawer, index) => (
          <Drawer
            key={`${section.title}-${index}`}
            drawer={drawer}
            isOpen={openDrawers.has(index)}
            onToggle={() => toggleDrawer(index)}
          />
        ))}
      </div>
    </section>
  );
}