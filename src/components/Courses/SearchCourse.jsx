import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Search } from "lucide-react";

const SearchCourse = () => {
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
    <div className="border rounded-full h-14 flex items-center  gap-2 px-2 mt-10">
      <input
        type="text"
        placeholder="Search here..."
        className=" h-full w-[88%] bg-transparent outline-none"
      />
      <DropdownMenu>
        <DropdownMenuTrigger className="border h-[80%] px-4 rounded-3xl bg-[#e1ecf4] text-primary flex  items-center">
          Course <ChevronDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {catagories.map((category, index) => (
            <DropdownMenuItem key={index}>{category}</DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <button className="bg-primary h-11 w-11 flex items-center justify-center rounded-full">
        <Search color="#ffd" />
      </button>
    </div>
  );
};

export default SearchCourse;
