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
              {/* {aboutUs.description} */}
              Founded in 2015, Hindustan Motorsports has emerged as one of India's most trusted and dynamic motorsports organizations. We go beyond just organizing events — we craft a legacy of speed, innovation, and engineering excellence. 
              <br/>
              With 5 successful national-level events organized and association with 28 major motorsports events across India, our journey is a testament to our commitment, consistency, and community-building in the racing domain.
              <br/>
              At Hindustan Motorsports, every event is a celebration of skill, creativity, and the relentless pursuit of performance. Whether it's Go-Karts, E-Bikes, or hybrid vehicle competitions, we bring together future-ready technology, passionate youth, and real-world racing environments.
              <br/>
              We are more than a company — we are a community driven by the love for motorsports. We empower young engineers, collaborate with institutions, and provide a national platform where ideas race alongside machines.
              <br/>
              Join us on the track — where competition meets collaboration, and engineering meets adrenaline.
              Hindustan Motorsports — Fueling Passion. Engineering the Future.
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
