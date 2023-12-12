import RootLayout from "@/components/Layouts/RootLayout";

const FreeSeminar = () => {
  return (
    <div>
      <h1>Free Seminar</h1>
    </div>
  );
};

export default FreeSeminar;

FreeSeminar.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};
