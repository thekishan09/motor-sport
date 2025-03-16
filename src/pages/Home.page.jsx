import GallerySection from "../components/GallerySection";
import HeroSection from "../components/HeroSection";
import ImageSlider from "../components/ImageSlider";
import IntroVideoSection from "../components/IntoVideoSection";
import PromotingSection from "../components/PromotingSection";
import SeasonSection from "../components/SeasonSection";
import SupportSection from "../components/SupportSection";
import VideoSection from "../components/VideoSection";

const HomePage = () => {
  return (
    <div className="relative">
      <div className="top-0 h-dvh w-full z-1">
        <HeroSection />
      </div>
      <div className="">
        <ImageSlider />
      </div>
      <div className="">
        <IntroVideoSection />
      </div>
      <div className="">
        <SeasonSection />
      </div>

      <div className="">
        <GallerySection />
      </div>

      <div className="">
        <VideoSection />
      </div>

      <div className="">
        <SupportSection />
      </div>
      <div className="">
        <PromotingSection />
      </div>
    </div>
  );
};

export default HomePage;
