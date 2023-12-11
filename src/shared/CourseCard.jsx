import { BookOpenText, Clock8, Star, UsersRound } from "lucide-react";
import { useRouter } from "next/router";
import { Button } from "../components/ui/button";
import Link from "next/link";

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
  const router = useRouter();
  return (
    <Link href={`/courses/${id}`}>
      <div className="p-3 rounded-lg shadow hover:shadow-xl hover:scale-[102%] transition-all cursor-pointer">
        <div>
          <img src={image} alt="course image" className="rounded-md w-full" />
          <div className="flex items-center justify-between mt-4">
            <p className="flex items-center gap-1">
              {" "}
              <BookOpenText size={20} />
              Batch {batchNo}
            </p>
            <div className="bg-primary text-white rounded-md py-1 px-5">
              {courseStatus}
            </div>
          </div>
          <div className="flex items-center justify-between mt-4 border-b pb-2">
            <p size={20} className="flex items-center gap-1">
              <UsersRound size={20} />
              {remainSeat} Seats Left
            </p>
            <p size={18} className="flex items-center gap-1">
              <Clock8 size={20} />
              {duration} Days Lest
            </p>
          </div>
          <h2 className="my-3">{title}</h2>
          <div className="flex items-center justify-between my-4">
            <p>{price}BDT</p>
            <div className="flex items-center gap-1">
              <div className="flex">
                <Star size={20} color="#ffc60b" />
                <Star size={20} color="#ffc60b" />
                <Star size={20} color="#ffc60b" />
                <Star size={20} color="#ffc60b" />
                <Star size={20} color="#ffc60b" />
              </div>
              {rating}(20)
            </div>
          </div>
        </div>
        <Button
          variant="outline"
          className="w-full border border-[#2492EB] text-[#2492EB] py-5"
        >
          Enroll Now
        </Button>
      </div>
    </Link>
  );
};

export default CourseCard;
