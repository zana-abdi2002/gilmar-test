import BackgroundVector from "@/features/general/assets/background-vector.svg";
import Image from "next/image";
import { Suspense } from "react";
import FAQSectionHeader from "./FAQSectionHeader";
import HomeFAQDataProvider from "./HomeFAQDataProvider";

function FAQSection() {
  return (
    <div className="relative isolate mx-auto flex w-full max-w-360 flex-col items-center justify-between gap-10 px-[5.55vw] lg:flex-row lg:items-start">
      {/* header */}
      <FAQSectionHeader />

      {/* accordion */}
      <Suspense>
        {/* TODO: add fallback skeleton */}
        <HomeFAQDataProvider />
      </Suspense>

      {/* background vector */}
      <Image
        src={BackgroundVector}
        alt=""
        className="pointer-events-none absolute inset-s-0 top-0 -z-10"
      />
    </div>
  );
}

export default FAQSection;
