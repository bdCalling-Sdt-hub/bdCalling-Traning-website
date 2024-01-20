"use client";

import MetaTag from "@/shared/MetaTag";
import { useRouter } from "next/router";
import TopHeading from "../Common/TopHeading";
import PaymentMethod from "./PaymentMethod";

const PaymentInfo = () => {
  const router = useRouter();

  console.log(router);

  const token = localStorage.token;

  if (!token) {
    router.push("/login");
  }
  return (
    <div className="container">
      <MetaTag title="Payment" />
      <TopHeading blueText="COMPLETE YOUR PURCHASE" />
      <PaymentMethod />
    </div>
  );
};

export default PaymentInfo;
