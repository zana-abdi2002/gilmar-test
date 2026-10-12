import ResidencesSectionHeader from "./ResidencesSectionHeader";
import ResidenceTypesList from "./ResidenceTypesList";

function ResidencesSection() {
  return (
    <section
      aria-labelledby="residences-heading"
      className="mx-auto flex max-w-360 flex-col gap-10 px-[11vw]"
    >
      <ResidencesSectionHeader />
      <ResidenceTypesList />
    </section>
  );
}

export default ResidencesSection;
