import { BookOpenText, Clock8, Star, UsersRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/button";

const CourseCard = ({ course }) => {
  const {
    image,
    batchNo,
    countRating,
    id,
    courseStatus,
    duration,
    price,
    rating,
    remainSeat,
    title,
  } = course;

  return (
    <Link href={`/courses/${courseStatus}/${id}`}>
      <div
        className="rounded-lg hover:-translate-y-5 duration-300 transition-all group bg-gradient-to-tr from-[#fdfdfd] to-[#fffcfc] "
        style={{
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      >
        <Image
          src={image}
          alt="course image"
          className="rounded-t-lg w-full h-[240px]"
          width={400}
          height={240}
        />
        <div className="p-3">
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-1">
              {" "}
              <BookOpenText size={20} color="#1796fd" />
              Batch {batchNo}
            </p>
            <div className="bg-gradient-to-tr from-[#80b3dd] to-[#0779d6] text-white rounded-md py-1 px-5">
              {courseStatus}
            </div>
          </div>
          <div className="flex items-center justify-between mt-4 border-b pb-2">
            <p size={20} className="flex items-center gap-1">
              <UsersRound size={20} color="#1796fd" />
              {remainSeat} Seats Left
            </p>
            <p size={18} className="flex items-center gap-1">
              <Clock8 size={20} color="#1796fd" />
              {duration} Days Lest
            </p>
          </div>
          <h2 className="my-3 text-lg">{title}</h2>
          <div className="flex items-center justify-between my-4">
            <div className="flex gap-4 items-center">
              <h2 className="text-lg font-bold text-gray-700">{price}BDT</h2>
              <p className="line-through">BDT3,000</p>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex">
                <Star size={20} color="#ffc60b" fill="#ffc60b" />
                <Star size={20} color="#ffc60b" fill="#ffc60b" />
                <Star size={20} color="#ffc60b" fill="#ffc60b" />
                <Star size={20} color="#ffc60b" fill="#ffc60b" />
                <Star size={20} color="#ffc60b" />
              </div>
              {rating}(20)
            </div>
          </div>
          <Button className="w-full border  text-white py-6 text-md group-hover:bg-primary duration-300">
            Enroll Now
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
