import RootLayout from "@/components/Layouts/RootLayout";
import PaymentInfo from "@/components/Payment/PaymentInfo";

const Payment = () => {
  return (
    <>
      <PaymentInfo />
    </>
  );
};

export default Payment;

Payment.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};
