import { Star } from "lucide-react";
import FlexItem from "../Common/FlexItem";
import { Button } from "../ui/button";

const CourseDetailDescription = () => {
  return (
    <div>
      <img src="/images/courseDetail.png" alt="" className="w-full mb-8" />
      <FlexItem gap="gap-4">
        <img src="/images/instructor.png" alt="" />
        <div>
          <h2 className="font-bold">Ashraful</h2>
          <p>Top Rated Freelancer at Upwork</p>
        </div>
        <div className="bg-primary text-white p-[2px] rounded">
          <p>UI/UX Designer</p>
        </div>
        <div className="flex items-center gap-1">
          <div className="flex">
            <Star size={20} color="#ffc60b" />
            <Star size={20} color="#ffc60b" />
            <Star size={20} color="#ffc60b" />
            <Star size={20} color="#ffc60b" />
            <Star size={20} color="#ffc60b" />
          </div>
          (20 Reviews)
        </div>
      </FlexItem>
      <div className="bg-gray-100 p-4 rounded-md mt-8">
        <FlexItem gap="gap-2">
          <Button>Overview</Button>
          <Button>Curriculum</Button>
          <Button>Reviews</Button>
          <Button>Instructor</Button>
        </FlexItem>
      </div>
      <div className="mt-5 space-y-4">
        <p className="text-xl">
          UX Design has become one of the top high demand jobs in the tech
          world. Companies are prioritizing on hiring skilled designers as it
          plays a crucial role in ensuring user friendly websites. A study
          shows, almost 77% of online business fail to survive in the
          competitive global market due to complex interface design. UX
          designers ensure the efficacy of the website, making it easily
          accessible to the users. If you like to work with graphical elements,
          this course is for you.
        </p>
        <p>
          UX designers do a number of things, from figuring out problems to
          finding the solution, they have a great impact on the overall
          appearance of a website. As a result, most companies are searching for
          skilled designers to create user-friendly websites.
        </p>
        <p>
          The course starts with the basics of sketching, where you will learn
          the process of designing apps or websites using flowcharts. You will
          also learn to use AdobeXD and Figma softwares. Completing all the
          projects, you can make your own portfolio showing the practical skills
          to stand out in the job market.
        </p>
      </div>
      <div>
        <h1 className="text-2xl font-bold my-10">Career Opportunities</h1>
        <FlexItem gap="gap-5">
          <div>
            <img src="/images/opportunities1.svg" alt="" />
            <p className="mt-4">
              UX designers do a number of things, from figuring out problems to
              finding the solution, they have a great impact on the overall
              appearance of a website. As a result, most of the companies are
              searching for skilled designers to create user friendly websites.
            </p>
          </div>
          <div>
            <img src="/images/opportunities2.png" alt="" />
            <p className="mt-4">
              The course starts with the basics of sketching, where you will
              learn the process of designing apps or websites using flowcharts.
              You will also learn to use Figma softwares. Completing all the
              projects, you can make your own portfolio showing the practical
              skills to stand out in the job market.
            </p>
          </div>
        </FlexItem>
      </div>
      <div className="mt-5">
        <h2 className="text-xl font-bold border-b pb-2 mb-4">Helpline</h2>
        <p>
          For any queries regarding this batch, call{" "}
          <span className="font-bold">+88 01321231828</span> (09 Am to 06 Pm)
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

export default CourseDetailDescription;
