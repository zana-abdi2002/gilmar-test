import AboutUsSection from "@/features/home/about-us-section/components/AboutUsSection";
import HeroSection from "@/features/home/hero-section/HeroSection";
import ResidencesSection from "@/features/home/residences-section/components/ResidencesTypesSection";
import RulesSection from "@/features/home/rules-section/components/RulesSection";
import ServicesSection from "@/features/home/services-section/components/ServicesSection";
import VideoSection from "@/features/home/video-section/components/VideoSection";

export default function Home() {
  return (
    <main className="pt-10">
      <HeroSection />
      <AboutUsSection />
      <RulesSection />
      <ServicesSection />
      <ResidencesSection />
      <VideoSection />
      {/*
        <PackagesSection />
        <BlogSection />
        <TestimonialsSection />
        <FaqSection /> */}
    </main>
  );
}
