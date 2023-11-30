import Banner from "@/components/Home/Banner";
import Courses from "@/components/Home/Courses";
import Event from "@/components/Home/Event";
import Testimonial from "@/components/Home/Testimonial";
import RootLayout from "@/components/Layouts/RootLayout";

const HomePage = () => {
  return (
    <div className="container">
      <Banner />
      <Courses />
      <Event />
      <Testimonial />
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
