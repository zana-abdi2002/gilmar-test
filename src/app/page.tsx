import AboutUsSection from "@/features/home/about-us-section/components/AboutUsSection";
import HeroSection from "@/features/home/hero-section/HeroSection";

export default function Home() {
  return (
    <main className="pt-10">
      <HeroSection />
      <AboutUsSection />
      {/*
        <ServicesSection />
        <ResidencesSection />
        <PackagesSection />
        <VideoSection />
        <RulesSection />
        <BlogSection />
        <TestimonialsSection />
        <FaqSection /> */}
    </main>
  );
}
