import { useNavigate } from "react-router-dom";
import { assets } from "../assets";
import { ROUTES, kartEvents } from "../constants";
import ThemeButton from "../customComponents/ThemeButton";

function SeasonPage({ id, handleKartEvent, isHome = false }) {
  const navigate = useNavigate();
  return (
    <>
      <section className="bg-gradient-to-r from-black via-gray-950 to-gray-950 py-24 flex items-center justify-center font-body min-h-dvh">
        <div>
          <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8 flex-grow mb-20">
            <div className="grid grid-cols-1 md:items-center  md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">
              <div className="flex flex-col lg:py-5">
                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:leading-tight lg:text-5xl">
                  {kartEvents[id].data.heading}
                </h2>

                <div className="">
                  <p className="text-base font-semibold  mt-6 text-primary">
                   {kartEvents[id].host}
                  </p>
                  <p className="text-neutral font-header">
                    {kartEvents[id].year}
                  </p>

                  <div className=" mt-8">
                    <ul className=" text-neutral md:text-sm text-xs font-body list-disc uppercase ml-4 font-semibold">
                      {kartEvents[id].data.subHeading.map((i) => (
                        <li className="mb-2" key={i}>
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl size-fit p-10">
                <img
                  
                  className="size-full aspect-auto"
                  src={kartEvents[id].img}
                  alt="null"
                />
              </div>
            </div>
            {kartEvents[id].data?.awards ? (
              <div className=" mt-8  bg-black bg-opacity-10 relative rounded-3xl shadow-md shadow-primary pb-5 border border-primary ">
                <p className="lg:text-3xl text-xl md:text-2xl font-header uppercase py-3 px-6 rounded-lg border border-primary text-white absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-950">
                  Awards
                </p>

                <div className="max-h-96 overflow-auto mt-8 py-10 md:px-20 px-6 flex flex-col gap-y-5">
                  {kartEvents[id].data?.awards?.map((i) => (
                    <div
                      className="md:text-lg text-sm relative flex justify-between md:flex-row flex-col flex-wrap bg-from-gray-900 via-gray-800 to-gray-700 rounded-lg shadow shadow-neutral md:px-6 px-4 py-3 font-body leading-relaxed text-secondary uppercase"
                      key={i.id}
                    >
                      {" "}
                      {i?.img ? <img src={i.img} className="h-14 absolute -left-5 -top-3" /> : null}
                      <span>{i.title}</span>
                      <span className="text-neutral font-semibold">
                        {i.team}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
          {
            <div className="mx-auto mt-auto text-center">
              <ThemeButton
                label="Go Back"
                onClick={() =>
                  isHome ? navigate(ROUTES.home) : handleKartEvent(-1)
                }
              />
            </div>
          }
        </div>
      </section>
      {/* particular season */}
    </>
  );
}

export default SeasonPage;
