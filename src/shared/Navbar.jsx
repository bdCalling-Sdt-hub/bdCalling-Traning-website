import { AlignRight, X } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isActive, setIsActive] = useState("Home");
  const DynamicAuthHomepage = dynamic(() => import("@/components/Auth/index"), {
    ssr: false,
  });

  const items = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About Us",
      path: "/about",
    },
    {
      title: "Courses",
      path: "/courses",
    },
    {
      title: "Success Stories",
      path: "/success-stories",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  console.log(isActive);

  return (
    <div className="bg-[#e6f8ff] sticky top-0 z-50 py-4">
      <nav className="container lg:flex items-center w-full justify-between ">
        <div className="flex items-center justify-between">
          <Link href="/">
            <img className="w-24 md:w-36" src="/images/logo.png" alt="logo" />
          </Link>
          <div
            className="lg:hidden cursor-pointer text-white active:duration-300"
            onClick={() => setOpen(!open)}
          >
            {!open ? <AlignRight color="#1796fd" /> : <X color="#1796fd" />}
          </div>
        </div>

        <ul
          className={`space-y-5 lg:space-y-0 lg:flex gap-10  items-center bg-[#e6f8ff] lg:bg-transparent p-4 lg:p-0  absolute lg:static  h-auto ${
            open ? "left-0 top-14 w-full" : "left-0 -top-96"
          }`}
        >
          {items.map((item, index) => (
            <li
              className={`hover:text-primary  ${
                isActive === item.title ? "text-primary" : "text-black"
              } `}
              key={index}
              onClick={() => setIsActive(item.title)}
            >
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}

          <DynamicAuthHomepage />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
