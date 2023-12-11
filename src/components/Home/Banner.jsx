import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Search, Star } from "lucide-react";

const Banner = () => {
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
    <div className="bg-gradient-to-r from-[#F3F3F3] to-[#EAFCFF] h-auto py-14">
      <div className="grid grid-cols-2 gap-40 items-center container">
        <div className="space-y-4">
          <h2 className="text-2xl">Welcome to</h2>
          <h1 className="text-4xl font-bold">
            Learn With <span className="text-[#1696fd]">bdCalling</span>
          </h1>
          <p>
            Welcome to Learn with bdCalling , an innovative learning platform!
            Get ready to engage on a journey of knowledge with our innovative
            learning platform. Explore a wide range of courses, interactive
            lessons, and expert instructors, all designed to help you reach your
            full potential.
          </p>
          <div className="bg-white  shadow  rounded-full h-14 flex items-center  gap-2 px-2">
            <input
              type="text"
              placeholder="Search here..."
              className=" h-full w-[72%]  bg-transparent outline-none"
            />
            <DropdownMenu>
              <DropdownMenuTrigger className="border h-[80%] px-4 rounded-3xl bg-[#e1ecf4] text-primary flex  items-center">
                Course <ChevronDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {catagories.map((category, index) => (
                  <DropdownMenuItem key={index}>{category}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <button className="bg-primary h-11 w-11 flex items-center justify-center rounded-full">
              <Search color="#ffd" />
            </button>
          </div>
          <div>
            <p className="mt-8">
              Trusted by over 15K Users <br /> worldwide since 2022
            </p>
            <div className="flex items-center gap-5 mt-4">
              {" "}
              <h2 className="font-bold text-2xl">1000+</h2>
              <div className="flex items-center gap-1 font-bold text-2xl">
                4.1
                <div className="flex">
                  <Star size={20} color="#ffc60b" />
                  <Star size={20} color="#ffc60b" />
                  <Star size={20} color="#ffc60b" />
                  <Star size={20} color="#ffc60b" />
                  <Star size={20} color="#ffc60b" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="/images/banner.png" alt="banner image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
