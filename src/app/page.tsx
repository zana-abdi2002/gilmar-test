import AboutUsSection from "@/features/home/about-us-section/components/AboutUsSection";
import HeroSection from "@/features/home/hero-section/HeroSection";
import RulesSection from "@/features/home/rules-section/components/RulesSection";
import ServicesSection from "@/features/home/services-section/components/ServicesSection";

export default function Home() {
  return (
    <main className="pt-10">
      <HeroSection />
      <AboutUsSection />
      <RulesSection />
      <ServicesSection />
      {/*
        <ResidencesSection />
        <PackagesSection />
        <VideoSection />
        <BlogSection />
        <TestimonialsSection />
        <FaqSection /> */}
    </main>
  );
}
