import Banner from "@/components/Home/Banner";
import Courses from "@/components/Home/Courses";
import Event from "@/components/Home/Event";
import Exceptional from "@/components/Home/Exceptional";
import JoinUs from "@/components/Home/JoinUs";
import StudentSuccess from "@/components/Home/StudentSuccess";
import Testimonial from "@/components/Home/Testimonial";
import TotalSuccess from "@/components/Home/TotalSuccess";
import RootLayout from "@/components/Layouts/RootLayout";
import MetaTag from "@/shared/MetaTag";

const HomePage = () => {
  return (
    <div>
      <MetaTag title="bdCalling Academy" />
      <Banner />
      <Courses />
      <Exceptional />
      <Event />
      <StudentSuccess />
      <Testimonial />
      <TotalSuccess />
      <JoinUs />
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
