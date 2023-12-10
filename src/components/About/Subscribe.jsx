import { SendHorizontal } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Subscribe = () => {
  return (
    <div className="my-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Say Hello to Learn with!</h1>
        <p>Unlock a world of knowledge and endless growth opportunities</p>
      </div>
      <div className="mx-56 p-10">
        <div className="flex items-center gap-2">
          <Input type="email" placeholder="Email" />
          <Button className="flex gap-1">
            <p className=""> Subscribe</p>
            <SendHorizontal size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
