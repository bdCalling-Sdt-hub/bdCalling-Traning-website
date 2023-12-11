import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HeadingText from "../Common/headingText";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const StudentSuccess = () => {
  const swiperContainerStyle = {
    width: "80%",
    height: "500px",
    marginTop: "40px",
  };
  const videoLinkLists = [
    "https://www.youtube.com/embed/LW37AQikbtE?si=VtKcmJX4h-nfR2Mk&amp;start=3",
    "https://www.youtube.com/embed/oxbeaeSIAjo?si=fx57zTaGguB4ed5G&amp;start=36",
    "https://www.youtube.com/embed/3bxMCZIaNxo?si=W3pgCUvNdJ7x-qKd&amp;start=15",
  ];
  return (
    <div className="container my-14">
      <HeadingText sTitle={"Story"} title={"Student Success Story"} />
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        centeredSlides
        style={swiperContainerStyle}
      >
        {videoLinkLists.map((video, index) => (
          <SwiperSlide key={index} className="bg-primary p-1 rounded-md">
            <div className="shadow  rounded-md border relative flex justify-center text-center">
              <iframe
                width="100%"
                height="490px"
                src={video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="rounded-md"
              ></iframe>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StudentSuccess;
