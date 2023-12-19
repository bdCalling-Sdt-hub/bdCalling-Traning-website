const Instructor = () => {
  return (
    <div className="mt-5">
      {[...Array(5)].map((item, index) => (
        <div className="flex items-center gap-4 mb-5 border-b pb-5" key={index}>
          <img
            src="/images/feedbackProfile.png"
            className="w-36 h-36 rounded-full"
            alt=""
          />
          <div>
            <h1 className="text-xl font-bold">David Shon</h1>
            <p className="mb-2 text-gray-500">
              Top Rated Freelancer at Upwork;
            </p>
            <p>
              bdCalling Academy&#39;s courses are very practical and focused on
              real-world skills.&#39; - Student x I would recommend Learn with
              bdCalling to anyone who is looking to advance their career&#39; -
              Student y bdCalling Academy&#39;s courses are very well-produced
              and easy to follow.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Instructor;
