"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/features/general/shadcn/components/carousel";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import * as React from "react";
import BoatOnWater from "../assets/boat-on-water.webp";
import HouseInJungle from "../assets/house-in-jungle.webp";
import RidingBicycle from "../assets/man-riding-bicycle.webp";
import WatchingBirds from "../assets/woman-taking-photos-of-birds.webp";

export default function SlideScale() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  console.log("current :", current);
  const t = useTranslations("Services");

  const items = [
    { image: RidingBicycle, label: t("Carousel.ridingBicycle") },
    { image: BoatOnWater, label: t("Carousel.boat") },
    { image: WatchingBirds, label: t("Carousel.watchingBirds") },
    { image: HouseInJungle, label: t("Carousel.houseInJungle") },
    // repeated because this carousel
    // doesn't work properly on items < 5
    { image: BoatOnWater, label: t("Carousel.boat") },
  ];

  React.useEffect(() => {
    if (!api) {
      return;
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      className="w-full"
      opts={{ loop: true }}
      setApi={setApi}
      dir="ltr"
    >
      <CarouselContent className="ml-0 py-3">
        {items.map((item, index) => (
          <CarouselItem
            className={cn("h-86.5 w-[288px] pl-0 lg:basis-[33%]", {})}
            key={item.label + index}
          >
            <Image
              alt={item.label}
              className={cn(
                "size-full rounded-[20px] object-cover transition-transform",
                {
                  "scale-[0.6]": index !== current - 1,
                },
              )}
              src={item.image}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="border-background bg-primary-gradient absolute left-[5%] size-11.5 border-3 opacity-50 hover:opacity-100 lg:hidden lg:opacity-100" />

      <CarouselNext className="border-background bg-primary-gradient absolute right-[5%] size-11.5 border-3 opacity-50 hover:opacity-100 lg:opacity-100" />
    </Carousel>
  );
}
