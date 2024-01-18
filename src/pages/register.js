import RootLayout from "@/components/Layouts/RootLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();
  return (
    <div className="container my-24">
      <div className="grid grid-cols-2 items-center">
        <div>
          <div className="mb-8">
            <h2 className="font-semibold text-2xl">Create a new account</h2>
            <p>Enter your details to register</p>
          </div>
          <Input placeholder="Full Name" className="mb-4" />
          <Input placeholder="Username" className="mb-4" />
          <Input placeholder="Email" className="mb-4" />
          <Input placeholder="Password" className="mb-4" />
          <Input placeholder="Confirm Password" className="mb-4" />

          <Button className="w-full py-6 bg-primary">Register</Button>
          <p className="mt-5">
            I already haven an account?{" "}
            <Button
              onClick={() => router.push("/login")}
              variant="link"
              className="px-0 text-primary"
            >
              Sign In
            </Button>
          </p>
        </div>
        <div>
          <img
            src="https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogin.cc7f1c14.png&w=640&q=75"
            alt=""
            className="ml-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;

Register.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};
