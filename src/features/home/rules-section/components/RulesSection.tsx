import RulesSectionGrid from "./RulesSectionGrid";
import RulesSectionHeader from "./RulesSectionHeader";

function RulesSection() {
  return (
    <>
      <div>{/* grid background vector */}</div>
      <div className="flex flex-col gap-8">
        <RulesSectionHeader />
        <RulesSectionGrid />
      </div>
    </>
  );
}

export default RulesSection;
