import { assets } from "../assets";
import CustomMarquee from "../customComponents/CustomMarquee";
import CustomRightArrow from "../customComponents/CustomRightArrow";

const SupportSection = () => {
  const logos = Object.values(assets?.support);

  return (
    <section className="relative bg-gradient-to-r from-black via-gray-950 to-gray-950 text-white pb-20  h-full">
      <div className="mb-20 px-8">
        <div className="flex items-center mb-5">
          <CustomRightArrow />
          <h2 className="text-xl md:text-4xl font-header me-4">Supported By</h2>
          <hr className=" flex-grow border-0 bg-gradient-to-r from-primary via-gray-950 to-gray-950 p-px  rounded-3xl" />
        </div>
      </div>
      <div className=" overflow-hidden md:py-20 py-6 bg-gradient-to-r  from-gray-300 via-gray-400 to-gray-500">
        <CustomMarquee items={logos} />
      </div>
      {/* <div className="md:w-3/4 mx-auto overflow-hidden md:py-20 py-6 bg-gradient-to-l rounded-full from-gray-700 to-black shadow-inner shadow-NeonBlue">
        <CustomAutoScroll items={brandLogos} />
      </div> */}
    </section>
  );
};

export default SupportSection;
