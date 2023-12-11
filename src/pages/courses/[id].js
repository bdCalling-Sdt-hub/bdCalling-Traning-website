import FlexItem from "@/components/Common/FlexItem";
import CourseDetailDescription from "@/components/CourseDetail/CourseDetailDescription";
import RootLayout from "@/components/Layouts/RootLayout";
import { Button } from "@/components/ui/button";
import { Book, Clock, Globe, Presentation, Users } from "lucide-react";
import { useRouter } from "next/router";
import courseList from "../../../public/db/course.json";

const CourseDetail = () => {
  const { courses } = courseList;
  const router = useRouter();
  const id = router.query.id;
  const filterCourse = courses.filter((course) => course.id.toString() === id);

  const [course] = filterCourse;

  const features = [
    {
      icon: <Clock size={20} color="#2492EB" />,
      key: "Duration",
      value: course?.duration,
    },
    {
      icon: <Book size={20} color="#2492EB" />,
      key: "Lessons",
      value: course?.lessons,
    },
    {
      icon: <Users size={20} color="#2492EB" />,
      key: "Students",
      value: course?.students,
    },
    {
      icon: <Presentation size={20} color="#2492EB" />,
      key: "Skill Level",
      value: course?.skillLevel,
    },
    {
      icon: <Globe size={20} color="#2492EB" />,
      key: "Language",
      value: course?.language,
    },
  ];

  return (
    <div className="container my-10">
      <div className="grid grid-cols-3 gap-7">
        <div className="col-span-2">
          <CourseDetailDescription />
        </div>
        <div>
          <div className="shadow rounded-md p-4">
            <h1 className="font-bold border-b border-dashed pb-2">
              Course Features
            </h1>
            {features.map((item, index) => (
              <div key={index} className="py-2 border-b">
                <FlexItem justify="justify-between">
                  <FlexItem gap="gap-2">
                    <p>{item.icon}</p>
                    <h1>{item.key}</h1>
                  </FlexItem>
                  <h1>{item.value}</h1>
                </FlexItem>
              </div>
            ))}
            <div className="bg-primary text-center rounded-md py-6 mt-14  space-y-2">
              <h2 className="text-lg text-gray-200">Course Fee Offline</h2>
              <h2 className="text-2xl font-bold text-white">
                BDT {course?.price}
              </h2>
              <Button className="  bg-white text-primary">Enroll Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;

CourseDetail.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
