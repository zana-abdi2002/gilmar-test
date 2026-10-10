import ServicesSectionCarousel from "./ServicesSectionCarousel";
import ServicesSectionHeader from "./ServicesSectionHeader";

function ServicesSection() {
  return (
    <section aria-labelledby="services-section-title" className="flex">
      <ServicesSectionHeader />
      <ServicesSectionCarousel />
    </section>
  );
}

export default ServicesSection;
