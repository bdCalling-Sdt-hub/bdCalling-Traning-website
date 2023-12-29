const Instructor = ({ data }) => {
  return (
    <div className="mt-5">
      {data?.mentors.map((item, index) => (
        <div
          className="flex flex-col lg:flex-row items-center gap-4 mb-5 border-b pb-5"
          key={index}
        >
          <img
            src="/images/feedbackProfile.png"
            className="w-24 h-24 rounded-full"
            alt=""
          />
          <div>
            <h1 className="text-xl font-bold">{item.name}</h1>
            <p className="mb-2 text-gray-500"></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Instructor;
