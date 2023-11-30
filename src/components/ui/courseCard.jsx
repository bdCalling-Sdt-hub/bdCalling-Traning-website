import { BookOpenText, Clock8, Users } from "lucide-react";
import Image from "next/image";
import { Button } from "./button";

const CourseCard = ({ course }) => {
  const {
    image,
    batchNo,
    countRating,
    courseStatus,
    duration,
    price,
    rating,
    remainSeat,
    title,
  } = course;
  return (
    <div className="shadow p-3  rounded-md">
      <div>
        <Image
          src={image}
          alt="course image"
          className="rounded-md"
          width={300}
          height={300}
          layout="responsive"
        />
        <div className="flex items-center justify-between mt-4">
          <p className="flex items-center gap-1">
            {" "}
            <BookOpenText size={20} />
            Batch {batchNo}
          </p>
          <div className="bg-[#1796fd] text-white rounded-sm py-1 px-5">
            {courseStatus}
          </div>
        </div>
        <div className="flex items-center justify-between mt-4 border-b pb-2">
          <p size={20} className="flex items-center gap-1">
            <Users />
            {remainSeat} Seats Left
          </p>
          <p size={18} className="flex items-center gap-1">
            <Clock8 />
            {duration} Days Lest
          </p>
        </div>
        <h2>{title}</h2>
        <div className="flex items-center justify-between mt-4">
          <p>{price}BDT</p>
          <p>{rating}(20)</p>
        </div>
      </div>
      <Button className="w-full">Enroll Now</Button>
    </div>
  );
};

export default CourseCard;
