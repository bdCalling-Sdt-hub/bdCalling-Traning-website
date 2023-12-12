import { SendHorizontal } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Subscribe = ({ title, description }) => {
  return (
    <div className="my-16">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p>{description}</p>
      </div>
      <div className="mx-56 p-10">
        <div className="flex items-center gap-2">
          <Input type="email" placeholder="Enter your email" />
          <Button className="flex gap-1 bg-primary py-6 px-8">
            <p className="text-md"> Subscribe</p>
            <SendHorizontal size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
