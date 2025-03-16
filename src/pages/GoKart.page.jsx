import { kartEvents } from "../constants";
import ThemeButton from "../customComponents/ThemeButton";
import { useEffect, useState } from 'react';
import SeasonPage from "./Season.page";
import { useLocation } from "react-router-dom";


const SeasonCard = ({ year, heading, content, img, handleKartEvent, id }) => {

  return (
    <div className="min-h-96 p-6 bg-black items-center rounded-2xl transition duration-700 cursor-pointer shadow-lg shadow-gray-800 hover:border-gray-800 flex flex-col">
      <h3 className="text-primary text-xl md:text-3xl text-center font-header mb-2 uppercase">
        {heading ?? "heading"}
      </h3>

      <div className=" items-center mb-5">
        <span className="text-neutral font-header font-bold md:text-base text-sm">
          {year ?? "year"}
        </span>
      </div>

      <div className="mb-5">
        <img
          
          src={img}
          className="md:h-28 h-24 w-auto"
          alt="Indian Karting Logo"
        />
      </div>

      <ul className="md:text-base text-sm mb-8 font-body leading-relaxed text-secondary uppercase list-disc list-inside">
        {content?.slice(0, 4)?.map((i) => (
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

function GoKartPage() {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const { state } = useLocation();

  const handleKartEvent = (index) => {
    setSelectedIndex(index);
  };
  function ScrollToTop() {
   
  
    useEffect(() => {
   window.scrollTo(0, 0);
    }, [state , selectedIndex]);
  
    return null;
  }
  return (
    <>
    <ScrollToTop />
      {selectedIndex >= 0 || state?.id ? <SeasonPage id={selectedIndex >= 0 ? selectedIndex : state?.id} handleKartEvent={handleKartEvent} isHome={state?.isHome} /> : <section className={`py-24 px-8 relative bg-gradient-to-r from-black via-gray-950 to-gray-950`}>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-10">
          {kartEvents?.map((item, index) => (
            <SeasonCard
              key={index}
              id={index}
              year={item?.year}
              heading={item?.data?.heading}
              content={item?.data?.subHeading}
              img={item?.img}
              handleKartEvent={handleKartEvent}
            />
          ))}
        </div>
      </section>}
    </>
  );
}

export default GoKartPage;

