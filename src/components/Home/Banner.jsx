import ParallaxText from "@/animation/FramerMotion/ParallaxText";
import Reveal from "@/animation/FramerMotion/Reveal";
import useCategory from "@/hooks/useCategory";
import styles from "@/styles/home.module.css";
import { BookOpen, Play } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { AspectRatio } from "../ui/aspect-ratio";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

const Banner = () => {
  const [videoLink, setVideoLink] = useState("");
  const { category: catagories } = useCategory();

  const videoLinkLists = [
    {
      video:
        "https://www.youtube.com/embed/ffnmrtUCqC4?autoplay=1&modestbranding=1&rel=0",
      thumb: "https://i.postimg.cc/3WQKT0zD/Skill-Development-Thumbnail-02.jpg",
    },
  ];
  return (
    <>
      <div className={styles.homeBanner}>
        <div className="lg:flex items-center gap-8 container py-24">
          <div className="order-2 lg:order-1 w-full lg:w-[700px]">
            <Reveal>
              <h2 className="text-5xl  rounded bg-gradient-to-r from-[#93efff5b] to-[#bee1ffb2] text-[#2397fb] , w-2/4 p-1 font-medium relative">
                Let&#39;s Grow <br /> Your Career
                <span
                  className="absolute text-[18px] bottom-0 -right-14 text-[#586faffa]"
                  style={{ textShadow: "2px 2px 5px #1696fd" }}
                >
                  𝓌𝒾𝓉𝒽
                </span>
              </h2>
            </Reveal>
            <Reveal>
              <h1 className="text-6xl font-bold mt-5">
                <span className="text-[#1696fd]">bdCalling Academy</span>
              </h1>
            </Reveal>
            <Reveal>
              <p className="text-[16px] my-6 lg:w-5/6">
                An Innovative learning platform! Get ready to engage on a
                journey of knowledge with our innovative learning platform.
                Explore a wide range of courses, interactive lessons, and expert
                instructors, all designed to help you reach your full potential.
              </p>
            </Reveal>
            <Reveal>
              <Link href="/courses" className="inline-block">
                <Button className="flex items-center gap-2 py-6 bg-primary ">
                  <BookOpen />
                  Browse Courses
                </Button>
              </Link>
            </Reveal>
            {/* <Reveal>
              <div className="bg-white lg:w-[80%] shadow rounded-full h-14 flex items-center justify-between gap-1 px-2">
                <input
                  type="text"
                  placeholder="Search here..."
                  className=" h-full w-[55%] lg:w-[80%]  bg-transparent outline-none pl-2"
                />
                <div className="flex items-center gap-1">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="border h-11 flex items-center px-2 lg:px-4 rounded-3xl bg-[#e1ecf4] text-primary ">
                      Courses <ChevronDown />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {catagories?.map((item, index) => (
                        <DropdownMenuItem className="capitalize" key={index}>
                          {item.category_name}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <button className="bg-primary h-11 w-11 flex items-center justify-center rounded-full">
                    <Search color="#ffd" />
                  </button>
                </div>
              </div>
            </Reveal> */}
          </div>
          <div className="order-1 lg:order-2 w-full lg:w-[700px] h-[380px]  mt-4 lg:mt-0 bg-gradient-to-bl from-[#1696fd] to-[#4d95d8] p-2 rounded-3xl animate__animated animate__zoomIn">
            <Dialog>
              {videoLinkLists.map((item, index) => (
                <div key={index}>
                  <div className={`relative w-full h-full`}>
                    <img
                      src={item.thumb}
                      alt=""
                      className="w-full h-[364px] rounded-3xl"
                    />

                    <div
                      onClick={() => setVideoLink(item.video)}
                      className="absolute top-0 left-0 h-full w-full  flex justify-center items-center cursor-pointer"
                    >
                      <div className={`${styles.playBtn}`}>
                        <DialogTrigger>
                          <Play />
                        </DialogTrigger>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <DialogContent className="w-[80%]">
                <AspectRatio ratio={16 / 9} className="bg-muted">
                  <iframe
                    src={videoLink}
                    title="YouTube video player"
                    allow="autoplay;"
                    className="rounded-md w-full h-full"
                    allowFullScreen
                  ></iframe>
                </AspectRatio>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <div className="py-5 bg-gradient-to-t from-[#167afd] to-[#17b4fd]">
        {/* <ParallaxText baseVelocity={-1}>
          🔹Wordpress🔹Digital Marketing🔹Graphics Design🔹UX/UI Design🔹Lead
          Generation & Data Entry
        </ParallaxText> */}
        <ParallaxText baseVelocity={1}>
          🔹Wordpress🔹Digital Marketing🔹Graphics Design🔹UX/UI Design🔹Lead
          Generation & Data Entry
        </ParallaxText>
      </div>
    </>
  );
};

export default Banner;
