import { useTranslations } from "next-intl";
import Image from "next/image";
import DashLineBackground from "../assets/rule-items-dash-line.svg";
import BelongingsIcon from "../assets/rules-belongings-icon.svg";
import EnvironmentIcon from "../assets/rules-environment.svg";
import RemainCalmIcon from "../assets/rules-remain-calm-icon.svg";
import RuleSectionItem from "./RuleSectionItem";
import {
  BelongingsBackground,
  EnvironmentBackground,
  PeaceBackground,
} from "./RuleSectionItemBackgrounds";

function RulesSectionList() {
  const t = useTranslations("Rules.items");

  return (
    <div className="relative isolate grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {/* dash line background */}
      <Image
        src={DashLineBackground}
        alt=""
        aria-hidden="true"
        className="absolute inset-s-[15.2%] top-15.5 -z-10 overflow-hidden"
      />

      {/* list of */}
      <RuleSectionItem
        cardIcon={BelongingsIcon}
        title={t("belongings.title")}
        description={t("belongings.description")}
        background={<BelongingsBackground />}
      />
      <RuleSectionItem
        cardIcon={RemainCalmIcon}
        title={t("peace.title")}
        description={t("peace.description")}
        cardClassName="rotate-15"
        background={<PeaceBackground />}
      />
      <div className="sm:col-span-2 sm:justify-self-center sm:px-10 lg:col-span-1 lg:px-0">
        <RuleSectionItem
          cardIcon={EnvironmentIcon}
          title={t("environment.title")}
          description={t("environment.description")}
          background={<EnvironmentBackground />}
        />
      </div>
    </div>
  );
}

export default RulesSectionList;

// backgrounds -----------------------------------------
