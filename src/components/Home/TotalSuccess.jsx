import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

const SuccessItem = ({ title, total }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const targetValue = total;
      const duration = 10;

      const animation = animate(count, targetValue, { duration });

      // You can update the target value dynamically for each item
      setTimeout(() => {
        const newTargetValue = total - 500; // Example: decrease by 500
        animate(count, newTargetValue, { duration });
      }, 5000);

      return animation.stop;
    }
  }, [count, isInView, total]);

  return (
    <div ref={ref} className="text-white mt-24 space-y-2">
      <motion.h1 className="text-4xl">
        {title === "Success Ratio" ? `${total}%` : rounded}
      </motion.h1>
      <p>{title}</p>
    </div>
  );
};

const TotalSuccess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const successList = [
    { title: "Successful Students", total: 2500 },
    { title: "Expert Freelancers", total: 700 },
    { title: "Success Ratio", total: 90 },
    { title: "Professional Mentors", total: 430 },
    { title: "Skilled Job Holders", total: 1500 },
  ];

  return (
    <div ref={ref} className="bg-primary px-10 rounded-md lg:h-[250px] my-14">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 text-center">
          {successList.map((success, index) => (
            <SuccessItem
              key={index}
              title={success.title}
              total={success.total}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TotalSuccess;
