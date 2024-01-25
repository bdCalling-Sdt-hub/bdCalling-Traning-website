import ExpertCard from "@/components/Common/Expert.Card";
import TopHeading from "@/components/Common/TopHeading";
import RootLayout from "@/components/Layouts/RootLayout";
import { Button } from "@/components/ui/button";
import { baseUrl } from "@/config";
import MetaTag from "@/shared/MetaTag";
import { useEffect, useState } from "react";
import expert from "../../public/db/expert.json";

const Mentors = () => {
  const { teams } = expert;
  const [title, setTitle] = useState("Mentors");
  const [expertList, setExpertList] = useState([]);

  useEffect(() => {
    baseUrl
      .get("/mentors/all")
      .then((res) => setExpertList(res.data?.data))
      .catch((err) => console.log(err));
  }, []);

  const categoryLists = ["Mentors", "Team"];

  return (
    <div className="container">
      <MetaTag title="Mentors" />
      <TopHeading
        blueText={title}
        description="For over 10 years, our team of dedicated expert mentors has been the driving force behind the transformation of countless individuals into IT experts. With unwavering commitment, we've successfully guided over 20500 individuals from diverse backgrounds into the thriving world of Information Technology. Our mentors possess a unique blend of academic excellence and real-world job experience, making them the perfect guides on your journey towards a bright and promising career. Join us today, and let our experienced mentors illuminate your path to success in the ever-evolving IT landscape"
      />
      <div className="mt-8 text-center flex flex-col lg:flex-row  gap-2 border-b pb-2 mb-10">
        {categoryLists.map((category, index) => (
          <Button
            key={index}
            variant="link"
            onClick={() => {
              setTitle(category);
            }}
            className={`${
              title === category ? "bg-[#1796fd] text-white" : ""
            }  rounded-md`}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 my-12">
        {title === "Mentors" &&
          expertList.map((item, index) => (
            <ExpertCard key={index} data={item} />
          ))}
        {title === "Team" &&
          teams.map((item, index) => <ExpertCard key={index} data={item} />)}
      </div>
    </div>
  );
};

export default Mentors;

Mentors.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};
