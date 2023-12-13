import Icon from "@/components/Common/icon";
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
import Link from "next/link";
import footerLink from "../../public/db/footer.json";

const Footer = () => {
  const { usefulLinks, popularCourses, description, contacts, paymentImages } =
    footerLink;

  return (
    <footer className="bg-[#e6f8ff]">
      <div className="container py-16">
        <div className="grid grid-cols-4 gap-8 text-base-content">
          <aside>
            <a href="#">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={150}
                height={100}
              />
            </a>
            <p className="mt-4">{description}</p>
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
            <header className="font-bold mb-6">Useful Links</header>
            {usefulLinks.map((link, index) => (
              <Link
                key={index}
                href={link?.link}
                className="block mb-2 hover:underline transition"
              >
                {link?.title}
              </Link>
            ))}
          </nav>
          <nav>
            <header className="font-bold mb-6">Popular Courses</header>
            {popularCourses.map((link, index) => (
              <Link
                key={index}
                href="/courses"
                className="block mb-2 hover:underline transition"
              >
                {link?.title}
              </Link>
            ))}
          </nav>
          <nav>
            <header className="font-bold mb-6">Contact Info</header>
            <div className="flex items-center gap-2">
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
              <p>
                Daisy Garden, House 14,Block A, Banasree, main road, Dhaka-1219
              </p>
            </div>
            <h3 className="my-4 text-lg">Online Transaction Method</h3>
            <div className="flex gap-1">
              {paymentImages.map((img, index) => (
                <div key={index} className="bg-white  rounded-md px-2 py-1">
                  <Link href="/payment">
                    <Image
                      src={img.imgLink}
                      alt={`${img.title} logo`}
                      width={80}
                      height={80}
                    />
                  </Link>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-md px-2 py-1 mt-3 w-[190px] text-center">
              <Link href="/payment">
                <Image
                  src="/images/ssl.png"
                  alt="logo"
                  width={150}
                  height={150}
                />
              </Link>
            </div>
          </nav>
        </div>
      </div>
      <div className="border-t py-6">
        <div className="container flex items-center justify-between">
          <div>
            <a href="#" className="border-r mr-1 px-1">
              Privacy Policy
            </a>
            <a href="#">Terms & Conditions</a>
          </div>
          <div>
            <p>© 2023 Learn bdCalling. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
