import { baseUrl } from "@/config";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const VerifyPage = () => {
  const router = useRouter();

  const id = router.query.id;
  useEffect(() => {
    baseUrl
      .post("/verified-email", { verified_code: id })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="flex justify-center items-center  flex-col h-screen container">
      <img
        src="https://i.postimg.cc/Kjwc4n4J/undraw-a-whole-year-vnfm.png"
        alt=""
        className="w-[50%] h-[50%]"
      />
      <h2 className="text-black text-5xl font-bold">Thank you</h2>
      <p className="tracking-wider mt-1">
        Your email verify successfully, Now you can{" "}
        <Link href="/login" className="text-primary mx-1 font-bold">
          Login from here
        </Link>
      </p>
    </div>
  );
};

export default VerifyPage;
