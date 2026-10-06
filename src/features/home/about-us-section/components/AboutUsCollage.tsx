import { useTranslations } from "next-intl";
import Image from "next/image";
import AboutUseCollageImg from "../assets/about-us-collage.webp";
import FloatingInfoPill from "./FloatingInfoPill";

function AboutUsCollage() {
  const t = useTranslations("AboutUs.Collage");

  return (
    <figure
      className="dir-ltr relative mx-auto aspect-[582/649] w-full max-w-[582px]"
      aria-labelledby="about-us-collage-caption"
    >
      <Image
        src={AboutUseCollageImg}
        alt={t("imageAlt")}
        fill
        priority
        sizes="(min-width: 640px) 582px, calc(100vw - 2rem)"
        className="object-contain"
      />

      {/* Resort information pill */}
      <figcaption
        id="about-us-collage-caption"
        className="absolute end-[3.2646%] top-[19.7226%] [aspect-ratio:244/72] w-[41.9244%] max-w-[244px]"
      >
        <FloatingInfoPill
          label={t("resortName")}
          icon={null}
          className="h-full max-w-none"
        />
      </figcaption>

      {/* Nature information pill */}
      <div className="absolute end-[42.7835%] top-[63.1741%] [aspect-ratio:249/72] w-[42.7835%] max-w-[249px]">
        <FloatingInfoPill
          label={t("natureCaption")}
          icon={null}
          className="h-full max-w-none"
        />
      </div>
    </figure>
  );
}

export default AboutUsCollage;
