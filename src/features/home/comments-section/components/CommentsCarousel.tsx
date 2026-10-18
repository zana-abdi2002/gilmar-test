"use client";

import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/features/general/components/shadcn/components/carousel";
import { cn } from "cn";
import { useTranslations } from "next-intl";
import Image from "next/image";
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
      className="flex w-[37%] flex-col items-center justify-center"
      dir="ltr"
    >
      <CarouselContent>
        {comments.map((comment) => (
          <CarouselItem
            key={comment.id}
            className="mx-auto flex flex-col items-center justify-center"
          >
            {/* comment avatar */}
            <Image
              src={comment.author.avatar.src}
              width={100}
              height={100}
              alt={`${t("profilePictureOf")} ${comment.author.firstName + comment.author.lastName}`}
              className="rounded-full object-cover"
            />

            {/* comment card */}
            <CommentCard
              comment={comment.description}
              fullName={comment.author.firstName + comment.author.lastName}
              role={comment.author.role}
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 py-3">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-2 cursor-pointer rounded-full transition-all duration-500 ease-in-out",
              index === current
                ? "bg-primary w-4 opacity-100"
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
