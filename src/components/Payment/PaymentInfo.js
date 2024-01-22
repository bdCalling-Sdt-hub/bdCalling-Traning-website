"use client";

import useAuth from "@/hooks/useAuth";
import MetaTag from "@/shared/MetaTag";
import { useRouter } from "next/router";
import TopHeading from "../Common/TopHeading";
import PaymentMethod from "./PaymentMethod";

const PaymentInfo = () => {
  const router = useRouter();
  const { user } = useAuth();

  console.log(user);

  let token;
  if (typeof window !== undefined) {
    token = localStorage.token;
  }

  if (!token) {
    router.push("/login");
    localStorage.setItem("route", "/payment");
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
