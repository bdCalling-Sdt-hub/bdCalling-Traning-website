import TopHeading from "@/components/Common/TopHeading";
import RootLayout from "@/components/Layouts/RootLayout";
import PaymentMethod from "@/components/Payment/PaymentMethod";
import MetaTag from "@/shared/MetaTag";

const payment = () => {
  return (
    <div className="container">
      <MetaTag title="Payment" />
      <TopHeading blueText="COMPLETE YOUR PURCHASE" />
      <PaymentMethod />
    </div>
  );
};

export default payment;

payment.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};
