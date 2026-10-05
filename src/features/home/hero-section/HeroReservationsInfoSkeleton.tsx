import Skeleton from "@mui/material/Skeleton";
import { useTranslations } from "next-intl";

function HeroReservationsInfoSkeleton() {
  const t = useTranslations("HeroContent.HeroGallery");

  return (
    <div
      aria-busy="true"
      aria-label={t("reservationsLoadingLabel")}
      className="bg-navbar-ring shadow-hero-reservations flex h-12 w-fit max-w-full items-center gap-1.5 rounded-full py-2 ps-2 pe-3.5"
    >
      {/* Avatar skeletons */}
      <div aria-hidden="true" className="flex h-6.5 w-14 shrink-0 items-start">
        <Skeleton
          variant="circular"
          animation="wave"
          className="bg-foreground/15 size-6.5 shrink-0"
        />

        <Skeleton
          variant="circular"
          animation="wave"
          className="bg-foreground/15 border-navbar-ring -ms-2.75 size-6.5 shrink-0 border"
        />

        <Skeleton
          variant="circular"
          animation="wave"
          className="bg-foreground/15 border-navbar-ring -ms-2.75 size-6.5 shrink-0 border"
        />
      </div>

      {/* Reservation count skeleton */}
      <Skeleton
        aria-hidden="true"
        animation="wave"
        variant="rounded"
        className="bg-foreground/15 h-5 w-28 rounded-md"
      />

      <span className="sr-only">{t("reservationsLoadingLabel")}</span>
    </div>
  );
}

export default HeroReservationsInfoSkeleton;
