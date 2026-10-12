import BackgroundVector from "@/features/general/assets/background-vector.svg";
import Image from "next/image";
import ServicesSectionCarousel from "./ServicesSectionCarousel";
import ServicesSectionHeader from "./ServicesSectionHeader";

function ServicesSection() {
  return (
    <section
      aria-labelledby="services-section-title"
      className="relative isolate mx-auto w-full max-w-360 overflow-x-hidden px-3 min-[1500px]:overflow-x-visible lg:px-0 lg:ps-30"
    >
      <Image
        src={BackgroundVector}
        alt=""
        aria-hidden
        className="absolute inset-s-0 -z-10 h-full"
      />

      <div className="flex flex-col lg:flex-row">
        <ServicesSectionHeader />
        <div className="lg:-me-50 lg:max-w-211">
          <ServicesSectionCarousel />
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
