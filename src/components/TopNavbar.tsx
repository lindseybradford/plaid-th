import Link from "next/link";
import { TopNavbarProps } from "@src/types";

export function TopNavbar({ content }: TopNavbarProps) {
  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-content parent-container">
        <div className="brand-link group">
          <div
            className="brand-indicator"
            aria-hidden="true"
            role="presentation"
          />
          <Link
            href="/"
            className="brand-text"
            aria-label={`${content.label} - Go to homepage`}
          >
            <span aria-hidden="true">{content.label}</span>
            <span className="sr-only">Homepage</span>
          </Link>
        </div>

        <ul className="nav-links" role="list" aria-label="Navigation links">
          {content.linkList.map((link, index) => (
            <li key={index} role="listitem">
              <Link
                href={link.href}
                className="nav-link"
                aria-label={
                  link.href.startsWith("mailto:")
                    ? `Send email: ${link.label}`
                    : link.label
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
