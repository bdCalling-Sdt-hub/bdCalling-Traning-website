import RootLayout from "@/components/Layouts/RootLayout";
import { Button } from "@/components/ui/button";
import { baseUrl } from "@/config";
import CourseCard from "@/shared/CourseCard";
import { useEffect, useState } from "react";

const CourseHomePage = () => {
  const [courses, setCourses] = useState([]);
  const [seeMore, setSeeMore] = useState(6);

  useEffect(() => {
    baseUrl
      .get(`/course?per_page=${seeMore.toString()}`)
      .then((res) => setCourses(res.data?.data?.data));
  }, [seeMore]);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 gap-y-6 my-12 container">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
      <Button
        className="my-10 mx-auto block"
        onClick={() => setSeeMore(seeMore + 6)}
      >
        See More
      </Button>
    </>
  );
};

export default CourseHomePage;

CourseHomePage.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};
