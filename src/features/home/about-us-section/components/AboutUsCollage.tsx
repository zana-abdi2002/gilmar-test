import { useTranslations } from "next-intl";
import Image from "next/image";
import AboutUseCollageImg from "../assets/about-us-collage.webp";
import FloatingInfoPill from "./FloatingInfoPill";

function AboutUsCollage() {
  const t = useTranslations("AboutUs.Collage");

  return (
    <figure
      className="@container relative mx-auto aspect-[582/649] w-full max-w-[582px]"
      aria-labelledby="about-us-collage-caption"
    >
      {/* Design width 582px, base font 14px = 2.4055cqw; inner sizes in em */}
      <Image
        src={AboutUseCollageImg}
        alt={t("imageAlt")}
        fill
        priority
        sizes="(min-width: 582px) 582px, calc(100vw - 2rem)"
        className="object-contain"
      />

      {/* Physical positions preserve the unmirrored image composition in RTL. */}
      <figcaption
        id="about-us-collage-caption"
        className="absolute end-[3.2646%] top-[19.7226%] aspect-[244/72] w-[41.9244%]"
      >
        <FloatingInfoPill label={t("resortName")} icon={null} />
      </figcaption>

      <div className="absolute end-[42.7835%] top-[63.1741%] aspect-[249/72] w-[42.7835%]">
        <FloatingInfoPill label={t("natureCaption")} icon={null} />
      </div>
    </figure>
  );
}

export default AboutUsCollage;
