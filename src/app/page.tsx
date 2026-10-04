import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");

  return <div className="font-high font-semibold">{t("title")}</div>;
}
