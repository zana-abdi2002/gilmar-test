import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./components/mobile-menu";
import NavLink from "./components/nav-link";
import { UserIcon } from "./components/navbar-icons";
import { navItems } from "./constants/nav-items";

function HomeNavbar() {
  const t = useTranslations("Navbar");

  return (
    <header className="border-navbar-border bg-navbar-surface ring-navbar-ring mx-auto w-full max-w-7xl rounded-full border p-1.5 ring-6">
      <div className="flex min-h-13 items-center justify-between gap-3">
        {/* Logo */}
        <Link
          href="/"
          aria-label={t("brandLink")}
          className="focus-ring shrink-0 rounded-full"
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
        <nav aria-label={t("primaryNavigation")} className="hidden lg:block">
          <ul className="flex items-center gap-5 xl:gap-10">
            {navItems.map(({ key, href }) => (
              <li key={key}>
                <NavLink href={href} variant="desktop">
                  {t(key)}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/login"
            className="bg-primary-gradient font-high text-navbar-on-gradient focus-visible:outline-foreground inline-flex min-h-13 items-center gap-2 rounded-full px-4 text-sm font-extrabold transition-[filter,transform] duration-200 hover:-translate-y-0.5 hover:brightness-90 focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transform-none motion-reduce:transition-none"
          >
            {t("login")}
            <UserIcon className="size-5.5 shrink-0" />
          </Link>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

export default HomeNavbar;
