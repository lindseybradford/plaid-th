import { DrawerProps } from "@src/types";

export function Drawer({ drawer, isOpen, onToggle }: DrawerProps) {
  const iconTransform = isOpen ? "rotate(45deg)" : "rotate(0deg)";
  const contentHeight = isOpen ? "max-h-96 pb-6" : "max-h-0";

  return (
    <div className="accordion-item">
      <button
        onClick={onToggle}
        className="accordion-trigger"
        aria-expanded={isOpen}
        aria-controls={`drawer-${drawer.title}`}
      >
        <h3 className="accordion-title">{drawer.title}</h3>
        <div className="accordion-icon" aria-hidden="true">
          <span
            className="accordion-icon-text"
            style={{ transform: iconTransform }}
          >
            +
          </span>
        </div>
      </button>
      <div
        id={`drawer-${drawer.title}`}
        className={`accordion-content ${contentHeight}`}
        role="region"
        aria-labelledby={`drawer-${drawer.title}`}
      >
        <div className="accordion-panel">
          <p className="accordion-description">{drawer.description}</p>
        </div>
      </div>
    </div>
  );
}