import { Card } from "@mui/material";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ReactElement } from "react";

type Props = {
  cardIcon: string | StaticImport;
  cardClassName?: string;
  title: string;
  description: string;
  background?: ReactElement;
};

function RuleSectionItem({
  cardClassName = "-rotate-15",
  cardIcon,
  title,
  description,
  background,
}: Props) {
  return (
    <article className="relative isolate flex flex-col items-center justify-between gap-15">
      {/* item background shapes */}
      {background}

      {/* item card and icon */}
      <Card
        className={`bg-floating-card-start flex h-40 w-32 items-center justify-center rounded-3xl border border-[#F4F5F6] shadow-lg ${cardClassName}`}
      >
        <Image
          src={cardIcon}
          alt="icon"
          aria-hidden="true"
          // width={96}
          // height={96}
        />
      </Card>

      {/* item title and description */}
      <div className="gap-1 text-center">
        <h3 className="text-[16px] font-extrabold">{title}</h3>
        <p className="text-[14px] font-semibold">{description}</p>
      </div>
    </article>
  );
}

export default RuleSectionItem;
