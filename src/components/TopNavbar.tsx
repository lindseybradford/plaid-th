import Link from "next/link";
import { TopNavbarProps } from "@src/types";

export function TopNavbar({ content }: TopNavbarProps) {
  return (
    <nav className="navbar">
      <div className="navbar-content parent-container">
        <h1 className="brand-link group">
          <div className="brand-indicator" />
          <Link href="/" className="brand-text">
            {content.label}
          </Link>
        </h1>
        <ul className="nav-links">
          {content.linkList.map((link, index) => (
            <li key={index}>
              <Link href={link.href} className="nav-link">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}