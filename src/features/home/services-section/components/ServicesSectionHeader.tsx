import { useTranslations } from "next-intl";
import Image from "next/image";
import ServicesSectionIcon from "../assets/services-section-header-icon.svg";

function ServicesSectionHeader() {
  const t = useTranslations("Services");

  return (
    <div className="flex flex-col items-center justify-center gap-5 text-center lg:items-start lg:gap-10 lg:text-start">
      {/* icon */}
      <Image src={ServicesSectionIcon} alt="" aria-hidden="true" />

      <div className="flex flex-col gap-2.5 lg:gap-5">
        <h2
          id="services-section-title"
          className="text-[2rem] leading-12 font-extrabold lg:leading-8"
        >
          {t("title")}
        </h2>
        <p className="text-[0.875rem] font-semibold">{t("description")}</p>
      </div>
    </div>
  );
}

export default ServicesSectionHeader;
