import TopHeading from "@/components/Common/TopHeading";
import FormSection from "@/components/Contact/FormSection";
import RootLayout from "@/components/Layouts/RootLayout";
import { baseUrl } from "@/config";
import MetaTag from "@/shared/MetaTag";
import dynamic from "next/dynamic";

const ContactPage = ({ categories }) => {
  const DynamicMap = dynamic(() => import("@/components/Contact/Map"), {
    loading: () => <h1>Loading...</h1>,
    ssr: false,
  });
  return (
    <div className="container">
      <MetaTag title="Contact" />
      <TopHeading blueText="CONTACT US" />
      <FormSection categories={categories} />
      <DynamicMap />
    </div>
  );
};

export default ContactPage;

ContactPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const categoryRes = await baseUrl.get("/category");

  const categoryData = categoryRes.data;

  return {
    props: {
      categories: categoryData.data,
    },
  };
};
