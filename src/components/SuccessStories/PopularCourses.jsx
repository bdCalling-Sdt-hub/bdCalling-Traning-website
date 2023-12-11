import CourseCard from "@/shared/CourseCard";
import coursesList from "../../../public/db/course.json";

const PopularCourses = () => {
  const { courses } = coursesList;
  return (
    <div>
      <h1 className="text-center text-4xl font-bold my-10">Popular Courses</h1>
      <div className="grid grid-cols-3 gap-4">
        {courses.slice(0, 3).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
