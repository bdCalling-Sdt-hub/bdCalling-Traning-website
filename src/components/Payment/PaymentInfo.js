"use client";

import useAuth from "@/hooks/useAuth";
import MetaTag from "@/shared/MetaTag";
import { useRouter } from "next/router";
import TopHeading from "../Common/TopHeading";
import PaymentMethod from "./PaymentMethod";

const PaymentInfo = ({ data }) => {
  const router = useRouter();
  const { user } = useAuth();

  const conData = data?.join("/");

  let token;
  if (typeof window !== undefined) {
    token = localStorage.token;
  }

  if (!token) {
    router.push("/login");
    localStorage.setItem("route", `/payment/${conData}`);
  }

  return (
    <div className="container">
      <MetaTag title="Payment" />
      <TopHeading blueText="COMPLETE YOUR PURCHASE" />
      <PaymentMethod data={data} />
    </div>
  );
};

export default PaymentInfo;
