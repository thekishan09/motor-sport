import { useEffect } from "react";
import { images } from "../constants";
import { hideLoader, showLoader } from "../helper/loader";

const GalleryPage = () => {
  useEffect(()=>{
  showLoader();
  },[])

  const handleLoader = (index) => {
    if(index === images.length-1) hideLoader()
  }
  return (
    <section className="min-h-dvh bg-gradient-to-r from-black via-gray-950 to-gray-950 pt-24 pb-20">
      <div className="container mx-auto">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-5">
          {images.map((src, index) => (
            <div key={index} className="mb-5 rounded-lg overflow-hidden break-inside-avoid shadow-xl shadow-background">
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full"
                onLoad={()=> handleLoader(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
