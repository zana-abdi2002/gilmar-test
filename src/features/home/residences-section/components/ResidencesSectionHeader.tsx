import { useTranslations } from "next-intl";
import Image from "next/image";
import ResidencesHeaderIcon from "../assets/residences-section-header-icon.svg";

function ResidencesSectionHeader() {
  const t = useTranslations("ResidenceTypes");

  return (
    <header className="flex flex-col items-center gap-8">
      {/* Icon */}
      <Image src={ResidencesHeaderIcon} alt="" />

      {/* title and description */}
      <div className="flex flex-col gap-5 text-center">
        <h2 id="residences-heading" className="text-[2rem] font-extrabold">
          {t("title")}
        </h2>
        <p className="text-muted-foreground text-[0.875rem] font-semibold">
          {t("description")}
        </p>
      </div>
    </header>
  );
}

export default ResidencesSectionHeader;
