import ResidencesSectionHeader from "./ResidencesSectionHeader";
import ResidenceTypesList from "./ResidenceTypesList";

function ResidencesSection() {
  return (
    <div className="mx-auto flex max-w-360 flex-col gap-10 px-[11vw]">
      <ResidencesSectionHeader />
      <ResidenceTypesList />
    </div>
  );
}

export default ResidencesSection;
