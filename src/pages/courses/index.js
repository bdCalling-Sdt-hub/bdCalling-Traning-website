import { useRouter } from "next/router";
import { useEffect } from "react";

const CourseHomePage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/courses/offline");
  }, [router]);
};

export default CourseHomePage;
