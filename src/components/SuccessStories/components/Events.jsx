import EventCard from "@/components/Common/EventCard";
import events from "../../../../public/db/events.json";

const Events = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-12">
      {events.map((item, index) => (
        <EventCard key={index} data={item} />
      ))}
    </div>
  );
};

export default Events;
