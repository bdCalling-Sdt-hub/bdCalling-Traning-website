const About = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  items-center">
      <div>
        <img
          src="/images/banner.png"
          className="animate__animated animate__zoomIn"
          alt="banner image"
        />
      </div>
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-[#1696fd]">About Us</h1>
        <p>
          bdCalling IT is a platform offering a diverse range of high-quality
          courses for individuals looking to acquire and enhance essential
          skills. They cater to students, professionals, and those eager to
          explore new horizons with courses in leadership, communication,
          technical proficiency, creative arts, and personal development. What
          sets them apart is their commitment to hands-on learning through
          engaging video lectures, interactive exercises, real-world projects,
          and expert guidance. Instructors are experts in their fields,
          dedicated to helping students succeed. bdCalling IT aims to empower
          individuals for success in today&#39;s dynamic world.
        </p>
      </div>
    </div>
  );
};

export default About;
