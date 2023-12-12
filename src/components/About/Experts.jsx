import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import expert from "../../../public/db/expert.json";
import ExpertCard from "../Common/Expert.Card";
import HeadingText from "../Common/headingText";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Experts = () => {
  const { expertList } = expert;
  const swiperContainerStyle = {
    width: "100%",
    padding: "50px 0",
  };
  return (
    <div className="my-8">
      <HeadingText sTitle="Our Mentors" title="Meet our Experts mentors" />
      <p className="text-center">
        Develop skills with the best instructors in the country, click the
        button below.
      </p>
      <Swiper
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView={4}
        navigation
        style={swiperContainerStyle}
      >
        {expertList.map((expert, index) => (
          <SwiperSlide key={index}>
            <ExpertCard data={expert} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Experts;
