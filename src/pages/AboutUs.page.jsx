import { assets } from "../assets";
import TeamsComponent from "../components/TeamsComponent";
import { aboutUs } from "../constants";

const AboutUsPage = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-950 via-gray-950 to-black sm:py-16 lg:py-24 min-h-dvh ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 md:gap-y-12 gap-y-10">
          <div className="relative w-fit lg:mb-12">
            <img
              
              className="absolute -right-10 top-20 xl:-bottom-12 xl:-right-4 text-white sm:block hidden"
              src={assets.global.dotPattern}
              alt="null"
            />
            <div className="relative mb-5">
              <img
                
                className="relative aspect-video sm:h-60 h-40"
                src={aboutUs.companyLogo}
                alt=""
              />
            </div>
            <div className="text-white flex justify-around gap-10 bg-white p-3 rounded-full">
              <img
                
                className=" aspect-video h-12"
                src={assets.aboutSection.msme_logo}
                alt="null"
              />
              <img
                
                className=" aspect-square w-12 h-12 "
                src={assets.aboutSection.iso_logo}
                alt="null"
              />
            </div>
          </div>

          <div className="2xl:pl-16 text-secondary">
            <h2 className="text-primary sm:text-4xl lg:text-5xl  text-xl md:text-3xl font-header md:mb-9 mb-5">
              About Us
            </h2>
            <p className="text-base md:text-lg mb-8 font-body leading-relaxed text-neutral">
              {aboutUs.description}
            </p>
          </div>
        </div>
      </div>
      {/* Teams */}
      <TeamsComponent />
    </section>
  );
};

export default AboutUsPage;
