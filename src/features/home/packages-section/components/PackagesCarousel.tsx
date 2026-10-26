"use client";

import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/features/general/components/shadcn/components/carousel";
import { cn } from "cn";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { PackageCarouselItem } from "../types";

type Props = {
  items: PackageCarouselItem[];
};

export default function PackagesCarousel({ items }: Props) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative isolate min-w-0 flex-[0.7] **:px-0">
      <Carousel
        setApi={setApi}
        className=""
        dir="ltr"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="ml-0">
          {items.map((image) => (
            <CarouselItem key={image.id} className="pl-0">
              <div className="relative isolate aspect-4/5 w-full overflow-hidden rounded-3xl">
                <Image
                  src={image.imgSrc}
                  alt="picture of shacks and houses you can reserve"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute inset-x-0 bottom-10 z-20">
          <div className="flex justify-center gap-2 py-3">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                type="button"
                className={cn(
                  "h-2 cursor-pointer rounded-full transition-all duration-500 ease-in-out",
                  index === current
                    ? "bg-primary-gradient w-4 opacity-100"
                    : "w-2 bg-white hover:opacity-50",
                )}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Carousel>
    </div>
  );
}
