import HomeActionButton from "@/features/general/components/HomeActionButton";
import { useTranslations } from "next-intl";
import Image from "next/image";
import HeaderIcon from "../assets/video-section-header-icon.svg";

function VideoSectionHeader() {
  const t = useTranslations("VideoSection");

  return (
    <div className="absolute inset-s-0 top-[40%] z-100 max-w-[47%] flex-col gap-5">
      {/* Icon */}

      <Image src={HeaderIcon} alt="" className="hidden w-[15.54%] md:block" />

      {/* title and description */}
      <div className="flex flex-col gap-5">
        <h2 className="text-start text-[1rem] leading-10 font-extrabold sm:text-[1.5rem] md:text-[2rem]">
          {t("title")}
        </h2>
        <p className="text-muted-foreground hidden text-start text-[0.875rem] font-semibold lg:block">
          {t("description")}
        </p>
      </div>

      {/* action button */}
      <HomeActionButton
        href="/suites"
        label={t("actionLabel")}
        size="medium"
        className="hidden sm:flex"
      />
    </div>
  );
}

export default VideoSectionHeader;
