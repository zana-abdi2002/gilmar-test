type NavItem = {
  key: "home" | "suites" | "about" | "guide" | "magazine" | "contact";
  href: string;
  // Essential links stay visible on medium screens, the rest move into the "More" menu
  essential: boolean;
};

export const navItems: NavItem[] = [
  { key: "home", href: "/", essential: true },
  { key: "suites", href: "/suites", essential: true },
  { key: "about", href: "/about", essential: false },
  { key: "guide", href: "/guest-guide", essential: false },
  { key: "magazine", href: "/magazine", essential: false },
  { key: "contact", href: "/contact", essential: true },
];
