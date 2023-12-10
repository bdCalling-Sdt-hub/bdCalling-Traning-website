import RootLayout from "@/components/Layouts/RootLayout";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CourseCard from "@/shared/CourseCard";
import { ChevronDown, Search } from "lucide-react";
import coursesList from "../../../public/db/course.json";

const CoursesPage = () => {
  const { courses } = coursesList;
  const items = [
    { title: "All Course" },
    { title: "Online Course" },
    { title: "Offline Course" },
    { title: "Video Course" },
  ];
  const catagories = [
    "Wordpress",
    "Digital Marketing",
    "Graphics Design",
    "UX/UI Design",
    "APP Developer with Flutter",
    "Front-End Development",
    "Lead & Data Entry",
  ];
  return (
    <div className="container">
      <div className="text-center my-10">
        <h1 className="text-5xl font-bold">Course</h1>
        <p>
          Unlock your IT potential with bdCAlling today and embark on a journey
          of learning and growth!
        </p>
        <div className="border rounded-3xl h-14 flex items-center  gap-2 px-2 mt-10">
          <input
            type="text"
            placeholder="Search here..."
            className=" h-full w-[88%] bg-transparent outline-none"
          />
          <DropdownMenu>
            <DropdownMenuTrigger className="border h-[80%] px-4 rounded-3xl bg-[#e1ecf4] text-primary flex  items-center">
              Course <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Wordpress</DropdownMenuItem>
              <DropdownMenuItem>Digital Marketing</DropdownMenuItem>
              <DropdownMenuItem>UI/UX Designer</DropdownMenuItem>
              <DropdownMenuItem>App Development</DropdownMenuItem>
              <DropdownMenuItem>Web Design</DropdownMenuItem>
              <DropdownMenuItem>
                User-Centered Design Principles
              </DropdownMenuItem>
              <DropdownMenuItem>Visual Design Fundamentals</DropdownMenuItem>
              <DropdownMenuItem>Prototyping and Wireframing</DropdownMenuItem>
              <DropdownMenuItem>Designing for Accessibility</DropdownMenuItem>
              <DropdownMenuItem>UI/UX for Mobile Games</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <button className="bg-primary h-12 w-12 flex items-center justify-center rounded-full">
            <Search color="#ffd" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 my-12">
        <div>
          <div className="shadow p-4 rounded-md">
            {items.map((item, index) => (
              <div
                className="flex items-center justify-between mb-4"
                key={index}
              >
                <div className="flex items-center gap-2">
                  <Checkbox id={`terms${index}`} />
                  <label
                    htmlFor={`terms${index}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {item.title}
                  </label>
                </div>
                <h1>(10)</h1>
              </div>
            ))}
          </div>
          <div className="shadow p-4 rounded-md mt-5">
            {catagories.map((item, index) => (
              <div
                className="flex items-center justify-between mb-4"
                key={index}
              >
                <div className="flex items-center gap-2">
                  <Checkbox id={`terms0${index}`} />
                  <label
                    htmlFor={`terms0${index}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {item}
                  </label>
                </div>
                <h1>(10)</h1>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-4">
            {courses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;

CoursesPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
