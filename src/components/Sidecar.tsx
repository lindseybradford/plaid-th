import { SidecarProps } from "@src/types";

export function Sidecar({ sections, activeSection }: SidecarProps) {
  const currentSection = sections[activeSection] || sections[0];

  const transformValue = `${activeSection * -100}%`;

  const wrapCharacters = (text: string) =>
    text.split("").map((char, index) => (
      <span
        key={`${char}-${index}`}
        style={{ transitionDelay: `${index * 0.05}s` }}
        className="animation-char"
      >
        {char}
      </span>
    ));

  return (
    <aside
      className={`sidecar half-column`}
      style={{ "--section-transform": transformValue } as React.CSSProperties}
    >
      <h2 className="sidecar-title">
        <div className="animation-frame">
          {sections.map((section, index) => (
            <div key={`title-char-${index}`} className="animation-word">
              {wrapCharacters(section.title.transition)}
            </div>
          ))}
        </div>
        <span>{currentSection?.title.static}</span>
      </h2>
      <div className="sidecar-number" aria-hidden="true">
        <div className="animation-frame">
          {sections.map((_section, index) => (
            <div key={`counter-char-${index}`} className="animation-word">
              {wrapCharacters((index + 1).toString().padStart(2, "0"))}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
