import { Calendar, Clock8 } from "lucide-react";
import Link from "next/link";
import HeadingText from "../Common/headingText";
import { Button } from "../ui/button";
const Event = () => {
  const events = [
    {
      image:
        "https://i.postimg.cc/d1J4nFgy/Digital-Marketing-Training-Program-Post.jpg",
      title: "Training Program",
      date: "30 March, 2023",
      time: "4:00 pm - 6:00 pm",
    },
    {
      image:
        "https://i.postimg.cc/zfCxnv2N/Digital-Marketing-Seminar-Video-Thumbnail.jpg",
      title: "Digital Marketing",
      date: "30 March, 2023",
      time: "4:00 pm - 6:00 pm",
    },
  ];
  return (
    <div className="my-12 container">
      <HeadingText title={"Upcoming Events"} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
        <div
          className="col-span-2 rounded-lg"
          style={{
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
        >
          <img
            src="https://i.ibb.co/gWm1vmk/wordpress-seminar-event-cover-photo.jpg"
            alt="course image"
            className="rounded-t-lg w-full h-[410px]"
          />
          <div className="p-3">
            <div className="lg:flex items-center justify-between">
              <div className="flex gap-5 items-center">
                <p size={18} className="flex items-center gap-1">
                  <Calendar size={22} color="#1796fd" />
                  <span className="font-bold text-gray-600">
                    30 December, 2023
                  </span>
                </p>
                <p size={18} className="flex items-center gap-1">
                  <Clock8 size={22} color="#1796fd" />
                  <span className="font-bold text-gray-600">05:00 pm</span>
                </p>
              </div>
              <p className="text-green-500 text-lg">Online</p>
            </div>
            <h2 className="text-2xl font-bold my-2">
              Career in WordPress online Seminar
            </h2>
            <p>
              WordPress is now the most advanced in the web developing career
              but WordPress is still beyond the knowledge of many people! So on
              December 30, 7 pm up to 100% scholarship facility
            </p>
            <Link href="/free-seminar">
              <Button className="bg-primary mt-5">Join Seminar</Button>
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          {events.map((event, index) => (
            <div
              key={index}
              className="rounded-lg relative"
              style={{
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
            >
              <img
                src={event?.image}
                alt="course image"
                className="rounded-md h-[300px] w-full pb-16"
              />
              <div className="h-24 w-full border-t  absolute left-0 bottom-0 rounded-b-md p-2 text-white bg-[#1e99fd]">
                <div className="flex gap-5 items-center">
                  <p size={18} className="flex items-center gap-1">
                    <Calendar size={20} />
                    <span>{event?.date}</span>
                  </p>
                  <p size={18} className="flex items-center gap-1">
                    <Clock8 size={20} />
                    <span>{event?.time}</span>
                  </p>
                </div>
                <h2 className="text-xl font-bold my-3">{event?.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
