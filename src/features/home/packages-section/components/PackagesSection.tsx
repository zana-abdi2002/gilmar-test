import BackgroundVector from "@/features/general/assets/background-vector.svg";
import Image from "next/image";
import PackagesSectionCarousel from "./PackagesSectionCarousel";
import PackagesSectionHeader from "./PackagesSectionHeader";
import RomanticPackage from "./RomanticPackage";

function PackagesSection() {
  return (
    <div className="relative isolate mx-auto flex w-full max-w-360 justify-between px-[5.55vw]">
      {/* background vector */}
      <Image
        src={BackgroundVector}
        alt=""
        className="pointer-events-none absolute inset-s-0 top-0 -z-10"
      />

      {/* section content */}
      <div className="flex flex-col justify-center gap-12">
        <PackagesSectionHeader />
        <RomanticPackage />
      </div>

      {/* images carousel */}
      <PackagesSectionCarousel />
    </div>
  );
}

export default PackagesSection;
