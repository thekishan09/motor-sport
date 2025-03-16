import { assets } from "../assets";
import { MARQUEE_DIRECTION } from "../constants";
import CustomMarquee from "../customComponents/CustomMarquee";
import CustomRightArrow from "../customComponents/CustomRightArrow";

const PromotingSection = () => {
  const logos = Object.values(assets?.promoting);
  return (
    <section className="relative bg-gradient-to-r from-black via-gray-950 to-gray-950 text-white pb-20  h-full">
      <div className="mb-20 px-8">
        <div className="flex items-center mb-5">
          <CustomRightArrow />
          <h2 className="text-xl md:text-4xl font-header me-4">Promoting</h2>
          <hr className=" flex-grow border-0 bg-gradient-to-r from-primary via-gray-950 to-gray-950 p-px  rounded-3xl" />
        </div>
      </div>
      <div className=" overflow-hidden md:py-20 py-6 bg-gradient-to-r  from-gray-200 via-gray-400 to-gray-500">
        <CustomMarquee items={logos} dir={MARQUEE_DIRECTION.left} />
      </div>
    </section>
  );
};

export default PromotingSection;
