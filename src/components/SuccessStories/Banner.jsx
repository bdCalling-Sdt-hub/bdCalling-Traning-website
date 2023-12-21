import { motion } from "framer-motion";
import { useState } from "react";
import videos from "../../../public/db/video.json";
import TopHeading from "../Common/TopHeading";
import { AspectRatio } from "../ui/aspect-ratio";
import { Button } from "../ui/button";

const Banner = () => {
  const [title, setTitle] = useState("Success stories");
  const { videoList } = videos;

  const categoryLists = [
    { title: "Success stories" },
    { title: "Events" },
    { title: "Student Journey" },
    { title: "Gallery" },
  ];

  const filterVideo = videoList.filter((item) => item.category === title);

  return (
    <div>
      <TopHeading
        blueText={title}
        description="At bdCalling Academy IT, we believe that success is a journey, not
          a destination. That&#39;s why we&#39;re always looking for new and
          innovative ways to help our learners achieve their goals. In this
          section, we share the stories of our learners who have used our
          products and services to achieve their own success."
      />
      <div className="mt-8 text-center flex flex-col lg:flex-row  gap-2">
        {categoryLists.map((category, index) => (
          <Button
            key={index}
            variant="link"
            onClick={() => setTitle(category.title)}
            className={`${
              title === category.title ? "bg-[#1796fd] text-white" : ""
            }  rounded-md`}
          >
            {category.title}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-12">
        {title === "Gallery"
          ? filterVideo.map((item, index) => (
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.5 }}
                key={index}
                className=" rounded-md "
              >
                <AspectRatio ratio={15 / 9} key={index}>
                  <img
                    src={item.video}
                    alt=""
                    className="w-full h-[400px] object-cover rounded-md animate__animated animate__jackInTheBox"
                  />
                </AspectRatio>
              </motion.div>
            ))
          : filterVideo.map((item, index) => (
              <AspectRatio ratio={15 / 9} key={index}>
                <iframe
                  src={item?.video}
                  className="rounded-md w-full h-[200px] lg:h-[400px]"
                ></iframe>
              </AspectRatio>
            ))}
      </div>
      <Button className="mt-5 mx-auto block">See More</Button>
    </div>
  );
};

export default Banner;
