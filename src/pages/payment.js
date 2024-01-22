import RootLayout from "@/components/Layouts/RootLayout";
import dynamic from "next/dynamic";

const Payment = () => {
  const DynamicPayment = dynamic(
    () => import("@/components/Payment/PaymentInfo"),
    {
      ssr: false,
    }
  );
  return (
    <>
      <DynamicPayment />
    </>
  );
};

export default Payment;

Payment.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};
