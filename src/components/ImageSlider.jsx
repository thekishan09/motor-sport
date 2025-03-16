import { useEffect, useState } from "react";
import { assets } from "../assets";
import CustomRightArrow from "../customComponents/CustomRightArrow";

const ImageSlider = () => {
  const images = Object.values(assets.bannerImages);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className="h-dvh  flex  items-center bg-gradient-to-r from-black via-gray-950 to-gray-950" data-carousel="slide">
        <div className="relative md:w-auto w-full aspect-square h-[600px] mx-auto shadow-xl shadow-background hover:shadow-gray-800 hover:border-gray-800">
          {images.map((image, index) => (
            <img
              
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className={`duration-700 ease-in-out absolute object-fill h-full w-full rounded-xl 
                  ${index === currentIndex ? "opacity-100" : "opacity-0"}
                  `}
            />
          ))}
          <button
            onClick={goToPrevious}
            className="group absolute left-0 top-1/2 transform -translate-y-1/2 p-1 rounded-full focus:outline-none shadow-sm hover:shadow-black bg-white bg-opacity-25 transition duration-700 mx-5"
          >
            <CustomRightArrow
              size="md:size-7 size-5"
              className={"rotate-180 group-hover:text-black transition duration-700"}
            />
          </button>
          <button
            onClick={goToNext}
            className="group absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-25 p-1 rounded-full focus:outline-none transition duration-700 mx-5"
          >
            <CustomRightArrow
              size="md:size-7 size-5"
              className={"group-hover:text-black transition duration-700"}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
