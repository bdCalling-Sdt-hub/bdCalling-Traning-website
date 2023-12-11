import About from "@/components/About/About";
import Experts from "@/components/About/Experts";
import TotalCourse from "@/components/About/TotalCourse";
import WhatBdCalling from "@/components/About/WhatBdCalling";
import Subscribe from "@/components/Common/Subscribe";
import RootLayout from "@/components/Layouts/RootLayout";

const AboutPage = () => {
  return (
    <div className="container">
      <About />
      <WhatBdCalling />
      {/* <OurVision /> */}
      <Experts />
      <TotalCourse />
      <Subscribe
        title="Say Hello to Learn with!"
        description="Unlock a world of knowledge and endless growth opportunities"
      />
    </div>
  );
};

export default AboutPage;

AboutPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
