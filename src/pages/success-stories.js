import Reveal from "@/animation/FramerMotion/Reveal";
import Subscribe from "@/components/Common/Subscribe";
import RootLayout from "@/components/Layouts/RootLayout";
import PopularCourses from "@/components/SuccessStories/PopularCourses";
import MetaTag from "@/shared/MetaTag";
import dynamic from "next/dynamic";

const SuccessStoriesPage = () => {
  const DynamicBanner = dynamic(
    () => import("@/components/SuccessStories/Banner"),
    {
      loading: () => <h1>Loading...</h1>,
    }
  );
  return (
    <div className="container">
      <MetaTag title="Success Stories" />
      <DynamicBanner />
      <Reveal>
        <PopularCourses />
      </Reveal>
      <Reveal>
        <Subscribe
          title="Join our dynamic team"
          description="Unlock a world of knowledge and endless growth opportunities"
        />
      </Reveal>
    </div>
  );
};

export default SuccessStoriesPage;

SuccessStoriesPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
