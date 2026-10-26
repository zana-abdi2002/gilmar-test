import AboutUsSection from "@/features/home/about-us-section/components/AboutUsSection";
import BlogSection from "@/features/home/blog-section/components/BlogSection";
import CommentsSection from "@/features/home/comments-section/components/CommentsSection";
import FAQSection from "@/features/home/faq-section/components/FAQSection";
import FooterSection from "@/features/home/footer-section/components/FooterSection";
import HeroSection from "@/features/home/hero-section/HeroSection";
import PackagesSection from "@/features/home/packages-section/components/PackagesSection";
import ResidencesSection from "@/features/home/residences-section/components/ResidencesSection";
import RulesSection from "@/features/home/rules-section/components/RulesSection";
import ServicesSection from "@/features/home/services-section/components/ServicesSection";
import VideoSection from "@/features/home/video-section/components/VideoSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-15 py-10">
      <HeroSection />
      <AboutUsSection />
      <RulesSection />
      <ServicesSection />
      <ResidencesSection />
      <VideoSection />
      <CommentsSection />
      <PackagesSection />
      <BlogSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
