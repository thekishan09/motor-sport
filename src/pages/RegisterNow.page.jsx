import { assets } from "../assets";
import ThemeButton from "../customComponents/ThemeButton";

const RegistrationPage = () => {
  return (
    <section className="relative h-dvh overflow-hidden bg-background py-20">
      <img
        
        className="absolute top-0 left-0 w-full h-full object-fill"
        src={assets.background.RegistrationPage}
      />
      <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-20  relative h-full bg-black bg-opacity-10 text-secondary p-8 flex-wrap justify-center gap-20">
        <div className="group  bg-black bg-opacity-80  flex flex-col items-center md:p-10 p-5 rounded-2xl shadow-md shadow-primary  hover:shadow-NeonBlue transition duration-700">
          <div className="text-primary text-lg md:text-xl text-center font-header md:mb-10 mb-5">
            HINDUSTAN FORMULA KARTING CHAMPIONSHIP
          </div>
          <div className="text-base md:text-lg mb-8 font-body leading-relaxed text-secondary uppercase text-center flex-grow flex md:items-start items-center">
            Get Your Registration
          
          </div>
          <div className="">
            <a
              href="https://docs.google.com/forms/d/1HhBprvm7_p4zidtL6MVa7gLsc-WEOI489pJRPHXXQ0s/viewform?edit_requested=true"
              target="_blank"
            >
              <ThemeButton label="Register now" />
            </a>
          </div>
        </div>{" "}
        <div className="group  bg-black bg-opacity-80  flex flex-col items-center md:p-10 p-5 rounded-2xl shadow-md shadow-primary  hover:shadow-NeonBlue transition duration-700">
          <div className="text-primary text-lg md:text-xl text-center font-header md:mb-10 mb-5 uppercase">
          Indian E-Bike 2025 Championship
          </div>
          <div className="text-base md:text-lg mb-8 font-body leading-relaxed text-secondary uppercase text-center flex-grow flex md:items-start items-center">
            Get Your Registration
          </div>
          <div className="">
            <a
              href="https://docs.google.com/forms/d/1yJ0ZUoRmdbPeQI8eFsoKyh9OggzAXfpzFcAiv7e_1f0/viewform?edit_requested=true"
              target="_blank"
            >
              <ThemeButton label="Register now" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationPage;
