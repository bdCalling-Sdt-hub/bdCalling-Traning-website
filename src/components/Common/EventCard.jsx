import { Calendar, Clock8 } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const EventCard = ({ data, index }) => {
  const animationType = [
    "animate__backInLeft",
    "animate__backInRight",
    "animate__backInUp",
  ];
  return (
    <div
      className={`rounded-lg animate__animated ${
        animationType.length <= index ? animationType[0] : animationType[index]
      }`}
      style={{
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
    >
      <img
        src={data?.image}
        alt="course image"
        className="rounded-t-lg w-full h-[300px]"
      />
      <div className="p-3">
        <div className="lg:flex items-center justify-between">
          <div className="flex gap-5 items-center">
            <p size={18} className="flex items-center gap-1">
              <Calendar size={22} color="#1796fd" />
              <span className="font-bold text-gray-600">30 December, 2023</span>
            </p>
            <p size={18} className="flex items-center gap-1">
              <Clock8 size={22} color="#1796fd" />
              <span className="font-bold text-gray-600">05:00 pm</span>
            </p>
          </div>
          <p className="text-green-500 text-lg">Online</p>
        </div>
        <h2 className="text-2xl font-bold my-3">
          Career in WordPress online Seminar
        </h2>
        <p>
          WordPress is now the most advanced in the web developing career but
          WordPress is still beyond the knowledge of many people! So on December
          30, 7 pm up to 100% scholarship facility, Career in WordPress came
          with bdCalling to tell you more about WordPress.
        </p>
        <Link href="/free-seminar">
          <Button className="bg-primary mt-5">Join Seminar</Button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
