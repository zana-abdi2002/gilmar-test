import Tooltip from "@mui/material/Tooltip";
import { useTranslations } from "next-intl";
import Image from "next/image";

const AVATAR_IMAGES = [
  "/images/hero-reservations-avatar-1.webp",
  "/images/hero-reservations-avatar-2.webp",
  "/images/hero-reservations-avatar-3.webp",
] as const;

function HeroReservationsInfo() {
  const t = useTranslations("HeroContent.HeroGallery");

  return (
    <Tooltip title={t("reservationsPlaceholder")} placement="top" arrow>
      <div className="bg-navbar-ring shadow-hero-reservations flex h-12 w-fit max-w-full items-center gap-1.5 rounded-full py-2 ps-2 pe-3.5">
        {/* Avatars */}
        <div className="flex h-6.5 w-14 shrink-0 items-start">
          {AVATAR_IMAGES.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt=""
              width={26}
              height={26}
              className={`border-navbar-ring size-6.5 shrink-0 rounded-full border object-cover ${
                index > 0 ? "-ms-2.75" : ""
              }`}
            />
          ))}
        </div>

        {/* Reservation count */}
        <span className="font-mid text-foreground flex h-8 items-center justify-center text-center text-sm leading-8 font-semibold">
          {t("reservationsPlaceholder")}
        </span>
      </div>
    </Tooltip>
  );
}

export default HeroReservationsInfo;
