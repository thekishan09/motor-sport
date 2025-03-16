import { contactDetails } from "../constants";
import ThemeButton from "../customComponents/ThemeButton";

const ContactUsPage = () => {
  return (
    <section className="bg-gradient-to-r from-black via-gray-950 to-gray-950 py-24 font-body">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:items-stretch md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">
          <div className="flex flex-col justify-between lg:py-5">
            <div>
              <h2 className="text-3xl font-bold  text-white sm:text-4xl  lg:text-5xl">
                Let&lsquo;s  Get in Touch
              </h2>
              <p className="max-w-xl mx-auto mt-4 text-base  text-white">
                Contact us
              </p>

              <img
                
                className="relative z-10 max-w-xs mx-auto -mb-16 md:hidden"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/curve-line-mobile.svg"
                alt=""
              />

              <img
                
                className="hidden w-full translate-x-24 translate-y-8 md:block"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/curve-line.svg"
                alt=""
              />
            </div>

            <div className="hidden md:mt-auto md:block">
              {contactDetails?.map((i) => (
                <a
                  key={i?.id}
                  className="flex items-center gap-5 group cursor-pointer w-fit p-3 mb-5 text-sm"
                  href={i?.link}
                  target="_blank"
                >
                  <div className=" w-10 h-10 relative ">
                    {/* <div className="w-full h-full rounded-full z-0 custom-shadow relative animate-spin-slow"></div> */}
                    <div className="shadow-lg shadow-gray-800 flex items-center justify-center bg-gradient-to-r from-black via-gray-950 to-gray-950  w-full h-full rounded-2xl absolute top-0 left-0  z-10 group-hover:scale-110">
                      <span className="text-secondary group-hover:text-secondary">
                        {i?.icon}
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className=" text-neutral">{i?.title}</div>
                    <div className=" text-secondary">{i?.description}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:pl-12 my-auto">
            <div className="overflow-hidden bg-gray-950 rounded-lg shadow-xl shadow-background border border-background font-body ">
              <div className="p-6 sm:p-10">
                {/* <h3 className="text-3xl font-semibold text-secondary">
                  Get a free quote
                </h3> */}
                {/* <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do 
                  amet sint.
                </p> */}

                <form onSubmit={(e) => e.preventDefault()} className="mt-4">
                  <div className="space-y-6">
                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-neutral"
                      >

                        Your name
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Enter your full name"
                          className="block w-full px-4 py-4 text-neutral placeholder-gray-500 transition-all duration-200 bg-gray-950 border border-gray-800 rounded-md focus:outline-none focus:ring-gray-700 focus:border-gray-700"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-neutral"
                      >

                        Your Message
                      </label>
                      <div className="mt-2.5 relative">
                        <textarea
                          type="text"
                          rows="5"
                          name=""
                          id=""
                          placeholder="Your thoughts here ..."
                          className="block w-full px-4 py-4 text-neutral placeholder-gray-500 transition-all duration-200 bg-gray-950 border border-gray-800 rounded-md focus:outline-none focus:ring-gray-700 focus:border-gray-700"

                        />
                      </div>
                    </div>
                    <div>
                      <ThemeButton label="Submit" width="full" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="md:hidden">
            {contactDetails?.map((i) => (
              <a
                key={i?.id}
                className="flex items-center gap-5 group cursor-pointer w-fit p-3 mb-5"
                href={i?.link}
                target="_blank"
              >
                <div className=" md:size-10 size-8 relative ">
                  <div className="w-full h-full rounded-full z-0 custom-shadow relative animate-spin-slow"></div>
                  <div className=" flex items-center justify-center bg-gradient-to-r from-black via-gray-950 to-gray-950  w-full h-full rounded-2xl absolute top-0 left-0  z-10 group-hover:scale-110">
                    <span className="text-neutral group-hover:text-secondary">
                      {i?.icon}
                    </span>
                  </div>
                </div>

                <div className="md:text-base text-xs">
                  <div className=" text-neutral">{i?.title}</div>
                  <div className=" text-secondary">{i?.description}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
