import BackgroundVector from "@/features/general/assets/background-vector.svg";
import Image from "next/image";
import FAQSectionAccordion from "./FAQSectionAccordion";
import FAQSectionHeader from "./FAQSectionHeader";

function FAQSection() {
  return (
    <div className="relative isolate mx-auto flex w-full max-w-360 items-center justify-between gap-10 px-[5.55vw]">
      <FAQSectionHeader />
      <FAQSectionAccordion />

      {/* background vector */}
      <Image
        src={BackgroundVector}
        alt=""
        className="pointer-events-none absolute inset-e-0 top-0 -z-10"
      />
    </div>
  );
}

export default FAQSection;
