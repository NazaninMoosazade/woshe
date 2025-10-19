export interface NavbarLink {
  id: string;
  name: string;
  href: string;
  order?: number;
  isActive?: boolean;
}

export interface NavbarData {
  links: NavbarLink[];
}
