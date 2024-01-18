import RootLayout from "@/components/Layouts/RootLayout";
import { baseUrl } from "@/config";
import CourseCard from "@/shared/CourseCard";
import { useEffect, useState } from "react";

const CourseHomePage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    baseUrl.get(`/course`).then((res) => setCourses(res.data?.data?.data));
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 gap-y-6 my-12 container">
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
};

export default CourseHomePage;

CourseHomePage.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};
