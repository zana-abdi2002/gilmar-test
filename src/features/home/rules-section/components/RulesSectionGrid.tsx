import { useTranslations } from "next-intl";
import BelongingsIcon from "../assets/rules-belongings-icon.svg";
import EnvironmentIcon from "../assets/rules-environment.svg";
import RemainCalmIcon from "../assets/rules-remain-calm-icon.svg";
import RuleSectionItem from "./RuleSectionItem";

function RulesSectionGrid() {
  const t = useTranslations("Rules.items");

  return (
    <div className="grid grid-cols-3 gap-8 px-47">
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
      <RuleSectionItem
        cardIcon={EnvironmentIcon}
        title={t("environment.title")}
        description={t("environment.description")}
        background={<EnvironmentBackground />}
      />
    </div>
  );
}

export default RulesSectionGrid;

// backgrounds -----------------------------------------

function BelongingsBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 select-none"
    >
      <span className="absolute top-[5.74%] left-[75.47%] h-[5.22%] w-[4.69%] transform-[matrix(-0.26,0.97,0.97,0.26,0,0)] rounded-xs bg-[#DCB9F0]" />
      <span className="absolute top-[32.61%] left-[14.3%] h-[3.48%] w-[3.13%] transform-[matrix(0.94,-0.34,-0.34,-0.94,0,0)] rounded-xs bg-[#9AC8FF]" />
      <span className="absolute top-[49.57%] left-[82.97%] h-[1.74%] w-[1.56%] transform-[matrix(0.94,-0.34,-0.34,-0.94,0,0)] rounded-xs bg-[#FFD166]" />
    </div>
  );
}

function PeaceBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 select-none"
    >
      <span className="absolute top-[20%] left-[82.19%] h-[5.22%] w-[4.69%] transform-[matrix(-0.97,-0.26,-0.26,0.97,0,0)] rounded-sm bg-[#FABDC1]" />
      <span className="absolute top-[53.97%] left-[18.35%] h-[1.74%] w-[1.56%] transform-[matrix(0.94,-0.34,-0.34,-0.94,0,0)] rounded-xs bg-[#9AC8FF]" />
      <span className="absolute top-[2.09%] left-[21.72%] h-[3.48%] w-[3.13%] transform-[matrix(0.94,-0.34,-0.34,-0.94,0,0)] rounded-xs bg-[#92A5EF]" />
    </div>
  );
}

function EnvironmentBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 select-none"
    >
      <span className="absolute top-[5.93%] left-[74.91%] h-[3.48%] w-[3.13%] transform-[matrix(0.94,-0.34,-0.34,-0.94,0,0)] rounded-xs bg-[#FFD166]" />
      <span className="absolute top-[53.04%] left-[20.64%] h-[5.22%] w-[4.69%] transform-[matrix(0.94,-0.34,-0.34,-0.94,0,0)] rounded-xs bg-[#CDB4DB]" />
    </div>
  );
}
