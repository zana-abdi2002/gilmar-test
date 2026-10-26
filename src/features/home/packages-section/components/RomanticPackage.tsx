import HomeActionButton from "@/features/general/components/HomeActionButton";
import { useFormatter, useTranslations } from "next-intl";
import BoatIcon from "../assets/boat-icon.svg";
import CoconutIcon from "../assets/coconut-icon.svg";
import MountainIcon from "../assets/mountain-icon.svg";
import TenetIcon from "../assets/tenet-icon.svg";
import PackageCardItem from "./PackageCardItem";

const ITEMS = [
  { id: 0, imgSrc: TenetIcon, description: "1 شب اقامت" },
  { id: 1, imgSrc: CoconutIcon, description: "صبحانه" },
  { id: 2, imgSrc: BoatIcon, description: "قایق سواری" },
  { id: 3, imgSrc: MountainIcon, description: "تور جنگل" },
];

function RomanticPackage() {
  const t = useTranslations("Packages.Romantic");
  const tGeneral = useTranslations("general");
  const format = useFormatter();

  return (
    <div className="flex flex-col gap-6">
      {/* title and description */}
      <div className="text-center lg:text-start">
        <h3 className="text-[1rem] font-extrabold">{t("title")}</h3>
        <p className="text-[0.875rem] font-semibold">{t("description")}</p>
      </div>

      {/* package items */}
      <div className="grid grid-cols-2 justify-between justify-items-center gap-y-6 lg:grid-cols-4">
        {ITEMS.map((item) => (
          <PackageCardItem
            key={item.id}
            imageSrc={item.imgSrc}
            description={item.description}
          />
        ))}
      </div>

      {/* line */}
      <hr className="w-full border-0 border-t border-dashed border-gray-300" />

      {/* price and action */}
      <div className="flex flex-col items-center justify-between gap-3 text-[#43A047] sm:flex-row">
        <p className="text-[1rem] font-extrabold">
          {tGeneral("price")}: {format.number(2300000)}{" "}
          {tGeneral("currencyUnit")}
        </p>
        <HomeActionButton
          href="/reservation/123"
          label="همین حالا رزرو کن"
          size="medium"
        />
      </div>
    </div>
  );
}

export default RomanticPackage;
