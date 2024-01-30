import { baseUrl, imgUrl } from "@/config";
import { Calendar, Clock8, MapPinned } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import HeadingText from "../Common/headingText";
import { Button } from "../ui/button";

const Event = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    baseUrl
      .get("/events")
      .then((res) => setEvents(res?.data?.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="my-12 container">
      <HeadingText title={"Upcoming Events"} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
        {events.length > 0 && (
          <div
            className="col-span-2 rounded-lg"
            style={{
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            }}
          >
            <img
              src={`${imgUrl}/${events[events.length - 1]?.image}`}
              alt="course image"
              className="rounded-t-lg w-full h-[380px]"
            />
            <div className="p-3">
              <div className="lg:flex items-center justify-between">
                <div className="flex gap-5 items-center">
                  <p size={18} className="flex items-center gap-1">
                    <Calendar size={18} color="#1796fd" />
                    <span className=" text-gray-600">
                      {events[events.length - 1]?.date}
                    </span>
                  </p>
                  <p size={18} className="flex items-center gap-1">
                    <Clock8 size={18} color="#1796fd" />
                    <span className=" text-gray-600">
                      {events[events.length - 1]?.starttime}
                    </span>
                    -
                    <span className=" text-gray-600">
                      {events[events.length - 1]?.endtime}
                    </span>
                  </p>
                </div>
                <p
                  className={`${
                    events[events.length - 1]?.status === "OFFLINE"
                      ? "text-black"
                      : "text-green-500"
                  } text-md`}
                >
                  {events[events.length - 1]?.status}
                </p>
              </div>
              <div className="flex items-center mt-1 gap-1">
                <MapPinned size={20} color="#1796fd" />
                <p className="text-md capitalize text-gray-500">
                  {events[events.length - 1]?.officeLocation}
                </p>
              </div>
              <h2 className="text-2xl capitalize my-3">
                {events[events.length - 1]?.courseName}
              </h2>
              <p>{events[events.length - 1]?.description}</p>
              <Link href="/free-seminar">
                <Button className="bg-primary mt-5">Join Seminar</Button>
              </Link>
            </div>
          </div>
        )}
        <div className="space-y-4">
          {events.slice(0, 2).map((event, index) => (
            <div
              key={index}
              className="rounded-lg relative"
              style={{
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
            >
              <img
                src={`${imgUrl}/${event?.image}`}
                alt="course image"
                className="rounded-md h-[300px] w-full pb-16"
              />
              <div className="h-24 w-full border-t  absolute left-0 bottom-0 rounded-b-md p-2 text-white bg-[#1e99fd]">
                <div className="flex gap-5 items-center">
                  <p className="flex items-center gap-1">
                    <Calendar size={18} />
                    <span>{event?.date}</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Clock8 size={18} />
                    <span>{event?.starttime}</span>-
                    <span>{event?.endtime}</span>
                  </p>
                </div>
                <h2 className="text-xl  my-3 capitalize">
                  {event?.courseName}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
