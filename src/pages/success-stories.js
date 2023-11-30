import RootLayout from "@/components/Layouts/RootLayout";

const SuccessStoriesPage = () => {
  return (
    <div className="container">
      <h1 className="text-2xl">This is success stories page</h1>
    </div>
  );
};

export default SuccessStoriesPage;

SuccessStoriesPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
