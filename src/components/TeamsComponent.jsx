import React from "react";
import { assets } from "../assets";
import { teamData } from "../constants";

const TeamsComponent = () => {
  const higherAuthorities = teamData.slice(0, 9);
  const officials = teamData.slice(9, 16);
  const ambassador = teamData.slice(16, 19);
  const coordinator = teamData.slice(19, 24);
  const volunteer = teamData.slice(24);

  return (
    <section className="py-10 sm:py-16 lg:py-24 font-body">
      <div className="mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center md:mb-9 mb-5">
          <h2 className="text-primary lg:text-3xl text-xl md:text-2xl font-header">
            Meet the brains
          </h2>
        </div>
        {/* higherAuthorities */}
        <div className="flex flex-wrap justify-center gap-y-8 gap-x-10 mx-auto mb-10">
          {higherAuthorities.map((i) => (
            <React.Fragment key={i.id}>
              <div className="w-52 h-auto">
                <img
                  className={`object-cover w-52 h-52 aspect-square rounded-lg shadow-lg  shadow-gray-900`}
                  src={i.img ?? assets.global.default_profile}
                  alt=""
                />
                <p className="mt-8 text-secondary group-hover:text-neonblue tracking-wider text-sm">
                  {i.member_name}
                </p>
                <p className="mt-1 text-xs font-semibold font-body leading-relaxed text-neutral">
                  {i.designation}
                </p>
              </div>
              {/* <div className="hidden lg:block"></div> */}
            </React.Fragment>
          ))}
        </div>
        {/* general members */}
        <div className="flex flex-wrap justify-around gap-y-8 gap-x-10 mx-auto mb-10">
          {officials.map((i) => (
            <React.Fragment key={i.id}>
              <div className="w-32 h-auto">
                <img
                  className={`object-cover mx-auto rounded-lg w-32 h-32 aspect-square shadow-lg shadow-gray-900`}
                  src={i.img ?? assets.global.default_profile}
                  alt=""
                />
                <p className="mt-8 text-secondary group-hover:text-neonblue tracking-wider text-sm">
                  {i.member_name}
                </p>
                <p className="mt-1 text-xs font-semibold font-body leading-relaxed text-neutral">
                  {i.designation}
                </p>
              </div>
              {/* <div className="hidden lg:block"></div> */}
            </React.Fragment>
          ))}
        </div>
        {/* ambassador */}
        <div className="flex flex-wrap justify-around gap-y-8 gap-x-10 mx-auto mb-10">
          {ambassador.map((i) => (
            <React.Fragment key={i.id}>
              <div className="w-32 h-auto">
                <img
                  className={`object-cover mx-auto rounded-lg w-32 h-32 aspect-square shadow-lg shadow-gray-900`}
                  src={i.img ?? assets.global.default_profile}
                  alt=""
                />
                <p className="mt-8   text-secondary group-hover:text-neonblue tracking-wider text-sm">
                  {i.member_name}
                </p>
                <p className="mt-1 text-xs font-semibold font-body leading-relaxed text-neutral">
                  {i.designation}
                </p>
              </div>
              {/* <div className="hidden lg:block"></div> */}
            </React.Fragment>
          ))}
        </div>
        {/* coordinator */}
        <div className="flex flex-wrap justify-around gap-y-8 gap-x-10 mx-auto mb-10">
          {coordinator.map((i) => (
            <React.Fragment key={i.id}>
              <div className="w-32 h-auto">
                <img
                  className={`object-cover mx-auto rounded-lg w-32 h-32 aspect-square shadow-lg shadow-gray-900`}
                  src={i.img ?? assets.global.default_profile}
                  alt=""
                />
                <p className="mt-8   text-secondary group-hover:text-neonblue tracking-wider text-sm">
                  {i.member_name}
                </p>
                <p className="mt-1 text-xs font-semibold font-body leading-relaxed text-neutral">
                  {i.designation}
                </p>
              </div>
              {/* <div className="hidden lg:block"></div> */}
            </React.Fragment>
          ))}
        </div>{" "}
        {/* volunteer */}
        <div className="flex flex-wrap justify-around gap-y-8 gap-x-10 mx-auto mb-10">
          {volunteer.map((i) => (
            <React.Fragment key={i.id}>
              <div className="w-32 h-auto">
                <img
                  className={`object-cover mx-auto rounded-lg w-32 h-32 aspect-square shadow-lg shadow-gray-900`}
                  src={i.img ?? assets.global.default_profile}
                  alt=""
                />
                <p className="mt-8   text-secondary group-hover:text-neonblue tracking-wider text-sm">
                  {i.member_name}
                </p>
                <p className="mt-1 text-xs font-semibold font-body leading-relaxed text-neutral">
                  {i.designation}
                </p>
              </div>
              {/* <div className="hidden lg:block"></div> */}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamsComponent;
