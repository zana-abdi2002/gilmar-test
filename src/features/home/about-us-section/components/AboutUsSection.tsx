import BackgroundVector from "@/features/general/assets/background-vector.svg";
import Image from "next/image";
import AboutUsCollage from "./AboutUsCollage";
import AboutUsContent from "./AboutUsContent";

function AboutUsSection() {
  return (
    <section className="relative isolate mx-auto max-w-360 overflow-hidden">
      {/* Background Vector */}
      <Image
        src={BackgroundVector}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute start-[-20.5px] bottom-[203.7px] -z-10 h-[393.8px] w-[669.4px] max-w-none select-none"
      />

      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-10 px-5 lg:flex-row lg:px-20">
        <div className="min-w-0 flex-1">
          <AboutUsContent />
        </div>

        <div className="relative z-10 w-full max-w-[582px] shrink-0">
          <AboutUsCollage />
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
