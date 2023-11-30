import RootLayout from "@/components/Layouts/RootLayout";

const AboutPage = () => {
  return (
    <div className="container">
      <h1 className="text-2xl">This about page</h1>
    </div>
  );
};

export default AboutPage;

AboutPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
