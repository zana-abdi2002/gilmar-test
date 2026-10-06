import BackgroundEllipses from "../components/BackgroundEllipses";
import HeroContent from "./HeroContent";
import HeroGallery from "./HeroGallery";

function HeroSection() {
  return (
    <div className="overflow-x-clip">
      <BackgroundEllipses />
      <HeroContent />
      <HeroGallery />
    </div>
  );
}

export default HeroSection;
