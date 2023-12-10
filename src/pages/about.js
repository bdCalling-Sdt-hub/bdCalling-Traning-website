import About from "@/components/About/About";
import Experts from "@/components/About/Experts";
import Subscribe from "@/components/About/Subscribe";
import TotalCourse from "@/components/About/TotalCourse";
import WhatBdCalling from "@/components/About/WhatBdCalling";
import RootLayout from "@/components/Layouts/RootLayout";

const AboutPage = () => {
  return (
    <div className="container">
      <About />
      <WhatBdCalling />
      {/* <OurVision /> */}
      <Experts />
      <TotalCourse />
      <Subscribe />
    </div>
  );
};

export default AboutPage;

AboutPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
