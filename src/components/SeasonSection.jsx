import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets";
import { ROUTES, kartEvents } from "../constants";
import CustomRightArrow from "../customComponents/CustomRightArrow";
import ThemeButton from "../customComponents/ThemeButton";

const SeasonSection = () => {
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(ROUTES.goKart, { state: { id, isHome: true } });
  }
  return (
    <section className="relative bg-gradient-to-r from-black via-gray-950 to-gray-950 pb-20 px-8 min-h-dvh">
      <div className="flex items-center md:mb-12 mb-5">
        <CustomRightArrow />
        <h2 className="text-xl md:text-4xl text-white text-center font-header me-4">
          Go-kart events
        </h2>
        <hr className=" flex-grow  border-0 bg-gradient-to-r from-primary via-gray-950 to-gray-950 p-px  rounded-3xl" />
      </div>
      <div className="flex xl:flex-row flex-col justify-between md:mb-20 mb-8">
        <div className="md:max-w-lg xl:h-dvh xl:sticky top-0 mx-auto">
          <img
            
            src={assets.seasonSection.person}
            alt="A man"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-y-3 my-4">
          {kartEvents.reverse()?.map((event, index) => {
            return (
              <Fragment key={index}>
                {/* bigger screen */}
                <div className="sm:block hidden">
                  <div className="grid grid-cols-[1fr_auto_1fr] gap-x-3 items-center mx-auto">
                    {event.direction == "lft" ? (
                      <EventCard
                        heading={event.data.heading}
                        content={event.data.subHeading}
                        year={event.year}
                        image={event.img}
                        id={index}
                        handleKartEvent={handleNavigate}
                      />
                    ) : (
                      <div />
                    )}

                    <Pillar />

                    {event.direction == "ryt" ? (
                      <EventCard
                        heading={event.data.heading}
                        content={event.data.subHeading}
                        year={event.year}
                        image={event.img}
                        id={index}
                        handleKartEvent={handleNavigate}
                      />
                    ) : (
                      <div />
                    )}
                  </div>
                </div>
                {/* Smaller screen */}
                <div className="block sm:hidden">
                  <div className="grid grid-flow-row-dense  gap-x-3 items-center mx-auto">
                    <Pillar />
                    <div className="col-span-2">
                      <EventCard
                        heading={event.data.heading}
                        content={event.data.subHeading}
                        year={event.year}
                        image={event.img}
                        id={index}
                        handleKartEvent={handleNavigate}
                      />
                    </div>
                  </div>
                </div>

                {index < kartEvents?.length - 1 && <Circle />}
              </Fragment>
            );
          })}
        </div>
      </div>
      {/* <div className="flex flex-col md:flex-row justify-around items-center gap-10 md:mb-20 mb-8">
        {upcommingEvents?.map((i) => (
          <UpcomingEventCard key={i?.id} title={i?.name} image={i?.image} />
        ))}
      </div> */}
    </section>
  );
};

export default SeasonSection;

const Circle = () => (
  <div className=" border border-NeonBlue rounded-full w-4 h-4 sm:mx-auto mx-3 shadow-sm shadow-NeonBlue"></div>
);

const Pillar = () => (
  <div className="w-px h-full bg-gradient-to-b from-gray-950 via-primary to-gray-950 rounded-t-full rounded-b-full mx-5"></div>
);

const EventCard = ({ heading, content, year, CommingSoon, id, handleKartEvent }) => {

  return (
    <div className="min-h-[250px] p-6 bg-gray-950 rounded-lg shadow-xl shadow-background border-5 border-gray-950 md:w-80 w-full transition duration-700 cursor-pointer hover:shadow-lg hover:shadow-gray-800 hover:border-gray-800 flex flex-col">
      <div className=" items-center">
        <span className="text-neutral font-header font-bold md:text-base text-sm">
          {year ?? "year"}
        </span>
      </div>
      <h3 className="text-base md:text-2xl font-header font-semibold text-NeonBlue mb-2 mt-2">
        {heading ?? "heading"}
      </h3>

      <ul className="text-white text-xs font-body list-disc list-inside mb-5">
        {content?.slice(0, 5)?.map((i) => (
          <li className="mb-2" key={i}>
            {i}
          </li>
        ))}
      </ul>
      <div className="mx-auto mt-auto">
        <ThemeButton label="learn more" onClick={() => handleKartEvent(id)} />
      </div>
    </div>
  );
};

const UpcomingEventCard = ({ image, title }) => {
  return (
    <div className="group w-full max-w-80 relative rounded-xl shadow-none transition-shadow duration-700 cursor-pointer ">
      <div className="h-72 w-full ">
        <img
          
          src={image}
          alt="image"
          className="transition-all duration-700 group-hover:scale-110 ease-in-out"
        />
      </div>
      <div className="p-5 font-body tracking-wider text-xl">
        <div className="text-secondary group-hover:text-NeonBlue tracking-wider md:text-base text-sm">
          {title}
        </div>
        <div className="text-neutral group-hover:text-secondary md:text-sm text-xs">
          coming soon
        </div>
      </div>
    </div>
  );
};
