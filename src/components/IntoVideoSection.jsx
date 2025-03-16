import { useEffect, useLayoutEffect, useRef } from "react";
import { assets } from "../assets";
import CustomRightArrow from "../customComponents/CustomRightArrow";

const IntroVideoSection = () => {

  const videoContainerRef = useRef(null);
  // const location =useLocation();


  useEffect(() => {
    const video = document.getElementById('myVideo');
    const options = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.5, // 50% visibility needed to trigger
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.play()
          video.controls = true
          video.muted =false
        } else {
          video.pause()
          video.controls = false
          video.muted =true
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current);
    }

    return () => {
      if (videoContainerRef.current) {
        observer.unobserve(videoContainerRef.current);
      }
    };
  }, []);

  const handleSmoothScroll = () => {
    if (videoContainerRef.current) {
      const section = videoContainerRef.current;
      const yOffset = 50; // Adjust this value to set the margin-top offset

      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Execute smooth scroll on component mount
  useLayoutEffect(() => {
    // if(location.key === 'default'){
    setTimeout(() => {
      handleSmoothScroll();
    }, 4000)
    // }
  }, []);

  return (
    <section href="#intro" ref={videoContainerRef} className="relative bg-gradient-to-r from-black via-gray-950 to-gray-950 pb-20 px-8">
      <div className="flex items-center md:mb-12 mb-5">
        <CustomRightArrow />
        <h2 className="text-xl md:text-4xl text-white text-center font-header me-4">
          Upcoming Event
        </h2>
        <hr className="flex-grow  border-0 bg-gradient-to-r from-primary via-gray-950 to-gray-950 p-px  rounded-3xl" />
      </div>
      <video
        className=" aspect-video w-full h-full "
        id="myVideo"
        src={assets.global.HFKC_Intro}
        loop
        muted
      ></video>
    </section>
  );
};

export default IntroVideoSection;
