import React from "react";
import Marquee from "react-fast-marquee";
import { MARQUEE_DIRECTION } from "../constants";

const CustomMarquee = ({ items, dir = MARQUEE_DIRECTION.right }) => {
  return (
    <Marquee loop={0} autoFill direction={dir}>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
        {items?.map((i) => (
          <li key={i} className="max-w-[150px] max-h-[150px]">
            <img
              
              src={i}
              alt={"brand logo"}
              className="h-full w-full"
              // className="md:max-w-20 md:max-h-20 max-w-20 max-h-20 min-w-10"
            />
          </li>
        ))}
      </ul>
    </Marquee>
  );
};

export default CustomMarquee;
