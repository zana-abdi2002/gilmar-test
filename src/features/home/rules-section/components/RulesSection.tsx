import BackgroundVector from "@/features/general/assets/about-us-background-vector.svg";
import Image from "next/image";
import RulesSectionGrid from "./RulesSectionGrid";
import RulesSectionHeader from "./RulesSectionHeader";

function RulesSection() {
  return (
    <section className="relative isolate">
      {/* grid background vector */}
      <Image
        src={BackgroundVector}
        alt=""
        aria-hidden={true}
        className="absolute inset-e-[2%] top-32 -z-10 overflow-hidden"
      />
      <div className="flex flex-col gap-15 px-[15%]">
        <RulesSectionHeader />
        <RulesSectionGrid />
      </div>
    </section>
  );
}

export default RulesSection;
