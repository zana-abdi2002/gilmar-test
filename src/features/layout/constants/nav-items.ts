type NavItem = {
  key: "home" | "suites" | "about" | "guide" | "magazine" | "contact";
  href: string;
};

export const navItems: NavItem[] = [
  { key: "home", href: "/" },
  { key: "suites", href: "/suites" },
  { key: "about", href: "/about" },
  { key: "guide", href: "/guest-guide" },
  { key: "magazine", href: "/magazine" },
  { key: "contact", href: "/contact" },
];
