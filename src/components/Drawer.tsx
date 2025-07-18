import { useEffect, useRef } from "react";
import { DrawerProps } from "@src/types";

interface ExtendedDrawerProps extends DrawerProps {
  sectionIndex: number;
  drawerIndex: number;
  reducedMotion: boolean;
}

export function Drawer({
  drawer,
  isOpen,
  onToggle,
  sectionIndex,
  drawerIndex,
  reducedMotion,
}: ExtendedDrawerProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const drawerId = `drawer-${sectionIndex}-${drawerIndex}`;
  const buttonId = `${drawerId}-button`;

  const iconTransform = isOpen ? "rotate(45deg)" : "rotate(0deg)";
  const contentHeight = isOpen ? "max-h-96 pb-6" : "max-h-0";

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onToggle();
    }
  };
  return (
    <div className="accordion-item">
      <h3>
        <button
          ref={buttonRef}
          id={buttonId}
          onClick={onToggle}
          onKeyDown={handleKeyDown}
          className="accordion-trigger"
          aria-expanded={isOpen}
          aria-controls={drawerId}
          aria-describedby={`${drawerId}-description`}
          type="button"
        >
          <span className="accordion-title">{drawer.title}</span>
          <span
            className="accordion-icon"
            aria-hidden="true"
            role="presentation"
          >
            <span
              className={`accordion-icon-text ${reducedMotion ? "no-animation" : ""}`}
              style={{ transform: iconTransform }}
            >
              +
            </span>
          </span>
          <span className="sr-only">
            {isOpen ? "Collapse" : "Expand"} {drawer.title}
          </span>
        </button>
      </h3>

      <div
        id={drawerId}
        className={`accordion-content ${contentHeight} ${reducedMotion ? "no-animation" : ""}`}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className="accordion-panel">
          <p id={`${drawerId}-description`} className="accordion-description">
            {drawer.description}
          </p>
        </div>
      </div>
    </div>
  );
}
