import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useTranslations } from "next-intl";
import Link from "next/link";

function HeroActionButton() {
  const t = useTranslations("HeroContent.HeroAction");

  return (
    <Link
      href="/suites"
      className="group bg-primary-gradient font-mid text-navbar-on-gradient focus-visible:outline-foreground flex min-h-13 w-fit items-center gap-4 rounded-full p-1.5 text-base leading-7.25 font-extrabold shadow-xs transition-transform duration-200 ease-out hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 active:scale-95 motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:active:scale-100"
    >
      {/* Label */}
      <span className="ps-2">{t("label")}</span>

      {/* Arrow */}
      <span className="bg-background text-primary-start flex size-10 shrink-0 items-center justify-center rounded-full">
        <ArrowBackIcon aria-hidden="true" className="ltr:-scale-x-100" />
      </span>
    </Link>
  );
}

export default HeroActionButton;
