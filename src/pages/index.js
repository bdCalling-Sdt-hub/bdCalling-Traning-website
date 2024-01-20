import Reveal from "@/animation/FramerMotion/Reveal";
import Banner from "@/components/Home/Banner";

import Event from "@/components/Home/Event";
import Exceptional from "@/components/Home/Exceptional";
import JoinUs from "@/components/Home/JoinUs";
import StudentSuccess from "@/components/Home/StudentSuccess";
import Testimonial from "@/components/Home/Testimonial";
import TotalSuccess from "@/components/Home/TotalSuccess";
import RootLayout from "@/components/Layouts/RootLayout";
import { baseUrl } from "@/config";
import MetaTag from "@/shared/MetaTag";
import dynamic from "next/dynamic";

const HomePage = ({ categories }) => {
  const DynamicCourses = dynamic(() => import("@/components/Home/Courses"), {
    loading: () => <h1>Loading...</h1>,
  });
  return (
    <div>
      <MetaTag title="bdCalling Academy" />
      <Banner />
      <Reveal>
        <DynamicCourses categories={categories} />
      </Reveal>
      <Reveal>
        <Exceptional />
      </Reveal>
      <Reveal>
        <Event />
      </Reveal>
      <Reveal>
        <StudentSuccess />
      </Reveal>
      <Reveal>
        <Testimonial />
      </Reveal>
      <Reveal>
        <TotalSuccess />
      </Reveal>
      <Reveal>
        <JoinUs />
      </Reveal>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  //api endpoint
  // const courseRes = await baseUrl.get("/course");
  const categoryRes = await baseUrl.get("/category");

  //api response data
  //const courseData = courseRes.data;
  const categoryData = categoryRes.data;

  return {
    props: {
      categories: categoryData.data,
      //courses: courseData.data?.data,
    },
  };
};
