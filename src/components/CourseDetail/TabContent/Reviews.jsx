const Reviews = () => {
  return (
    <div className="mt-5">
      {[...Array(5)].map((item, index) => (
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
            <h1 className="text-xl font-bold">David Shon</h1>
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

export default Reviews;
