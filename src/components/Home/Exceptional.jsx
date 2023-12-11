import { Check, ChevronRight, Trophy } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const Exceptional = () => {
  const items = [
    "Free Seminar",
    "Provide Best Support",
    "Expert Many Teacher",
    "Lifetime access",
  ];
  return (
    <div className="grid grid-cols-2 gap-16 my-24 items-center justify-center container">
      <div className="relative">
        <img src="/images/exceptional2.png" className="ml-auto" alt="image" />
        <div className="absolute bottom-0 left-12">
          <img
            src="/images/exceptional1.png"
            alt="image"
            className="object-cover"
          />
        </div>
        <div className="absolute top-5 left-32 w-[200px] bg-white shadow text-center p-3 rounded-md">
          <div className="bg-primary w-12 h-12 rounded-md flex justify-center items-center mt-[-35px]">
            <Trophy color="#fff" size={40} strokeWidth={"0.75px"} />
          </div>
          <div className="mt-1">
            <h1 className="text-3xl font-bold text-primary">+250</h1>
            <p>Awesome Awards</p>
          </div>
        </div>
        {/* <LottiePlane /> */}
      </div>
      <div className="space-y-5">
        <h1 className="text-4xl font-bold">Why We’re Exceptional</h1>
        <p>
          Learn with bdCalling offers various courses and upon successful
          completion, we offer job opportunities within our company.
          Additionally, we provide scholarships in different categories to
          support aspiring individuals. We guarantee a refund if anyone is
          dissatisfied with the course. Our training program includes hands-on
          experience with real client projects, ensuring a comprehensive
          learning experience.
        </p>
        <div className="bg-gray-200  rounded-md relative ">
          <h1 className="font-bold  bg-primary w-[200px] p-3 rounded-br-full text-white">
            Flexible Classes
          </h1>
          <p className="px-4 py-3">
            Fit education into your life, not the other way around. Flexible
            classes are designed to adapt to your busy schedule, so you can
            learn what you want when you want.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {items.map((item, index) => (
            <div key={index} className="flex items-center  gap-2">
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                <Check size={16} color="white" />
              </div>
              <p>{item}</p>
            </div>
          ))}
        </div>
        <Link href="#">
          <Button
            variant="outline"
            className="text-primary border-primary px-6 text-md py-6 mt-8"
          >
            More About{" "}
            <ChevronRight color="#1796fd" size={15} className="ml-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Exceptional;
