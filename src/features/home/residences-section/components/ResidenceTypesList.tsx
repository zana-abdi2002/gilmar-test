import { useTranslations } from "next-intl";
import House1 from "../assets/house-1.webp";
import House2 from "../assets/house-2.webp";
import House3 from "../assets/house-3.webp";
import House4 from "../assets/house-4.webp";
import ResidenceTypeItem from "./ResidenceTypeItem";

function ResidenceTypesList() {
  const t = useTranslations("ResidenceTypes");

  const items = [
    {
      image: House1,
      title: t("woodenHouse"),
      price: 13000000,
    },
    {
      image: House2,
      title: t("woodenHouse"),
      price: 13000000,
    },
    {
      image: House3,
      title: t("woodenHouse"),
      price: 13000000,
    },
    {
      image: House4,
      title: t("woodenHouse"),
      price: 13000000,
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6">
      {items.map((item) => (
        <ResidenceTypeItem
          key={JSON.stringify(item)}
          imgSrc={item.image}
          title={item.title}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default ResidenceTypesList;
