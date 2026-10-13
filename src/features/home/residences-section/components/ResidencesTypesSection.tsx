import VectorBackground from "@/features/general/assets/background-vector.svg";
import Image from "next/image";
import ResidencesSectionHeader from "./ResidencesSectionHeader";
import ResidenceTypesList from "./ResidenceTypesList";

function ResidencesSection() {
  return (
    <section
      aria-labelledby="residences-heading"
      className="relative isolate mx-auto flex max-w-360 flex-col gap-10 px-3 xl:px-20"
    >
      <ResidencesSectionHeader />
      <ResidenceTypesList />

      {/* vector background */}
      <Image
        src={VectorBackground}
        alt=""
        className="pointer-events-none absolute inset-e-0 top-5 -z-10"
      />
    </section>
  );
}

export default ResidencesSection;
