import Lottie from "react-lottie";
import animationData from "../../../public/images/plane.json";

const LottiePlane = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default LottiePlane;
