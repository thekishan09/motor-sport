import { useNavigate } from "react-router-dom";
import { assets } from "../assets";
import CustomRightArrow from "../customComponents/CustomRightArrow";
import { ROUTES } from "../constants";

const GallerySection = () => {
  const images = Object.values(assets.gallery);
  const navigate = useNavigate();
  const slicedImages = images.slice(0, 4);

  return (
    <div className="relative bg-gradient-to-r from-black via-gray-950 to-gray-950 text-white py-20 px-8 h-full overflow-auto scrollbar-hide">
      <div className="flex items-center md:mb-12 mb-5">
        <CustomRightArrow />
        <h2 className="text-xl md:text-4xl font-header me-4">Gallery</h2>
        <hr className=" flex-grow  border-0 bg-gradient-to-r from-primary via-gray-950 to-gray-950 p-px  rounded-3xl" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 ">
        {slicedImages?.map((image, index) => {
          return (
            <div 
              onClick={() =>
                slicedImages?.length == index + 1
                  ? navigate(ROUTES.gallery)
                  : null
              }
              key={image}
              className={`group max-h-64  max-w-full hover:shadow-lg hover:shadow-gray-800 overflow-hidden rounded-lg relative ${
                slicedImages?.length == index + 1 ? " cursor-pointer" : ""
              }`}
            >
              <img
                
                className={`h-full w-full  transition-all duration-700 group-hover:scale-110 ease-in-out transform  ${
                  slicedImages?.length == index + 1 ? "blur-sm " : ""
                }`}
                src={image}
                alt=""
              />
              {slicedImages?.length == index + 1 ? (
                <div className="absolute inset-0  flex items-center flex-col md:gap-3 gap-1 justify-center transition-opacity duration-500">
                  <CustomRightArrow
                    className={
                      "transform transition-transform duration-500 group-hover:-rotate-45 bg-background bg-opacity-25 p-1 rounded-full size-10"
                    }
                  />
                  <div className="md:text-xs text-[10px] font-header bg-background p-1 px-2 rounded-full bg-opacity-0 group-hover:bg-opacity-25 ">
                    View more
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GallerySection;
