import { useRouter } from "next/router";
import { useState } from "react";
import { Button } from "../ui/button";
import Curriculum from "./TabContent/Curriculum";
import Instructor from "./TabContent/Instructor";
import Overview from "./TabContent/Overview";
import Reviews from "./TabContent/Reviews";

const CourseDetailDescription = ({ data: course }) => {
  const [title, setTitle] = useState("Overview");
  const buttons = ["Overview", "Curriculum", "Reviews", "Instructor"];
  const router = useRouter();

  console.log(course);

  return (
    <div>
      <img src="/images/courseDetail.png" alt="" className="w-full mb-8" />

      <div className="bg-gray-100 p-4 rounded-md mt-8">
        <div className="flex flex-col lg:flex-row items-center gap-2">
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
        </div>
      </div>
      {title === "Overview" && <Overview data={course} />}
      {title === "Curriculum" && <Curriculum data={course} />}
      {title === "Reviews" && <Reviews />}
      {title === "Instructor" && <Instructor />}
    </div>
  );
};

export default CourseDetailDescription;
