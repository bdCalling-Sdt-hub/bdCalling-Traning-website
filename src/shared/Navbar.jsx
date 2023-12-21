import { motion } from "framer-motion";
import { AlignRight, X } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const DynamicAuthHomepage = dynamic(() => import("@/components/Auth/index"), {
    ssr: false,
  });

  const path = usePathname();

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
            <li key={index}>
              <motion.div whileTap={{ scale: 0.5 }}>
                <Link
                  className={`${
                    item.path === path ? "text-primary font-bold" : "text-black"
                  } `}
                  href={item.path}
                >
                  {item.title}
                </Link>
              </motion.div>
            </li>
          ))}

          <DynamicAuthHomepage />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
