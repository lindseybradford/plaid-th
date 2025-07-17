// types.ts
export interface LinkItem {
  label: string;
  href: string;
}

export interface TopNavbarContent {
  label: string;
  linkList: LinkItem[];
}

export interface Drawer {
  title: string;
  description: string;
}

export interface Section {
  title: string;
  drawers: Drawer[];
}

export interface PageContent {
  topNavbar: TopNavbarContent;
  sections: Section[];
}

export interface TopNavbarProps {
  content: TopNavbarContent;
}

export interface SidecarProps {
  sections: Section[];
  activeSection: number;
}

export interface DrawerProps {
  drawer: Drawer;
  isOpen: boolean;
  onToggle: () => void;
}

export interface SectionProps {
  section: Section;
  sectionRef: (el: HTMLElement | null) => void;
}
