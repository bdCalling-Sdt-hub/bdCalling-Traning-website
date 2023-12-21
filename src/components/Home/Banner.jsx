import Reveal from "@/animation/FramerMotion/Reveal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import styles from "@/styles/home.module.css";
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
    <div className={`${styles.homeBanner}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-40 items-center container">
        <div className="space-y-4 order-2 lg:order-1">
          <Reveal>
            <h2 className="text-3xl px-5 rounded bg-gradient-to-r from-[#93efff65] to-[#F3F3F3] text-[#2397fb] , w-2/4 py-1">
              Welcome to
            </h2>
            <h1 className="text-5xl font-bold">
              <span className="text-[#1696fd]">bdCalling Academy</span>
            </h1>
            <p>
              Welcome to bdCalling Academy , an innovative learning platform!
              Get ready to engage on a journey of knowledge with our innovative
              learning platform. Explore a wide range of courses, interactive
              lessons, and expert instructors, all designed to help you reach
              your full potential.
            </p>
            <div className="bg-white shadow rounded-full h-14 flex items-center gap-1 lg:gap-2 px-2 pl-5">
              <input
                type="text"
                placeholder="Search here..."
                className=" h-full w-[55%] lg:w-[72%]  bg-transparent outline-none"
              />
              <DropdownMenu>
                <DropdownMenuTrigger className="border h-[80%] px-2 lg:px-4 rounded-3xl bg-[#e1ecf4] text-primary flex  items-center">
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
                  4.0
                  <div className="flex">
                    <Star size={20} color="#ffc60b" fill="#ffc60b" />
                    <Star size={20} color="#ffc60b" fill="#ffc60b" />
                    <Star size={20} color="#ffc60b" fill="#ffc60b" />
                    <Star size={20} color="#ffc60b" fill="#ffc60b" />
                    <Star size={20} color="#ffc60b" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="order-1 lg:order-2">
          <img
            src="/images/banner5.png"
            className="animate__animated animate__zoomIn"
            alt="banner image"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
