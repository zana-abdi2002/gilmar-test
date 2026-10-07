import { useTranslations } from "next-intl";
import Image from "next/image";
import RulesSectionIcon from "../assets/rules-section-icon.svg";

function RulesSectionHeader() {
  const t = useTranslations("Rules");

  return (
    <header className="flex w-full flex-col items-center gap-5">
      {/* Section icon */}
      <div>
        <Image src={RulesSectionIcon} alt="" aria-hidden="true" />
      </div>

      {/* Heading and description */}
      <div className="flex w-full flex-col items-center gap-5 text-center">
        <h2
          id="rules-section-title"
          className="text-center text-3xl font-extrabold"
        >
          {t("title")}
        </h2>

        <p className="text-muted-foreground text-center text-sm font-semibold">
          {t("description")}
        </p>
      </div>
    </header>
  );
}

export default RulesSectionHeader;
