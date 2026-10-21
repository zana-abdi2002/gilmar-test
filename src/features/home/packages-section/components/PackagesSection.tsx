import BackgroundVector from "@/features/general/assets/background-vector.svg";
import Image from "next/image";
import { Suspense } from "react";
import PackagesCarouselDataProvider from "./PackagesCarouselDataProvider";
import PackagesSectionHeader from "./PackagesSectionHeader";
import RomanticPackage from "./RomanticPackage";

function PackagesSection() {
  return (
    <div className="relative isolate mx-auto flex w-full max-w-360 flex-col justify-between gap-12 px-[5.55vw] md:flex-row lg:items-center">
      {/* background vector */}
      <Image
        src={BackgroundVector}
        alt=""
        className="pointer-events-none absolute inset-s-0 top-0 -z-10"
      />

      {/* section content */}
      <div className="flex min-w-90 flex-col justify-center gap-12 lg:w-[clamp(28rem,42%,36rem)]">
        <PackagesSectionHeader />
        <RomanticPackage />
      </div>

      {/* images carousel */}
      <div className="flex min-w-80 grow items-center justify-center">
        <Suspense>
          <PackagesCarouselDataProvider />
        </Suspense>
      </div>
    </div>
  );
}

export default PackagesSection;
