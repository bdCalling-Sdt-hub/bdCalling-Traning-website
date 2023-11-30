import RootLayout from "@/components/Layouts/RootLayout";

const ContactPage = () => {
  return (
    <div className="container">
      <h1 className="text-2xl">This contact page</h1>
    </div>
  );
};

export default ContactPage;

ContactPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
