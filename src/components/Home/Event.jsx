import { Calendar, Clock8 } from "lucide-react";
import HeadingText from "../Common/headingText";
import { Button } from "../ui/button";
const Event = () => {
  const events = [
    {
      image: "/images/event2.png",
      title: "UI/UX Design",
      date: "30 March, 2023",
      time: "4:00 pm - 6:00 pm",
    },
    {
      image: "/images/event3.png",
      title: "Digital Marketing",
      date: "30 March, 2023",
      time: "4:00 pm - 6:00 pm",
    },
  ];
  return (
    <div className="my-12 container">
      <HeadingText sTitle={"Events"} title={"See our Upcoming Events"} />
      <div className="grid grid-cols-3 gap-4 mt-10">
        <div className="col-span-2 p-3 rounded-lg shadow">
          <img
            src="/images/event1.png"
            alt="course image"
            className="rounded-md w-full"
          />
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-5 items-center">
              <p size={18} className="flex items-center gap-1">
                <Calendar size={20} />
                <span>30 March, 2023</span>
              </p>
              <p size={18} className="flex items-center gap-1">
                <Clock8 size={20} />
                <span>4:00 pm - 6:00 pm</span>
              </p>
            </div>
            <p>Offline/Online</p>
          </div>
          <h2 className="text-2xl font-bold my-3">
            Mobile App Development Free Seminar
          </h2>
          <p>
            Mobile app development is the process of creating software
            applications specifically designed to run on mobile devices such as
            smartphones and tablets. It involves a series of steps, from
            conceptualization and design to coding, testing, and deployment,
            aimed at creating functional and user-friendly applications.
          </p>
          <Button className="bg-primary mt-5">Join Event</Button>
        </div>
        <div className="space-y-4">
          {events.map((event, index) => (
            <div key={index} className="rounded-lg shadow relative">
              <img
                src={event?.image}
                alt="course image"
                className="rounded-md h-[300px] w-full object-cover"
              />
              <div className="h-24 w-full backdrop-blur-lg border-t bg-[#0000005e] absolute bottom-0 rounded-b-md p-2 text-white">
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
