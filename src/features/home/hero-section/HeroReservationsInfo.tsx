import Tooltip from "@mui/material/Tooltip";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { getHeroReservationInfo } from "./lib/getHeroReservationInfo";

async function HeroReservationsInfo() {
  const t = await getTranslations("HeroContent.HeroGallery");

  const reservationsInfo = await getHeroReservationInfo();

  return (
    <Tooltip title="تعداد رزرو موفق" placement="top" arrow>
      <div className="bg-navbar-ring shadow-hero-reservations flex h-12 w-fit max-w-full items-center gap-1.5 rounded-full py-2 ps-2 pe-3.5">
        {/* Avatars */}
        <div className="flex h-6.5 w-14 shrink-0 items-start">
          {reservationsInfo.avatarImages.map((img, index) => (
            <Image
              key={img.src}
              src={img.src}
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
          {t("reservationsPlaceholder", {
            count: reservationsInfo.reservationCount,
          })}
        </span>
      </div>
    </Tooltip>
  );
}

export default HeroReservationsInfo;
