import { assets } from "../assets";
import CustomRightArrow from "../customComponents/CustomRightArrow";
import ThemeButton from "../customComponents/ThemeButton";

const CommitteeSection = () => {
  const memberData = [
    {
      id: 1,
      name: "Aniket Mind",
      profileImg: assets.committeeSection.Aniket,
      designation: "Director",
      count: 10,
      dribble: "#",
      faceBook: "#",
      linkedIn: "#",
    },
    {
      id: 2,
      name: "Azmat Hussain",
      profileImg: assets.committeeSection.Azmat,
      designation: "Convenor",
      count: 10,
      dribble: "#",
      faceBook: "#",
      linkedIn: "#",
    },
    {
      id: 2,
      name: "Abhishek Karanjule",
      profileImg: assets.committeeSection.Abhishek,
      designation: "Technical Head",
      count: 10,
      dribble: "#",
      faceBook: "#",
      linkedIn: "#",
    },
  ];

  return (
    <div className="relative bg-gradient-to-r from-black via-gray-950 to-gray-950 text-white pb-20 px-8 min-h-dvh">
      <div className="flex items-center mb-5">
        <CustomRightArrow />
        <h2 className="text-xl md:text-4xl font-header me-4">
          Organizing committee
        </h2>
        <hr className="flex-grow  border-0 bg-gradient-to-r from-primary via-gray-950 to-gray-950 p-px  rounded-3xl" />
      </div>
      <div className="text-base md:text-lg font-body leading-relaxed text-neutral px-4 md:mb-20 mb-8">
        A team of young, experienced and creative individuals responsible for
        conducting India’s Biggest Karting Event
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:mb-20 mb-8">
        {memberData?.map((i) => (
          <ImageCard
            key={i?.id}
            title={i?.name}
            description={i?.designation}
            image={i?.profileImg}
            link={i?.link}
          />
        ))}
      </div>
      <div className="text-center">
        <ThemeButton label="View all" />
      </div>
    </div>
  );
};

export default CommitteeSection;

const ImageCard = ({ image, title, description, link }) => {
  return (
    <div className="group w-full max-w-80 relative rounded-xl shadow-none transition-shadow duration-700 cursor-pointer hover:shadow-lg hover:shadow-gray-800 hover:border-gray-800 overflow-hidden border border-gray-800">
      <div className="h-72 w-full overflow-hidden">
        <img
          
          src={image}
          alt="image"
          className="transition-all duration-700 group-hover:scale-110 ease-in-out"
        />
      </div>
      <div className="p-5 font-body tracking-wider text-xl">
        <div className="flex justify-between items-center mb-0.5">
          <div className="text-secondary group-hover:text-NeonBlue tracking-wider md:text-base text-sm">
            {title}
          </div>
          <div className="flex items-center gap-3">
            <img
              
              src={assets.socialIcons.dribble}
              alt="Dribble"
              className="w-5 h-5 duration-200 hover:scale-125 ease-in-out"
            />
            <img
              
              src={assets.socialIcons.linkedIn}
              alt="LinkedIn"
              className="w-5 h-5 duration-200 hover:scale-125 ease-in-out"
            />
            <img
              
              src={assets.socialIcons.facebook}
              alt="facebook"
              className="w-5 h-5 duration-200 hover:scale-125 ease-in-out"
            />
          </div>
        </div>

        <div className="text-neutral group-hover:text-secondary md:text-sm text-xs">
          {description}
        </div>
      </div>
    </div>
  );
};
