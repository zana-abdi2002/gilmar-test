import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./components/MobileMenu";
import MoreMenu from "./components/MoreMenu";
import NavLink from "./components/NavLink";
import { UserIcon } from "./components/NavbarIcons";
import { navItems } from "./constants/nav-items";

function HomeNavbar() {
  const t = useTranslations("Navbar");

  return (
    <header className="border-navbar-border bg-navbar-surface ring-navbar-ring mx-auto w-full max-w-7xl rounded-full border p-1.5 ring-6">
      {/* Grid below 830px keeps the logo centered; flex from 830px up */}
      <div className="grid min-h-13 grid-cols-[1fr_auto_1fr] items-center gap-3 min-[830px]:flex min-[830px]:justify-between">
        {/* Menu button (mobile only) */}
        <div className="justify-self-start min-[830px]:hidden">
          <MobileMenu />
        </div>

        {/* Logo */}
        <Link
          href="/"
          aria-label={t("brandLink")}
          className="focus-ring shrink-0 justify-self-center rounded-full"
        >
          <Image
            src="/images/gilmar-logo.svg"
            alt={t("brandAlt")}
            width={169}
            height={53}
            priority
            className="h-auto w-28 sm:w-36 xl:w-42.25"
          />
        </Link>

        {/* Links */}
        <nav
          aria-label={t("primaryNavigation")}
          className="hidden min-[830px]:block"
        >
          <ul className="flex items-center gap-1 min-[900px]:gap-3 lg:gap-5 xl:gap-10">
            {navItems.map(({ key, href, essential }) => (
              <li
                key={key}
                className={essential ? undefined : "hidden lg:block"}
              >
                <NavLink href={href} variant="desktop">
                  {t(key)}
                </NavLink>
              </li>
            ))}

            {/* Holds the hidden links until all of them fit */}
            <li className="lg:hidden">
              <MoreMenu />
            </li>
          </ul>
        </nav>

        {/* Login */}
        <div className="shrink-0 justify-self-end">
          <Link
            href="/login"
            className="bg-primary-gradient font-high text-navbar-on-gradient focus-visible:outline-foreground inline-flex min-h-13 min-w-13 items-center justify-center gap-2 rounded-full px-0 text-sm font-extrabold transition-[filter,transform] duration-200 hover:-translate-y-0.5 hover:brightness-90 focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transform-none motion-reduce:transition-none sm:px-4"
          >
            <UserIcon className="size-7 shrink-0" />
            {/* Icon only on phones, the text stays available to screen readers */}
            <span className="sr-only sm:not-sr-only">{t("login")}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default HomeNavbar;
