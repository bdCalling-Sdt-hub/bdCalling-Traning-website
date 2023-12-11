import { Button } from "../ui/button";

const JoinUs = () => {
  return (
    <div className="bg-primary flex items-center justify-between px-10 rounded-md h-[250px] my-14 container">
      <h2 className="text-4xl text-white font-medium">
        Start Your Best Online/Offline
        <br /> Course with Us
      </h2>
      <Button className="px-16 py-6 text-xl bg-white text-primary">
        Join Us
      </Button>
    </div>
  );
};

export default JoinUs;
