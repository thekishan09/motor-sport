import { assets } from "../assets";

function QuadBikePage() {
  return (
    <div className="relative h-dvh overflow-hidden bg-background">
      <img
        
        className="absolute top-0 left-0 w-full h-full md:block hidden "
        src={assets.background.quadDesktop}
      />
      <img
        
        className="absolute top-0 left-0 w-full h-full block md:hidden "
        src={assets.background.quadMobile}
      />
    </div>
  );
}

export default QuadBikePage;
