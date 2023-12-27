import { motion } from "framer-motion";
import { useState } from "react";
import descriptions from "../../../public/db/successStories.json";
import videos from "../../../public/db/video.json";
import TopHeading from "../Common/TopHeading";
import { AspectRatio } from "../ui/aspect-ratio";
import { Button } from "../ui/button";

const Banner = () => {
  const [title, setTitle] = useState("Success stories");
  const { videoList } = videos;
  const { successStories, studentJourney, gallery, events } = descriptions;

  const categoryLists = [
    { title: "Success stories" },
    { title: "Events" },
    { title: "Student Journey" },
    { title: "Gallery" },
  ];

  const filterVideo = videoList.filter((item) => item.category === title);

  const description =
    title === "Success stories"
      ? successStories
      : title === "Events"
      ? events
      : title === "Student Journey"
      ? studentJourney
      : title === "Gallery"
      ? ""
      : "";

  return (
    <div>
      <TopHeading blueText={title} description={description} />
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
                whileHover={{ scale: 1.02, transition: 0.8 }}
                whileTap={{ scale: 0.5 }}
                key={index}
                className="rounded-md"
              >
                <AspectRatio
                  ratio={16 / 9}
                  key={index}
                  style={{ position: "relative" }}
                >
                  <div style={{ width: "100%", paddingBottom: "62.5%" }}>
                    <img
                      src={item.video}
                      alt=""
                      className="w-full h-full absolute top-0 left-0 object-cover rounded-md animate__animated animate__jackInTheBox"
                    />
                  </div>
                </AspectRatio>
              </motion.div>
            ))
          : filterVideo.map((item, index) => (
              <AspectRatio
                ratio={16 / 9}
                key={index}
                style={{ position: "relative" }}
              >
                <div style={{ width: "100%", paddingBottom: "62.5%" }}>
                  <iframe
                    src={item?.video}
                    title={`Video ${index}`}
                    className="rounded-md w-full h-full absolute top-0 left-0"
                    style={{ objectFit: "cover" }}
                    allowFullScreen
                  ></iframe>
                </div>
              </AspectRatio>
            ))}
      </div>
      <Button className="mt-5 mx-auto block">See More</Button>
    </div>
  );
};

export default Banner;
