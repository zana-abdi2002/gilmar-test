"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/features/general/components/shadcn/components/carousel";
import { cn } from "cn";
import Autoplay from "embla-carousel-autoplay";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HomeComment } from "../types";
import CommentCard from "./CommentCard";

type Props = {
  comments: HomeComment[];
};

export default function CommentsCarousel({ comments }: Props) {
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

  const t = useTranslations("general");

  return (
    <Carousel
      setApi={setApi}
      className="min-w-0 max-[640px]:w-[70%] max-[380px]:w-full sm:w-[60%] lg:w-[37%]"
      dir="ltr"
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        {comments.map((comment) => (
          <CarouselItem
            key={comment.id}
            className="flex min-w-0 flex-col items-center justify-center gap-4"
          >
            <Image
              src={comment.author.avatar.src}
              width={100}
              height={100}
              alt={`${t("profilePictureOf")} ${comment.author.firstName} ${comment.author.lastName}`}
              className="size-[clamp(60px,6.94vw,100px)] rounded-full object-cover"
            />

            <CommentCard
              comment={comment.description}
              fullName={`${comment.author.firstName} ${comment.author.lastName}`}
              role={comment.author.role}
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="flex justify-center gap-2 py-3">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            type="button"
            className={cn(
              "h-2 cursor-pointer rounded-full transition-all duration-500 ease-in-out",
              index === current
                ? "bg-primary-gradient w-4 opacity-100"
                : "bg-muted-foreground w-2 opacity-30 hover:opacity-50",
            )}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </Carousel>
  );
}
