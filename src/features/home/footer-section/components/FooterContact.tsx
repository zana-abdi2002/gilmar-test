import { useFormatter, useTranslations } from "next-intl";

function FooterContact() {
  const t = useTranslations("Footer.FooterContact");
  const format = useFormatter();

  return (
    <div className="flex flex-col items-start gap-2">
      {/* header */}
      <h2 className="text-[1rem] font-extrabold">{t("title")}</h2>

      {/* list of contacts */}
      <ul className="text-muted-foreground text-[0.875rem] font-semibold">
        <li>
          {t("items.phone")}: {format.number(0o1334775400)} -{" "}
          {format.number(0o1334775411)}
        </li>
        <li>{t("items.email")}: Info@Gilmar-Gilan.com</li>
        <li>{t("items.locationOfGilmar")}</li>
      </ul>
    </div>
  );
}

export default FooterContact;
