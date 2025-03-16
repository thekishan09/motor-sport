import { assets } from "../assets";
import CustomRightArrow from "../customComponents/CustomRightArrow";

const TesttimonialSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-black via-gray-950 to-gray-950 text-white pb-20 px-8 min-h-dvh flex flex-col">
      <div className="flex items-center mb-20">
        <CustomRightArrow />
        <h2 className="text-xl md:text-4xl font-header me-4">Testimonial</h2>
        <hr className=" flex-grow  border-0 bg-gradient-to-r from-primary via-gray-950 to-gray-950 p-px  rounded-3xl" />
      </div>
      {/* Testimonial section */}
      <div className="py-20">
        <TestimonialCard />
      </div>
    </section>
  );
};

export default TesttimonialSection;

const TestimonialCard = ({ name, content, profile }) => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-10 px-4">
        <div className="md:max-w-96 w-full group cursor-pointer bg-gray-950 rounded-2xl shadow-xl shadow-background border border-background transition-all duration-700 hover:shadow-lg hover:shadow-gray-800 hover:border-gray-800 p-6 relative text-center">
          <img
            
            src={assets.gallery.img_6}
            alt="User Name"
            className="md:w-20 w-14 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <h3 className="mt-11 font-header  md:text-lg text-base font-bold text-NeonBlue">
            Rohit Gaikwad
          </h3>
          <p className="text-sm text-neutral group-hover:text-secondary mt-4 italic ">
            "Best Organising and technical team Perfect management"
          </p>
        </div>
      </div>
    </>
  );
};
