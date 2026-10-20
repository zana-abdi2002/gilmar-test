import { useTranslations } from "next-intl";

function RomanticPackage() {
  const t = useTranslations("Packages.Romantic");

  return (
    <div className="flex flex-col gap-6">
      {/* title and description */}
      <div className="text-start">
        <h3 className="text-[1rem] font-extrabold">{t("title")}</h3>
        <p className="text-[0.875rem] font-semibold">{t("description")}</p>
      </div>

      {/* package items */}
      <div></div>

      {/* line */}
      <div></div>

      {/* price and action */}
      <div className="flex justify-between">
        <p></p>
        <div></div>
      </div>
    </div>
  );
}

export default RomanticPackage;
