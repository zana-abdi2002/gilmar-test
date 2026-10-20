import { useTranslations } from "next-intl";
import Image from "next/image";
import HeaderIcon from "../assets/packages-section-header-icon.svg";

function PackagesSectionHeader() {
  const t = useTranslations("Packages");

  return (
    <div className="flex flex-col items-start gap-8">
      {/* icon */}
      <Image
        src={HeaderIcon}
        alt=""
        className="w-[clamp(64px,5.83vw,84px)] object-fill"
      />

      {/* title and description */}
      <div className="flex flex-col gap-5">
        <h2 className="text-[2rem] font-extrabold">{t("title")}</h2>
        <p className="text-muted-foreground text-[0.875rem] font-semibold">
          {t("description")}
        </p>
      </div>
    </div>
  );
}

export default PackagesSectionHeader;
