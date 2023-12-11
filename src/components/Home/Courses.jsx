import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import coursesList from "../../../public/db/course.json";
import CourseCard from "../../shared/CourseCard";
import { Button } from "../ui/button";

const Courses = () => {
  const [title, setTitle] = useState("all");
  const categoryLists = [
    { title: "wordpress" },
    { title: "Digital Marketing" },
    { title: " Graphics" },
    { title: " UX/UI Design" },
    { title: " APP Developer" },
    { title: "Front-End " },
    { title: " Lead & Data Entry " },
  ];

  const { courses } = coursesList;

  return (
    <div className="container">
      <div className="flex justify-between mt-24">
        <div>
          <h3>Top Course</h3>
          <h2 className="text-2xl font-bold">Most popular courses</h2>
        </div>
        <Link href="/courses">
          <Button className="bg-[#1796fd]">
            View Course <ChevronRight color="#e8e3e3" size={15} />
          </Button>
        </Link>
      </div>
      <div className="mt-8 text-center flex flex-col lg:flex-row  gap-2">
        <Button
          variant="link"
          onClick={() => setTitle("all")}
          className={`${title === "all" ? "bg-[#1796fd] text-white" : ""} `}
        >
          All
        </Button>
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
      <div className="grid grid-cols-3 gap-4 my-12">
        {courses.slice(0, 6).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
      ;
    </div>
  );
};

export default Courses;
