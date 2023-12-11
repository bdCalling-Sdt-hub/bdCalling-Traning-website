import Subscribe from "@/components/Common/Subscribe";
import RootLayout from "@/components/Layouts/RootLayout";
import PopularCourses from "@/components/SuccessStories/PopularCourses";
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
      <DynamicBanner />
      <PopularCourses />
      <Subscribe
        title="Join our dynamic team"
        description="Unlock a world of knowledge and endless growth opportunities"
      />
    </div>
  );
};

export default SuccessStoriesPage;

SuccessStoriesPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
