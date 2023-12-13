import { BadgeDollarSign, Lock, PhoneCall } from "lucide-react";
import FlexItem from "../Common/FlexItem";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const PaymentMethod = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-12 mx-32">
      <div>
        <div className="border border-[#2492EB] rounded-md p-4">
          <div>
            <FlexItem gap="gap-4">
              <img
                src="/images/courseDetail.png"
                className="w-40 h-24 rounded-md object-cover"
                alt=""
              />
              <div>
                <h1 className="font-medium text-lg">
                  Certified UI/UX Designer Course{" "}
                </h1>
                <p className="text-sm">Starts on: Thursday, 26 October</p>
                <p className="text-sm">Time: 04:pm 06:pm</p>
              </div>
            </FlexItem>
            <h1 className="my-5">Payment Details</h1>
            <div className="bg-white shadow  rounded-md  flex items-center p-1 gap-1 w-full mb-7">
              <input
                type="text"
                placeholder="Discount coupon code"
                className=" h-full w-full  bg-transparent outline-none px-2 py-2"
              />

              <Button className="bg-primary rounded-md px-5 text-white py-2">
                Apply
              </Button>
            </div>
            <div className="space-y-1 mt-2 border-b mb-4">
              <FlexItem justify="justify-between">
                <p>Sub Total</p>
                <p>BDT18,000</p>
              </FlexItem>
              <FlexItem justify="justify-between">
                <p>Discount</p>
                <p className="line-through">BDT3,000</p>
              </FlexItem>
            </div>
            <FlexItem justify="justify-between">
              <p>Total</p>
              <p>BDT15,000</p>
            </FlexItem>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <div className="w-7 h-7 bg-white shadow flex items-center justify-center rounded-full">
            <PhoneCall size={18} color="#2492EB" />
          </div>
          <p>For Any Queries, Call +88 01321231802</p>
        </div>
      </div>
      <div className="border border-[#2492EB] rounded-md p-4">
        <h1 className=" font-medium mb-5 text-lg">Payment Medium</h1>
        <RadioGroup defaultValue="comfortable">
          <div className="flex items-center space-x-2 mb-1">
            <RadioGroupItem value="default" id="r1" />
            <label
              htmlFor="r1"
              className="flex items-center justify-center gap-3 bg-white shadow w-full px-5 py-3 rounded"
            >
              <img src="/images/bkash.png" width="100" alt="" />
              <p className="text-xl text-[#E2136E]">Payment</p>
            </label>
          </div>
          <div className="flex items-center space-x-2 mb-1">
            <RadioGroupItem value="comfortable" id="r2" />
            <label
              htmlFor="r2"
              className="flex items-center justify-center gap-3 bg-white shadow w-full px-5 py-3 rounded"
            >
              <img src="/images/nagad.png" width="100" alt="" />
              <p className="text-xl text-[#EC2428]">Payment</p>
            </label>
          </div>
          <div className="flex items-center space-x-2 mb-1">
            <RadioGroupItem value="compact" id="r3" />
            <label
              htmlFor="r3"
              className="flex justify-center items-center bg-white shadow w-full py-3 rounded text-center"
            >
              <img src="/images/ssl.png" width="200" alt="" />
            </label>
          </div>
        </RadioGroup>
        <div className="my-5 border-t pt-5">
          <FlexItem justify="justify-between">
            <p className="text-lg">Sub Total</p>
            <p className="text-lg">BDT15,000</p>
          </FlexItem>
        </div>
        <Button className="flex gap-1 bg-primary py-6 px-8 w-full">
          <p className="text-md uppercase">Complete Payment</p>
          <BadgeDollarSign size={20} />
        </Button>
        <p className="text-center mt-5 flex items-center justify-center gap-1">
          <Lock size={18} color="green" />
          <span>Secured Payment</span>
        </p>
      </div>
    </div>
  );
};

export default PaymentMethod;
