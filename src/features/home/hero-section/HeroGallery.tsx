import { useTranslations } from "next-intl";
import Image from "next/image";
import heroGalleryImage from "./assets/hero-gallery.webp";

function HeroGallery() {
  const t = useTranslations("HeroContent.HeroGallery");

  return (
    <figure className="group relative isolate mx-auto w-full max-w-7xl overflow-hidden max-xl:px-5 max-sm:px-2">
      {/* The glow follows the colors and silhouette of the cut image. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-8 top-12 bottom-16 -z-10 opacity-65 blur-3xl transition-[transform,opacity,filter] duration-1000 ease-out group-hover:scale-105 group-hover:opacity-85 group-hover:blur-[52px] motion-reduce:transition-none motion-reduce:group-hover:scale-100 sm:inset-x-10 sm:top-16 sm:bottom-20 lg:inset-x-4"
      >
        <Image
          src={heroGalleryImage}
          alt=""
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-contain"
        />
      </div>

      <div className="relative transition-transform duration-1000 ease-out group-hover:scale-[1.015] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
        <Image
          src={heroGalleryImage}
          alt={t("imageAlt")}
          width={1280}
          height={581}
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="h-auto w-full drop-shadow-[0_18px_22px_var(--hero-gallery-shadow)] transition-[filter] duration-1000 ease-out group-hover:drop-shadow-[0_26px_34px_var(--hero-gallery-shadow-hover)] motion-reduce:transition-none"
        />
      </div>

      <div className="relative z-10 -mt-8 flex min-h-8 justify-start sm:-mt-12 sm:min-h-12 lg:-mt-16 lg:min-h-16">
        {/* Mount HeroReservationsInfo here when it is ready. */}
      </div>
    </figure>
  );
}

export default HeroGallery;
