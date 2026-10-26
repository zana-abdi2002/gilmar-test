import { useTranslations } from "next-intl";
import Link from "next/link";

function FooterLinkGroup() {
  const t = useTranslations("Footer.FooterLinkGroup");

  return (
    <div className="flex flex-col items-start gap-2">
      {/* header */}
      <h2 className="text-[1rem] font-extrabold">{t("title")}</h2>

      {/* links list */}
      <ul className="list-disc ps-5">
        <li>
          <Link href="/about" aria-label={t("items.about")}>
            {t("items.about")}
          </Link>
        </li>
        <li>
          <Link href="/guide" aria-label={t("items.guide")}>
            {t("items.guide")}
          </Link>
        </li>
        <li>
          <Link href="/magazine" aria-label={t("items.magazine")}>
            {t("items.magazine")}
          </Link>
        </li>
        <li>
          <Link href="/suites" aria-label={t("items.suites")}>
            {t("items.suites")}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default FooterLinkGroup;
