import RootLayout from "@/components/Layouts/RootLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { baseUrl } from "@/config";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let redirect = "/";

  // Check if running on the client side
  if (typeof window !== "undefined") {
    // Access localStorage only on the client side
    redirect = localStorage.route || "/";
  }

  const onSubmit = async (data) => {
    try {
      const res = await baseUrl.post("/login", data);

      if (typeof window !== "undefined") {
        localStorage.setItem("token", res.data.access_token);

        router.push(redirect);
      }

      localStorage.removeItem("route");
      reset();
    } catch (err) {}
  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <Input
                placeholder="Email"
                name="email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>

            <div className="mb-5">
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

            {/* <div className="flex items-center justify-between mb-7 mt-2">
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
            </div> */}
            <Button type="submit" className="w-full py-6 bg-primary">
              Login
            </Button>
          </form>
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

// export const getServerSideProps = async () => {
//   const res = await fetch("http://192.168.10.13:8000/api/login");
//   const data = await res.json();

//   console.log(data);

//   return {};
// };
