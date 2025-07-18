interface LinkItem {
  label: string;
  href: string;
}

interface TitleItem {
  transition: string;
  static: string;
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
  title: TitleItem;
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
  reducedMotion?: boolean;
}

export interface DrawerProps {
  drawer: Drawer;
  isOpen: boolean;
  onToggle: () => void;
  sectionIndex?: number;
  drawerIndex?: number;
  reducedMotion?: boolean;
}

export interface SectionProps {
  section: Section;
  sectionRef: (el: HTMLElement | null) => void;
  sectionIndex?: number;
  reducedMotion?: boolean;
}
