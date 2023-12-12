import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Mail, MapPin, PhoneCall } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const FormSection = () => {
  const contacts = [
    {
      title: "Give us a call",
      value: "+88 01321231802",
      icon: <PhoneCall size={20} color="#2492EB" />,
    },
    {
      title: "Chat with us",
      value: "learn.bdcalling@gmail.com",
      icon: <Mail size={20} color="#2492EB" />,
    },
    {
      title: "Office Visit Time",
      value: "Saturday- Friday 9:00 am to 6:00 pm",
      icon: <Clock size={20} color="#2492EB" />,
    },
    {
      title: "Visit us",
      value: "Daisy Garden, House 14,Block A, Banasree, main road, Dhaka-1219",
      icon: <MapPin size={20} color="#2492EB" />,
    },
  ];
  const catagories = [
    "Wordpress",
    "Digital Marketing",
    "Graphics Design",
    "UX/UI Design",
    "APP Developer with Flutter",
    "Front-End Development",
    "Lead & Data Entry",
    "Visual Design Fundamentals",
    "Prototyping and Wireframing",
  ];
  return (
    <div className="grid grid-cols-2 gap-14 my-16">
      <div>
        <h2 className="text-[#2492EB] font-bold text-xl mb-4">
          Let&#39;s Talk
        </h2>
        <p>
          You are welcomed to visit our office for any information related to
          course and training. You can also reach us through the hotline number
          or messenger.
        </p>
        {contacts.map((item, index) => (
          <div key={index} className="my-5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white shadow flex items-center justify-center rounded-full">
                {item.icon}
              </div>
              <p>{item.title}</p>
            </div>
            <p className="ml-10">{item.value}</p>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-[#2492EB] font-bold text-xl mb-4">
          Inbox your queries
        </h2>
        <form action="" className="space-y-3">
          <Input type="text" placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <Input type="number" placeholder="Your Phone number" />

          <Select>
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {catagories.map((item, index) => (
                  <SelectItem value={item} key={index}>
                    {item}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Textarea placeholder="Type your message here." />
          <Button type="submit" className="bg-primary">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FormSection;
