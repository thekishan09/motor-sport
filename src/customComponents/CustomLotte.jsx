import { useRef } from "react";
import Lottie from "lottie-react";

const CustomLottie = ({
  lottieJson = null,
  height = null,
  width = null,
  autoPlay = true,
  loop = false,
  style = null,
  className
}) => {
  const lottieRef = useRef(null);
  return lottieJson ? (
    <Lottie
      className={className}
      lottieRef={lottieRef}
      animationData={lottieJson}
      loop={loop}
      autoplay={autoPlay}
      style={{
        padding: 0,
        margin: 0,
        height: height,
        width: width,
        fontSize: "50px",
        ...style,
      }}
    />
  ) : null;
};

export default CustomLottie;
