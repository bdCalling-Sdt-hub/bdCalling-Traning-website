const TotalCourse = () => {
  const successList = [
    { title: "Courses", total: "25+" },
    { title: "Certified Teachers", total: "25+" },
    { title: "Students Enroll", total: "2160+" },
    { title: "Success Ratio", total: "90%" },
  ];

  return (
    <div className="bg-primary  py-20 px-10 rounded-md  my-14">
      <div className="text-center mb-10">
        <p className="text-white mb-3">What is bdCalling</p>
        <h2 className="text-4xl text-white">
          Master the Skills to drive <br /> your career
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-5 text-center">
        {successList.map((success, index) => (
          <div
            key={index}
            className="bg-white px-5 py-14 rounded-md text-primary"
          >
            <h1 className="text-4xl font-bold mb-2">{success.total}</h1>
            <p>{success.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalCourse;
