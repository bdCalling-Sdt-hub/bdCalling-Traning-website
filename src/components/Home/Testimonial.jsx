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
    marginTop: "50px",
    padding: "0 10px",
  };

  return (
    <div className="container">
      <HeadingText sTitle={"Testimonial"} title={"Student's Feedback"} />
      <div className="lg:mx-28">
        <Swiper
          modules={[Pagination, A11y, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            690: {
              slidesPerView: 2,
            },
          }}
          pagination={{ clickable: true }}
          style={swiperContainerStyle}
        >
          {testimonialList.map((testimonial, index) => (
            <SwiperSlide key={index} className="mt-16">
              <div
                className="p-5 rounded-md relative flex justify-center h-[350px] lg:h-[340px] text-center"
                style={{
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                }}
              >
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
    </div>
  );
};

export default Testimonial;
