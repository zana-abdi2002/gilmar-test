import { useTranslations } from "next-intl";
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

  return (
    <div className="flex flex-col gap-6">
      {/* title and description */}
      <div className="text-start">
        <h3 className="text-[1rem] font-extrabold">{t("title")}</h3>
        <p className="text-[0.875rem] font-semibold">{t("description")}</p>
      </div>

      {/* package items */}
      <div className="grid grid-cols-2 justify-between justify-items-center sm:grid-cols-4">
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
      <div className="flex justify-between">
        <p></p>
        <div></div>
      </div>
    </div>
  );
}

export default RomanticPackage;
