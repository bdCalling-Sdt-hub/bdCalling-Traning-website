/* eslint-disable @next/next/no-html-link-for-pages */

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import {
  BookOpenText,
  Briefcase,
  Gift,
  GraduationCap,
  LineChart,
  Speech,
} from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

const components = [
  {
    title: "Courses",
    href: "/courses",
    icon: <BookOpenText color="#7c3aed" />,
  },
  {
    title: "Career Opportunities",
    href: "/docs/primitives/hover-card",
    icon: <LineChart color="#4f46e5" />,
  },
  {
    title: "Payment Support",
    href: "/docs/primitives/progress",
    icon: <Gift color="#db2777" />,
  },
  {
    title: "Certificate",
    href: "/docs/primitives/scroll-area",
    icon: <GraduationCap color="#65a30d" />,
  },
  {
    title: "Open Job Position",
    href: "/docs/primitives/tabs",
    icon: <Briefcase color="#16a34a" />,
  },
  {
    title: "Helpline",
    href: "/docs/primitives/tooltip",
    icon: <Speech color="#ca8a04" />,
  },
];

export function Navbar() {
  const DynamicAuthHomepage = dynamic(() => import("@/components/Auth/index"), {
    ssr: false,
  });
  return (
    <div className="bg-[#e6f8ff] sticky top-0 z-10">
      <div className="container mx-auto flex items-center  justify-between  px-10 py-4">
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" width={140} height={100} />
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} `}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[450px] ">
                  {components.map((component) => {
                    const uri = (
                      <div className="flex items-center gap-2">
                        <span>{component.icon}</span>
                        <span>{component.title}</span>
                      </div>
                    );
                    return (
                      <ListItem
                        key={component.title}
                        title={uri}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    );
                  })}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/success-stories" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Success Stories
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div>
          <DynamicAuthHomepage />
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
