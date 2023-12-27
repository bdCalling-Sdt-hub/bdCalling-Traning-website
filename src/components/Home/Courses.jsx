import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import coursesList from "../../../public/db/course.json";
import CourseCard from "../../shared/CourseCard";
import { Button } from "../ui/button";

const Courses = () => {
  const [title, setTitle] = useState("all");
  const categoryLists = [
    { title: "WordPress" },
    { title: "Digital Marketing" },
    { title: "Graphics Design" },
    { title: "UX/UI Design" },
    { title: "APP Development" },
    { title: "Front-End" },
    { title: "Lead Generation & Data Entry" },
  ];

  const { courses } = coursesList;

  let filterCourses;
  if (title !== "all") {
    filterCourses = courses.filter((course) => course.category === title);
  } else {
    filterCourses = courses;
  }

  return (
    <div className="container">
      <div className="flex justify-between mt-24">
        <div>
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
          className={`${
            title === "all" ? "bg-[#1796fd] text-white" : ""
          } text-md font-medium`}
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
            }  text-md font-medium`}
          >
            {category.title}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 gap-y-6 my-12">
        {filterCourses.slice(0, 6).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
