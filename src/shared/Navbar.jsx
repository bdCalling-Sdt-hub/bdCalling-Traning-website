import { Button } from "@/components/ui/button";
import { AlignJustify, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
            {!open ? <AlignJustify /> : <X />}
          </div>
        </div>

        <ul
          className={`space-y-5 lg:space-y-0 lg:flex gap-10  items-center bg-[#e6f8ff] lg:bg-transparent p-4 lg:p-0  absolute lg:static  h-auto ${
            open ? "left-0 top-14 w-full" : "left-0 -top-96"
          }`}
        >
          <li className="link-nav">
            <Link href="/our-creators">Our Creators</Link>
          </li>
          <li className="link-nav">
            <Link href="/who-we-are">Who are we</Link>
          </li>
          <li className="link-nav">
            <Link href="/how-it-work">How it works</Link>
          </li>
          <li className="link-nav">
            <Link href="/contact">Contact</Link>
          </li>

          <Button className="text-white bg-primary px-4 py-3 rounded-md transition img-shadow cursor-pointer">
            Login
          </Button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
