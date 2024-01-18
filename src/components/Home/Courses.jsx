import { baseUrl } from "@/config";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import CourseCard from "../../shared/CourseCard";
import { Button } from "../ui/button";

const Courses = ({ categories }) => {
  const [title, setTitle] = useState(0);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    baseUrl
      .get(`/course?category=${title}`)
      .then((res) => setCourses(res.data?.data?.data));
  }, [title]);

  return (
    <div className="container">
      <div className="flex justify-between mt-24">
        <div>
          <h2 className="text-2xl font-bold">Most Popular Courses</h2>
        </div>
        <Link href="/courses">
          <Button className="bg-[#1796fd]">
            View Courses <ChevronRight color="#e8e3e3" size={15} />
          </Button>
        </Link>
      </div>
      <div className="mt-8 text-center flex flex-col lg:flex-row  gap-2">
        <Button
          variant="link"
          onClick={() => setTitle(0)}
          className={`${
            title === 0 ? "bg-[#1796fd] text-white" : ""
          } text-md font-medium`}
        >
          All
        </Button>
        {categories.map((category, index) => (
          <Button
            key={index}
            variant="link"
            onClick={() => setTitle(category.id)}
            className={`${
              title === category.id ? "bg-[#1796fd] text-white" : ""
            }  text-md font-medium capitalize`}
          >
            {category.category_name}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 gap-y-6 my-12">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
