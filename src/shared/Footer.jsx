import Icon from "@/components/Common/icon";
import {
  Facebook,
  Linkedin,
  Mail,
  MapPinned,
  Phone,
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
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 text-base-content">
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
              <a
                href="https://www.facebook.com/bdcallingacademy"
                target="_blank"
              >
                <Icon>
                  <Facebook color="#e8e3e3" />
                </Icon>
              </a>
              <a
                href="https://www.linkedin.com/company/bdcallingitltd"
                target="_blank"
              >
                <Icon>
                  <Linkedin color="#e8e3e3" />
                </Icon>
              </a>
              <a href="https://www.youtube.com/@bdCalling" target="_blank">
                <Icon>
                  <Youtube color="#e8e3e3" />
                </Icon>
              </a>
              <a href="mailto:learn.bdcalling@gmail.com">
                <Icon>
                  <Mail color="#e8e3e3" />
                </Icon>
              </a>
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
            <header className="font-bold mb-6">Course Categories</header>
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
            <a href="tel:+88 01321231802">
              <div className="flex items-center gap-2">
                <Icon>
                  <Phone color="#e8e3e3" size={25} />
                </Icon>
                <p>+88 01321231802</p>
              </div>
            </a>
            <a href="mailto:learn.bdcalling@gmail.com">
              <div className="flex items-center gap-2 mt-4">
                <Icon>
                  <Mail color="#e8e3e3" />
                </Icon>
                <p>learn.bdcalling@gmail.com</p>
              </div>
            </a>
            <div className="flex items-center gap-2 mt-4">
              <Icon>
                <MapPinned size={40} color="#e8e3e3" absoluteStrokeWidth />
              </Icon>
              <p>
                Daisy Garden, House 14, Block A, Banasree, main road, Dhaka-1219
              </p>
            </div>
            <h3 className="my-4 text-lg">Online Transaction Method</h3>
            <div className="flex gap-1">
              {paymentImages.map((img, index) => (
                <div key={index} className="bg-white  rounded-md px-2 py-1">
                  <Image
                    src={img.imgLink}
                    alt={`${img.title} logo`}
                    width={80}
                    height={80}
                  />
                </div>
              ))}
            </div>
            <div className="bg-white rounded-md px-2 py-1 mt-3 w-[190px] text-center">
              <Image
                src="/images/ssl.png"
                alt="logo"
                width={150}
                height={150}
              />
            </div>
          </nav>
        </div>
      </div>
      <div className="border-t py-6">
        <div className="container lg:flex items-center justify-between">
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
