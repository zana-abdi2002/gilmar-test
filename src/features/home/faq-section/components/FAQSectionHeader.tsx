import { useTranslations } from "next-intl";
import Image from "next/image";
import BackgroundIcon from "../assets/faq-section-background-icon.svg";
import FAQImage from "../assets/faq-section-image.svg";

function FAQSectionHeader() {
  const t = useTranslations("FAQ");

  return (
    <div className="flex max-w-155 flex-col items-start justify-between gap-8">
      {/* icon */}
      <Image
        src={BackgroundIcon}
        alt=""
        className="w-[clamp(50px,5.83vw,83px)]"
      />

      {/* title and description */}
      <div className="flex flex-col items-start justify-between gap-5">
        <h2 className="text-[2rem] font-extrabold">{t("title")}</h2>
        <p className="text-muted-foreground text-[0.875rem] font-semibold">
          {t("description")}
        </p>
      </div>

      {/* image */}
      <div className="relative mx-auto aspect-420/382 w-[67.74%]">
        <Image src={FAQImage} alt="" fill className="object-cover" />
      </div>
    </div>
  );
}

export default FAQSectionHeader;
