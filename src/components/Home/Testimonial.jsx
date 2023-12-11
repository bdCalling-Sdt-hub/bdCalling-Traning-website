import Image from "next/image";
import "swiper/css";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import testimonials from "../../../public/db/testimonial.json";
import HeadingText from "../Common/headingText";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  const { testimonialList } = testimonials;

  const swiperContainerStyle = {
    width: "100%",
    height: "450px",
    padding: "0px 18px",
    marginTop: "50px",
  };

  return (
    <div className="container">
      <HeadingText sTitle={"Testimonial"} title={"What our Student say"} />
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        style={swiperContainerStyle}
      >
        {testimonialList.map((testimonial, index) => (
          <SwiperSlide key={index} className="mt-16">
            <div className="shadow p-5 rounded-md border relative flex justify-center h-[340px] text-center">
              <div className="absolute -top-14 bg-white p-1 shadow rounded-full">
                <Image
                  src={testimonial?.image}
                  className="w-24 h-24 rounded-full"
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
              <div>
                <div className="my-12">
                  <h2 className="text-xl">{testimonial?.name}</h2>
                  <p className="">{testimonial?.designation}</p>
                </div>
                <p>{testimonial?.feedback}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
