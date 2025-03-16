import { assets } from "../assets";

const ComingSoonPage = () => {
  return (
    <div className="relative h-dvh overflow-hidden bg-background">
      <img
        
        className="absolute top-0 left-0 w-full h-full"
        src={assets.global.commingSoon}
      />
    </div>
  );
};

export default ComingSoonPage;
