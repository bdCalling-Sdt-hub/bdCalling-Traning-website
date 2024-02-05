"use client";

import useAuth from "@/hooks/useAuth";
import MetaTag from "@/shared/MetaTag";
import { useRouter } from "next/router";
import TopHeading from "../Common/TopHeading";
import PaymentMethod from "./PaymentMethod";

const PaymentInfo = ({ data }) => {
  const router = useRouter();
  const { user } = useAuth();

  console.log("py", user);

  const conData = data?.join("/");

  let token;
  if (typeof window !== undefined) {
    token = localStorage.token;
  }

  if (!token && user?.userType != "") {
    router.push("/login");
    localStorage.setItem("route", `/payment/${conData}`);
  }

  if (user?.userType === "STUDENT") {
    return (
      <div className="container">
        <MetaTag title="Payment" />
        <TopHeading blueText="COMPLETE YOUR PURCHASE" />
        <PaymentMethod data={data} />
      </div>
    );
  }
};

export default PaymentInfo;
