import { assets } from "../assets";
import { aboutUs } from "../constants";
import CustomRightArrow from "../customComponents/CustomRightArrow";
import ThemeButton from "../customComponents/ThemeButton";

const AboutSection = () => {
  const cardData = [
    {
      title: "Nexus Motorsport",
      image: assets.aboutSection.NexusMotoSport,
      link: "#",
      description:
        "Indian Karting championship is India’s biggest karting challenge and known for providing 100% satisfaction in terms of transparency, racing atmosphere as well as best in class management.",
      id: 1,
    },
    {
      title: "Indian Karting championship",
      image: assets.aboutSection.IndianKarting,
      link: "#",
      description:
        "The 5th Edition is launched with the vision of shaping the young emerging undergraduates with great learning experience and to improvise the current scenario of motorsport in India and introduce rear world of motorsport to young minds",
      id: 2,
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-gradient-to-r from-black via-gray-950 to-gray-950 text-white pb-20 px-8 min-h-dvh"
    >
      <div className="relative mx-auto">
        <div className="flex items-center md:mb-12 mb-5">
          <CustomRightArrow />
          <h2 className="text-xl md:text-4xl text-center font-header me-4">
            About events
          </h2>
          <hr className=" flex-grow  border-0 bg-gradient-to-r from-primary via-gray-950 to-gray-950 p-px  rounded-3xl" />
        </div>
        <div className="flex lg:flex-row flex-col items-start gap-5 justify-between">
          <div className="px-4 mb-8 lg:mb-0 lg:w-1/2">
            <p className="text-base md:text-lg mb-8 font-body leading-relaxed text-neutral">
              {aboutUs.description}
            </p>
            <ThemeButton label="View all" />
          </div>
          <div className="grid grid-cols-2 gap-5 mx-auto">
            {cardData?.map((i) => (
              <ImageCard
                key={i?.id}
                title={i?.title}
                description={i?.description}
                image={i?.image}
                link={i?.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

const ImageCard = ({ image, title, description, link }) => {
  return (
    <div className="group w-full max-w-80 relative rounded-xl  shadow-none transition duration-700 cursor-pointer hover:shadow-lg hover:shadow-gray-800 hover:border-gray-800 overflow-hidden border border-gray-800">
      <div className="md:h-72 w-full overflow-hidden">
        <img
          

          src={image}
          alt="image"
          className="transition-all duration-700 group-hover:scale-110 ease-in-out"
        />
      </div>
      <div className="p-5 font-body ">
        <div className="text-secondary group-hover:text-NeonBlue tracking-wider md:text-base text-sm mb-0.5 truncate">
          {title}
        </div>
        <div className="truncate overflow-hidden  text-neutral group-hover:text-secondary md:text-sm text-xs">
          {description}
        </div>
      </div>
    </div>
  );
};
