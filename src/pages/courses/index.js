import RootLayout from "@/components/Layouts/RootLayout";
import CourseCard from "@/components/ui/courseCard";
import coursesList from "../../../public/db/course.json";

const CoursesPage = () => {
  const { courses } = coursesList;
  return (
    <div className="container">
      <div className="grid grid-cols-3 gap-4 my-12">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;

CoursesPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
