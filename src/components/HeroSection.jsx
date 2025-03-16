import { assets } from "../assets";
import ThemeButton from "../customComponents/ThemeButton";

const HeroSection = () => {
  return (
    <section className="relative h-dvh overflow-hidden">
      <video 
        className="absolute top-0 left-0 w-full h-full object-fill"
        src={assets.heroSection.backGroundVideo}
        autoPlay
        loop
        muted
      ></video>
      <div className="relative h-full bg-black bg-opacity-50 text-secondary p-8 flex items-center">
        <div className="flex flex-col">
          <h1 className="font-header text-4xl md:text-5xl mb-4">
            Welcome to<br /> <span className="text-primary">Hindustan MotorSports</span> <br />
          </h1>
          <p className="font-body text-lg md:text-xl mb-8">
            Experience the thrill and excitement of high-speed racing.
          </p>
          <div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdaRvHE3hqrYnTrXJPp004VM1mwE762R3UfQo7WiPJzWnURiQ/viewform" target="_blank">

              <ThemeButton label="Join the race" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
