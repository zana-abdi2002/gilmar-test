import { cacheLife } from "next/cache";

type ReservationInfo = {
  reservationCount: number;
  avatarImages: {
    src: string;
  }[];
};

export async function getHeroReservationInfo(): Promise<ReservationInfo> {
  "use cache";
  cacheLife("weeks");

  return {
    reservationCount: 1700,
    avatarImages: [
      { src: "/images/reviewer-1.png" },
      { src: "/images/reviewer-2.png" },
      { src: "/images/reviewer-3.png" },
    ],
  };
}
