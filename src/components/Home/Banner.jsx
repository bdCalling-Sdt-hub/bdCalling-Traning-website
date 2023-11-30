import Image from "next/image";

const Banner = () => {
  return (
    <div className="grid grid-cols-2 gap-40 items-center">
      <div className="space-y-4">
        <h2 className="text-2xl">Welcome to</h2>
        <h1 className="text-4xl font-bold">
          Learn With <span className="text-[#1696fd]">bdCalling</span>
        </h1>
        <p>
          Welcome to Learn with bdCalling , an innovative learning platform! Get
          ready to engage on a journey of knowledge with our innovative learning
          platform. Explore a wide range of courses, interactive lessons, and
          expert instructors, all designed to help you reach your full
          potential.
        </p>
      </div>
      <div>
        <Image
          src="/images/banner.png"
          alt="banner image"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Banner;
