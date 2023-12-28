const Overview = ({ data }) => {
  return (
    <div>
      <div className="mt-5 space-y-4">
        <p className="text-xl">{data?.description}</p>
      </div>
      <div>
        <h1 className="text-2xl font-bold my-10">Career Opportunities</h1>
        <div className="flex flex-col lg:flex-row items-center gap-5">
          <div>
            <img src="/images/opportunities1.svg" alt="" />
            <p className="mt-4">
              WordPress Developer jobs can be found in abundance on job search
              engines like BDjobs and Linkedin. Your qualification and technical
              knowledge in this subject ensure your credibility in the worldwide
              marketplace. Our career placement service will assist you in
              achieving your objectives during this process.
            </p>
          </div>
          <div>
            <img src="/images/opportunities2.png" alt="" />
            <p className="mt-4">
              There are job opportunities in the local market if you acquire
              skills. You can also work in the global market online. Freelancing
              can be done on global marketplaces like Fiverr, Upwork,
              Freelancer, Peopleperhour.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h2 className="text-xl font-bold border-b pb-2 mb-4">Helpline</h2>
        <p>
          For any queries regarding this batch, call{" "}
          <span className="font-bold">+88 01321231802</span> (09 Am to 06 Pm)
        </p>
      </div>
      <div className="mt-5">
        <h2 className="text-xl font-bold border-b pb-2 mb-4">Payment</h2>
        <p className="mb-5">If you want to join live batch and make payment-</p>
        <ul className="space-y-4">
          <li>1. Click on the&#39;Join Live Batch&#39;button</li>
          <li>2. Select your batch schedule</li>
          <li>3. Click on the &#39;Purchase&#39; button</li>
          <li>4. Select the payment method at your convenience</li>
          <li>5. Complete the payment</li>
        </ul>
        <p className="mt-5">
          At the end of the process you will get a message and your batch will
          show up in your dashboard. Start the course according to your study
          plan.,
        </p>
      </div>
    </div>
  );
};

export default Overview;
