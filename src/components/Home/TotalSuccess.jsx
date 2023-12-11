const TotalSuccess = () => {
  const successList = [
    { title: "Successful Students", total: "2500+" },
    { title: "Expert Freelancers", total: "2500+" },
    { title: "Success Ratio", total: "80%" },
    { title: "Professional Mentors", total: "60+" },
    { title: "Skilled Job Holders", total: "1800+" },
  ];

  return (
    <div className="bg-primary  px-10 rounded-md h-[250px] my-14">
      <div className="container">
        <div className="grid grid-cols-5 text-center">
          {successList.map((success, index) => (
            <div key={index} className="text-white mt-24 space-y-2">
              <h1 className="text-4xl">{success.total}</h1>
              <p>{success.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TotalSuccess;
