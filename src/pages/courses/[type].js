import AccordionCard from "@/components/Common/AccordionCard";
import AccordionAnswerText from "@/components/Courses/AccordionAnswerText";
import JoinNow from "@/components/Courses/JoinNow";
import SearchCourse from "@/components/Courses/SearchCourse";
import RootLayout from "@/components/Layouts/RootLayout";
import { Button } from "@/components/ui/button";
import { baseUrl } from "@/config";
import CourseCard from "@/shared/CourseCard";
import MetaTag from "@/shared/MetaTag";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CoursesPage = () => {
  const [courseLoad, setCourseLoad] = useState(6);
  const router = useRouter();
  const [courses, setCourses] = useState([]);
  const status = router.query.type;
  const [error, setError] = useState("");

  useEffect(() => {
    baseUrl
      .get(`/course?status=${status}`)
      .then((res) => setCourses(res.data?.data?.data))
      .catch((err) => {
        setError(err.response?.data?.message);
        setCourses([]);
      });
  }, [status]);

  const coursesFilter = ["Online Courses", "Offline Courses", "Video Courses"];
  const catagories = [
    "Wordpress",
    "Digital Marketing",
    "Graphics Design",
    "UX/UI Design",
    "APP Developer with Flutter",
    "Front-End Development",
    "Lead & Data Entry",
    "Visual Design Fundamentals",
    "Prototyping and Wireframing",
  ];
  return (
    <div className="container">
      <MetaTag title="Courses" />
      <div className="text-center my-10">
        <h1 className="text-5xl font-bold mb-2">Courses</h1>
        <p className="w-3/4 mx-auto">
          Our comprehensive course catalog encompasses a wide range of subjects,
          from in-demand technical skills to creative pursuits and personal
          development topics. Delve into the intricacies of coding, master the
          art of photography, or unlock the secrets of effective communication.
        </p>
        <SearchCourse />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-12">
        <div className="space-y-4">
          <AccordionCard title="Courses">
            {coursesFilter.map((item, index) => (
              <AccordionAnswerText key={index} data={item} />
            ))}
          </AccordionCard>

          <AccordionCard title="Course Categories">
            {catagories.map((item, index) => (
              <AccordionAnswerText key={index} data={item} />
            ))}
          </AccordionCard>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {courses.length > 0 &&
              courses.map((course, index) => (
                <CourseCard key={index} course={course} />
              ))}
          </div>
          {courses.length === 0 && (
            <p className="text-center text-4xl mt-16 text-gray-200">
              {status} Courses not found
            </p>
          )}
          {courses.length > 0 && (
            <Button
              className="mt-8 mx-auto block"
              onClick={() => setCourseLoad(courseLoad + 6)}
            >
              See More
            </Button>
          )}
        </div>
      </div>
      <JoinNow />
    </div>
  );
};

export default CoursesPage;

CoursesPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
