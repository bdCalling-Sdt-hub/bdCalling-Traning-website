import { Star } from "lucide-react";
import { useState } from "react";
import FlexItem from "../Common/FlexItem";
import { Button } from "../ui/button";
import Curriculum from "./TabContent/Curriculum";
import Instructor from "./TabContent/Instructor";
import Overview from "./TabContent/Overview";
import Reviews from "./TabContent/Reviews";

const CourseDetailDescription = () => {
  const [title, setTitle] = useState("Overview");
  const buttons = ["Overview", "Curriculum", "Reviews", "Instructor"];
  return (
    <div>
      <img src="/images/courseDetail.png" alt="" className="w-full mb-8" />
      <FlexItem gap="gap-4">
        <img src="/images/instructor.png" alt="" />
        <div>
          <h2 className="font-bold">Ashraful</h2>
          <p>Top Rated Freelancer at Upwork</p>
        </div>
        <div className="bg-primary text-white p-[2px] rounded">
          <p>UI/UX Designer</p>
        </div>
        <div className="flex items-center gap-1">
          <div className="flex">
            <Star size={20} color="#ffc60b" />
            <Star size={20} color="#ffc60b" />
            <Star size={20} color="#ffc60b" />
            <Star size={20} color="#ffc60b" />
            <Star size={20} color="#ffc60b" />
          </div>
          (20 Reviews)
        </div>
      </FlexItem>
      <div className="bg-gray-100 p-4 rounded-md mt-8">
        <FlexItem gap="gap-2">
          {buttons.map((btnText, index) => (
            <Button
              key={index}
              variant="link"
              onClick={() => setTitle(btnText)}
              className={`${
                title === btnText ? "bg-[#1796fd] text-white" : "bg-white"
              }  rounded-md`}
            >
              {btnText}
            </Button>
          ))}
        </FlexItem>
      </div>
      {title === "Overview" && <Overview />}
      {title === "Curriculum" && <Curriculum />}
      {title === "Reviews" && <Reviews />}
      {title === "Instructor" && <Instructor />}
    </div>
  );
};

export default CourseDetailDescription;
