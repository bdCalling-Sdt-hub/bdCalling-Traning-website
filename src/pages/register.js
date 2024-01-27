import RootLayout from "@/components/Layouts/RootLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { baseUrl } from "@/config";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const router = useRouter();

  const [d, setD] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      setD(true);
      const value = { ...data, userType: "STUDENT" };
      const res = await baseUrl.post("/register", value);

      alert(res.data?.message);

      setD(false);
      reset();
    } catch (err) {
      console.log(err);
    } finally {
      setD(false);
    }
  };

  return (
    <div className="container my-24">
      <div className="grid grid-cols-2 items-center">
        <div>
          <div className="mb-8">
            <h2 className="font-semibold text-2xl">Create a new account</h2>
            <p>Enter your details to register</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <Input
                type="text"
                placeholder="Full Name"
                name="fullName"
                {...register("fullName", { required: true })}
              />
              {errors.fullName && (
                <span className="text-red-500">Name is required</span>
              )}
            </div>
            <div className="mb-4">
              <Input
                type="text"
                placeholder="User Name"
                name="userName"
                {...register("userName", { required: true })}
              />
              {errors.userName && (
                <span className="text-red-500">Username is required</span>
              )}
            </div>
            <div className="mb-4">
              <Input
                type="email"
                placeholder="Email"
                name="email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>
            <div className="mb-4">
              <Input
                type="number"
                placeholder="Phone number"
                name="mobileNumber"
                {...register("mobileNumber", { required: true })}
              />
              {errors.mobileNumber && (
                <span className="text-red-500">Phone number is required</span>
              )}
            </div>
            <div className="mb-4">
              <Input
                type="password"
                placeholder="Password"
                name="password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500">Password is required</span>
              )}
            </div>
            <div className="mb-4">
              <Input
                type="password"
                placeholder="Confirm password"
                name="password_confirmation"
                {...register("password_confirmation", { required: true })}
              />
              {errors.password_confirmation && (
                <span className="text-red-500">
                  Confirm password is required
                </span>
              )}
            </div>

            {d ? (
              <h2 className="mt-2 text-center">Loading...</h2>
            ) : (
              <Button className="w-full py-6 bg-primary">Register</Button>
            )}
          </form>
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
