import { useState } from "react";
import videos from "../../../public/db/video.json";
import TopHeading from "../Common/TopHeading";
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
        description="At Learn With bdCalling IT, we believe that success is a journey, not
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
      <div className="grid grid-cols-2 gap-3 mt-12">
        {title === "Gallery"
          ? filterVideo.map((item, index) => (
              <div key={index} className=" rounded-md ">
                <img
                  src={item.video}
                  alt=""
                  className="w-full h-[350px] object-cover rounded-md"
                />
              </div>
            ))
          : filterVideo.map((item, index) => (
              <div
                key={index}
                className="shadow p-2 rounded-md border relative flex justify-center text-center"
              >
                <iframe
                  width="100%"
                  height="400px"
                  src={item?.video}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  className="rounded-md"
                ></iframe>
              </div>
            ))}
      </div>
      <Button className="mt-5 mx-auto block">See More</Button>
    </div>
  );
};

export default Banner;
