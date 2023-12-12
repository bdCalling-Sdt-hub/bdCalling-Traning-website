import ExpertCard from "@/components/Common/Expert.Card";
import Subscribe from "@/components/Common/Subscribe";
import TopHeading from "@/components/Common/TopHeading";
import RootLayout from "@/components/Layouts/RootLayout";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import expert from "../../public/db/expert.json";

const Mentors = () => {
  const { expertList, teams } = expert;
  const [title, setTitle] = useState("Mentors");

  const categoryLists = ["Mentors", "Team"];

  return (
    <div className="container">
      <TopHeading
        blueText={title}
        description="For over 3 years, our team of dedicated expert mentors has been the driving force behind the transformation of countless individuals into IT experts. With unwavering commitment, we've successfully guided over 2560 individuals from diverse backgrounds into the thriving world of Information Technology. Our mentors possess a unique blend of academic excellence and real-world job experience, making them the perfect guides on your journey towards a bright and promising career. Join us today, and let our experienced mentors illuminate your path to success in the ever-evolving IT landscape"
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
      <div className="grid grid-cols-4 gap-3 my-12">
        {title === "Mentors" &&
          expertList.map((item, index) => (
            <ExpertCard key={index} data={item} />
          ))}
        {title === "Team" &&
          teams.map((item, index) => <ExpertCard key={index} data={item} />)}
      </div>
      <Subscribe
        title="Join our dynamic team"
        description="Unlock a world of knowledge and endless growth opportunities"
      />
    </div>
  );
};

export default Mentors;

Mentors.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};
