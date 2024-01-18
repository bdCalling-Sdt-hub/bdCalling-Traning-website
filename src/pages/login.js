import RootLayout from "@/components/Layouts/RootLayout";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  return (
    <div className="container my-24">
      <div className="grid grid-cols-2 items-center">
        <div>
          <div className="mb-8">
            <h2 className="font-semibold text-2xl">Login</h2>
            <p>
              Log in with your data that you entered during your registration
            </p>
          </div>
          <Input placeholder="Email" className="mb-4" />
          <Input placeholder="Password" className="" />
          <div className="flex items-center justify-between mb-7 mt-2">
            <div className="flex space-x-2">
              <Checkbox id="terms1" />
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>
            <Button variant="link" className="px-0">
              Forget password
            </Button>
          </div>
          <Button
            className="w-full py-6 bg-primary"
            onClick={() => signIn("github")}
          >
            Login
          </Button>
          <p className="my-5">
            I haven’t account?{" "}
            <Button
              onClick={() => router.push("/register")}
              variant="link"
              className="px-0 text-primary"
            >
              Sign up
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

export default Login;

Login.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};
