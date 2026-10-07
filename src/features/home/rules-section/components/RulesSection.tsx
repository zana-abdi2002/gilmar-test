import RulesSectionGrid from "./RulesSectionGrid";
import RulesSectionHeader from "./RulesSectionHeader";

function RulesSection() {
  return (
    <section>
      <div>{/* grid background vector */}</div>
      <div className="flex flex-col gap-8">
        <RulesSectionHeader />
        <RulesSectionGrid />
      </div>
    </section>
  );
}

export default RulesSection;
