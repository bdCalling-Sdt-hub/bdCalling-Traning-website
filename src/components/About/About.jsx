import { Button } from "../ui/button";

const About = () => {
  return (
    <div className="grid grid-cols-2  items-center">
      <div>
        <img src="/images/banner.png" alt="banner image" />
      </div>
      <div>
        <h1 className="text-4xl font-bold text-[#1696fd]">About Us</h1>
        <p>
          <span className="text-2xl">We&#39;re</span> your dedicated partners in
          skill development and personal growth. With a relentless commitment to
          fostering excellence, we offer a diverse range of transformative
          courses designed to empower individuals and professionals alike.
        </p>
        <Button className="mt-2">More</Button>
      </div>
    </div>
  );
};

export default About;
