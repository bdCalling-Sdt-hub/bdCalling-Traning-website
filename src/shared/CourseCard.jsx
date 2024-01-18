import { imgUrl } from "@/config";
import styles from "@/styles/card.module.css";
import { BookOpenText, Clock8, Star, UsersRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/button";

const CourseCard = ({ course }) => {
  // console.log(course);
  const {
    courseThumbnail,
    batch,
    countRating,
    id,
    status,
    duration,
    price,
    rating,
    seat_left,
    courseName,
    discount_price,
  } = course;

  return (
    <Link href={`/courses/${status}/${id}`}>
      <div
        className={`rounded-lg hover:-translate-y-5 group ${styles.courseCard}`}
        style={{
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      >
        <Image
          src={`${imgUrl}/${courseThumbnail}`}
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
              Batch {batch}
            </p>
            <div className="bg-gradient-to-tr from-[#80b3dd] to-[#0779d6] text-white rounded-md py-1 px-5">
              {status}
            </div>
          </div>
          <div className="flex items-center justify-between mt-4 border-b pb-2">
            <p size={20} className="flex items-center gap-1">
              <UsersRound size={20} color="#1796fd" />
              {seat_left} Seats Left
            </p>
            <p size={18} className="flex items-center gap-1">
              <Clock8 size={20} color="#1796fd" />
              {duration} Days Left
            </p>
          </div>
          <h2 className="my-3 text-lg capitalize">{courseName}</h2>
          <div className="flex items-center justify-between my-4">
            <div className="flex gap-4 items-center">
              <h2 className="text-lg font-bold">{discount_price}BDT</h2>
              <p className="line-through">BDT{price}</p>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex">
                <Star size={20} color="#ffc60b" fill="#ffc60b" />
                <Star size={20} color="#ffc60b" fill="#ffc60b" />
                <Star size={20} color="#ffc60b" fill="#ffc60b" />
                <Star size={20} color="#ffc60b" fill="#ffc60b" />
                <Star size={20} color="#ffc60b" fill="#ffc60b" />
              </div>
              5(20)
            </div>
          </div>
          <Button
            className={`w-full shadow text-white py-6 text-md ${styles.enrollBtn}`}
          >
            Enroll Now
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
