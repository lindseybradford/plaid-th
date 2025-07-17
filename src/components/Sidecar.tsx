import { SidecarProps } from "@src/types";

export function Sidecar({ sections, activeSection }: SidecarProps) {
  const currentSection = sections[activeSection] || sections[0];
  const sectionNumber = (activeSection + 1).toString().padStart(2, "0");

  return (
    <aside className="sidecar half-column">
      <h2 className="sidecar-title">
        {currentSection?.title}
      </h2>
      <div className="sidecar-number" aria-hidden="true">
        {sectionNumber}
      </div>
    </aside>
  );
}