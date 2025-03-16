import { assets } from "../assets";
import ThemeButton from "../customComponents/ThemeButton";

const TrainingPage = () => {
  return (
    <div className="relative h-dvh overflow-hidden bg-black bg-opacity-80">
      <img
        className="absolute top-0 left-0 w-full h-full md:block hidden  "
        src={assets.background.trainingDesktop}
      />
      <img
        className="absolute top-0 left-0 w-full h-full block md:hidden "
        src={assets.background.trainingMoile}
      />
      <div className="h-full flex md:items-center items-end md:pb-0 pb-20 justify-center bg-black bg-opacity-50 w-full relative">
        <a
          href="https://docs.google.com/forms/d/144TFMYbdacKhya82gUu78_ZIlTjffPomU9Da95A-q1k/viewform?edit_requested=true"
          target="_blank"
        >
          <ThemeButton label="Join training workshop" />
        </a>
      </div>
    </div>
  );
};

export default TrainingPage;
