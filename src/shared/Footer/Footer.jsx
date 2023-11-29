import Icon from "@/components/ui/icon";
import {
  Facebook,
  Linkedin,
  Mail,
  MapPinned,
  Phone,
  Send,
  Youtube,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="grid grid-cols-4 gap-8 p-10 bg-[#e6f8ff] text-base-content">
      <aside>
        <a href="#">
          <Image src="/images/logo.png" alt="logo" width={150} height={100} />
        </a>
        <p className="mt-4">
          What brings innovation to everything we do is collaboration. We help
          each other, solve issues we face, we enjoys sweet talks. We shape up
          each other’s ideas to bring the best out of them.
        </p>
        <h4 className="font-bold mt-4 mb-2">Share Now</h4>
        <div className="flex items-center gap-2">
          <Icon>
            <Facebook color="#e8e3e3" />
          </Icon>
          <Icon>
            <Linkedin color="#e8e3e3" />
          </Icon>
          <Icon>
            <Youtube color="#e8e3e3" />
          </Icon>
          <Icon>
            <Mail color="#e8e3e3" />
          </Icon>
          <Icon>
            <Send color="#e8e3e3" />
          </Icon>
        </div>
      </aside>
      <nav>
        <header className="font-bold">Useful Links</header>
        <a className="block mt-4">About Us</a>
        <a className="block">Contact Us</a>
        <a className="block">Success Story</a>
        <a className="block">Free Seminar Schedule</a>
        <a className="block">Mentors</a>
        <a className="block">Refund Policy</a>
      </nav>
      <nav>
        <header className="font-bold">Popular Courses</header>
        <a className="block mt-4">Lead Generation-Data Entry </a>
        <a className="block">Digital Marketing</a>
        <a className="block">WordPress Specialist</a>
        <a className="block">Graphics Designer</a>
        <a className="block">UX/UI Designer</a>
        <a className="block">APP Developer with Flutter </a>
        <a className="block">Front-End Development </a>
        <a className="block">MERN STACK Developer</a>
      </nav>
      <nav>
        <header className="font-bold">Contact Info</header>
        <div className="flex items-center gap-2 mt-4">
          <Icon>
            <Phone color="#e8e3e3" size={25} />
          </Icon>
          <p>+88 01321231802</p>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <Icon>
            <Mail color="#e8e3e3" />
          </Icon>
          <p>learn.bdcalling@gmail.com</p>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <Icon>
            <MapPinned size={40} color="#e8e3e3" absoluteStrokeWidth />
          </Icon>
          <p>Daisy Garden, House 14,Block A, Banasree, main road, Dhaka-1219</p>
        </div>
        <h3 className="my-4 text-lg">Online Transaction Method</h3>
        <div className="flex gap-1">
          <div className="bg-white  rounded-md px-2 py-1">
            <a href="#">
              <Image
                src="/images/bkash.png"
                alt="logo"
                width={80}
                height={80}
              />
            </a>
          </div>
          <div className="bg-white rounded-md px-2 py-1">
            <a href="#">
              <Image
                src="/images/nagad.png"
                alt="logo"
                width={80}
                height={80}
              />
            </a>
          </div>
        </div>
        <div className="bg-white rounded-md px-2 py-1 mt-3 w-[190px]">
          <a href="#">
            <Image src="/images/ssl.png" alt="logo" width={200} height={200} />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
