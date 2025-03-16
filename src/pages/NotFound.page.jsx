import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../constants";
import { assets } from "../assets";
import ThemeButton from "../customComponents/ThemeButton";

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <section className="relative h-dvh overflow-hidden bg-background">
      <div id="notfound" className="absolute top-0 left-0 w-full h-full">
        <img
          
          className="w-full h-full md:block hidden "
          src={assets.background.errorDesktop}
        />
        <img
          
          className="w-full h-full block md:hidden "
          src={assets.background.errorMobile}
        />
      </div>
      <div className="relative h-full bg-black bg-opacity-10 text-secondary p-8 flex items-end justify-center pb-20">
        <ThemeButton
          onClick={() => navigate(ROUTES.home)}
          label="Back to track"
        />
      </div>
    </section>
  );
}

export default NotFoundPage;
