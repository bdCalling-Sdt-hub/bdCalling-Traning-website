import Banner from "@/components/Home/Banner";
import Courses from "@/components/Home/Courses";
import RootLayout from "@/components/Layouts/RootLayout";

const HomePage = () => {
  return (
    <div className="container">
      <Banner />
      <Courses />
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
