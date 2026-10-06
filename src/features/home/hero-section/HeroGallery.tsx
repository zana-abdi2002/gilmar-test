import { useTranslations } from "next-intl";
import Image from "next/image";

import { Suspense } from "react";
import heroGalleryImage from "./assets/hero-gallery.webp";
import HeroReservationsInfo from "./HeroReservationsInfo";
import HeroReservationsInfoSkeleton from "./HeroReservationsInfoSkeleton";

function HeroGallery() {
  const t = useTranslations("HeroContent.HeroGallery");

  return (
    <figure className="group relative isolate mx-auto w-full max-w-7xl max-xl:px-5 max-sm:px-2">
      {/* Blurred glow background matching cut-out geometry */}
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

      {/* Main hero cut-out image */}
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

      {/* Right cutout slot */}
      <aside
        aria-label={t("natureCaption")}
        className="pointer-events-auto absolute inset-s-0 bottom-0 z-10 mb-5 hidden w-60 items-center justify-center rounded-4xl ps-8 lg:flex"
      >
        <p className="w-62.75 text-start text-[14px] leading-8 font-semibold text-[#1A1A1A]">
          {t("natureCaption")}
        </p>
      </aside>

      {/* Left cutout slot */}
      <aside
        aria-label="تعداد رزرو موفق"
        className="pointer-events-auto absolute inset-e-0 bottom-0 z-10 me-3 hidden h-20.5 w-50 items-center justify-start overflow-hidden rounded-4xl ps-5 pt-5 max-lg:inset-s-0 max-lg:ms-1 min-[840px]:block"
      >
        <Suspense fallback={<HeroReservationsInfoSkeleton />}>
          <HeroReservationsInfo />
        </Suspense>
      </aside>
    </figure>
  );
}

export default HeroGallery;
