import BackgroundVector from "@/features/general/assets/background-vector.svg";
import Image from "next/image";
import RulesSectionHeader from "./RulesSectionHeader";
import RulesSectionList from "./RulesSectionList";

function RulesSection() {
  return (
    <section aria-labelledby="rules-section-title" className="relative isolate">
      <Image
        src={BackgroundVector}
        alt=""
        className="pointer-events-none absolute inset-e-[2%] top-32 -z-10"
      />

      <div className="flex flex-col gap-15 px-[15%]">
        <RulesSectionHeader />
        <RulesSectionList />
      </div>
    </section>
  );
}

export default RulesSection;
