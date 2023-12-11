import AccordionCard from "@/components/Common/AccordionCard";
import AccordionAnswerText from "@/components/Courses/AccordionAnswerText";
import JoinNow from "@/components/Courses/JoinNow";
import SearchCourse from "@/components/Courses/SearchCourse";
import RootLayout from "@/components/Layouts/RootLayout";
import { Button } from "@/components/ui/button";
import CourseCard from "@/shared/CourseCard";
import { useState } from "react";
import coursesList from "../../../public/db/course.json";

const CoursesPage = () => {
  const { courses } = coursesList;
  const [courseLoad, setCourseLoad] = useState(6);
  const coursesFilter = [
    "All Course",
    "Online Course",
    "Offline Course",
    "Video Course",
  ];
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
      <div className="text-center my-10">
        <h1 className="text-5xl font-bold">Course</h1>
        <p>
          Unlock your IT potential with bdCAlling today and embark on a journey
          of learning and growth!
        </p>
        <SearchCourse />
      </div>
      <div className="grid grid-cols-3 gap-5 my-12">
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
          <div className="grid grid-cols-2 gap-4">
            {courses.slice(0, courseLoad).map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
          <Button
            className="mt-5 mx-auto block"
            onClick={() => setCourseLoad(courseLoad + 6)}
          >
            See More
          </Button>
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
