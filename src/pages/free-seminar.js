import TopHeading from "@/components/Common/TopHeading";
import RootLayout from "@/components/Layouts/RootLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const FreeSeminar = () => {
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
    <div className="container w-2/6 my-14">
      <TopHeading blueText="JOIN FREE SEMINAR" />
      <form action="" className="space-y-3">
        <Input type="text" placeholder="Your Name" />
        <Input type="email" placeholder="Your Email" />
        <Input type="number" placeholder="Your Phone number" />

        <Select>
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Course Select" />
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
  );
};

export default FreeSeminar;

FreeSeminar.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};
