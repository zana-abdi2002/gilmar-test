import { useTranslations } from "next-intl";
import Image from "next/image";
import HomeActionButton from "../../../general/components/HomeActionButton";
import AboutUsIcon from "../assets/about-us-icon.svg";

function AboutUsContent() {
  const t = useTranslations("AboutUs.Content");

  return (
    <div className="w-full max-w-155 gap-4">
      <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-start">
        {/* Decorative badge: artwork exported from Figma */}
        <div className="border-primary-soft bg-surface-primary ring-navbar-ring h-13 w-21 overflow-hidden rounded-full border ring-4">
          <Image
            src={AboutUsIcon}
            alt=""
            width={84}
            height={52}
            className="size-full"
          />
        </div>

        {/* Text */}
        <div className="mx-2 md:mx-0">
          <h2
            id="about-us-title"
            className="font-mid text-foreground text-xl leading-11 font-extrabold md:text-3xl md:leading-14"
          >
            {t("title")}
          </h2>
          <p className="font-mid text-muted-foreground text-justify text-xs leading-8 font-semibold md:text-sm">
            {t("description")}
          </p>
        </div>

        {/* Action */}
        <HomeActionButton
          href="/suites"
          label={t("actionLabel")}
          size="medium"
        />
      </div>
    </div>
  );
}

export default AboutUsContent;
