import { useFormatter, useTranslations } from "next-intl";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type Props = {
  imgSrc: string | StaticImport;
  title: string;
  price: number;
};

function ResidenceTypeItem({ imgSrc, title, price }: Props) {
  const t = useTranslations("ResidenceTypes");
  const tGeneral = useTranslations("general");
  const format = useFormatter();

  return (
    <div className="relative size-62 overflow-hidden rounded-[20px] xl:size-[21vw] 2xl:size-75">
      {/* image */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-[#070708]/72 to-[#070708]/0"
      />
      <Image src={imgSrc} alt="object-cover" className="object-cover" fill />

      {/* title and price */}
      <div className="absolute inset-s-0 bottom-0 z-10 flex flex-col gap-0.5 p-5">
        <p className="text-[1rem] font-extrabold text-white">{title}</p>
        <p className="text-[0.875rem] font-semibold text-white/80">
          {t("residencePriceFrom")}{" "}
          {format.number(price, { currency: "IRR", currencySign: "standard" }) +
            " " +
            tGeneral("currencyUnit")}
        </p>
      </div>
    </div>
  );
}

export default ResidenceTypeItem;
