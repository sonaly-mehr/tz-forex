"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  { lable: "Home", href: "/" },
  { lable: "About Us", href: "/about-us" },
  { lable: "Refer a friend", href: "/refer" },
  { lable: "Contact Us", href: "/contact" },
  { lable: "Blog", href: "/blog" },
];
const Navbar = () => {
  const pathname = usePathname();

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

    const isLinkActive = (href) =>
    href === "/blog" ? pathname.startsWith("/blog") : pathname === href;
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4 }}
      className="w-full  text-white bg-primary py-6"
    >
      <div className="w-full lg:w-[90%] mx-auto px-4 lg:px-0">
        <div className=" bg-white/10 backdrop-blur-[24px] py-3 lg:py-2.5 px-3  lg:px-4 rounded-2xl">
          <nav className="flex justify-between items-center w-full ">
            <Link href="/">
              <Image
                src="/img/logo.svg"
                alt=""
                width={150}
                height={46}
                className="w-[110px] lg:w-[140px] xl:w-[150px] h-auto"
              />
            </Link>
            <ul className="hidden lg:flex gap-5 xl:gap-3 items-center justify-center">
              {navLinks.map((link) => {
                const isActive =
  link.href === "/blog" ? pathname.startsWith("/blog") : pathname === link.href;
                return (
                  <motion.li
                    key={link.href}
                    className={[
                      "py-3.5 px-6 rounded-lg text-sm lg:text-base font-matter-regular transition-colors duration-300",
                      // always white text, slightly faded when not active
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-white/70 hover:text-white/90",
                      // add the hover-background only when not active
                      !isActive && "hover:bg-white/10",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <Link href={link?.href}>{link?.lable}</Link>
                  </motion.li>
                );
              })}
            </ul>

            <div className="hidden lg:flex">
              <button
                href="/register"
                className="
text-sm lg:text-base
    font-matter-medium
    text-dark bg-white
     flex justify-center items-center
    px-3 lg:px-6 rounded-lg pt-1 lg:pt-2.5 py-3.5
    transform
    transition-transform duration-200 ease-in-out
    hover:scale-105
  "
              >
                Get Started Now
              </button>
            </div>

            {/* Hamburger Icon */}
            <div onClick={handleNav} className="lg:hidden relative z-10">
              <CgMenuRight className="cursor-pointer text-white text-[28px]" />
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="relative z-[100]">
        <div
          className={
            nav
              ? "lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          <div
            className={
              nav
                ? " fixed left-0 top-0 w-[70%] sm:w-[60%] md:w-[45%] h-screen bg-primary p-8 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-8 ease-in duration-500 h-screen bg-white"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <Link href="/">
                  <Image
                    src="/img/logo.svg"
                    width="80"
                    height="120"
                    alt="/"
                    className=""
                  />
                </Link>
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-md shadow-gray-800 p-2 cursor-pointer"
                >
                  <X className="text-white" size={18} />
                </div>
              </div>
            </div>
            <div className="py-9 flex flex-col">
              <ul className="uppercase flex flex-col gap-3">
                {navLinks?.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setNav(false)}
                className={[
                  "text-base font-semibold transition-colors duration-300",
                  active
                    ? "bg-white/10 text-white p-2 rounded-lg"
                    : "text-white/70 hover:text-white hover:bg-white/10 p-2 rounded-lg",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {link.lable}
              </Link>
            );
          })}
              </ul>
            </div>

            <div className="flex flex-col gap-3.5">
              <Link
                href="/login"
                className="text-2xl font-semibold font-darkerGrotesque text-white hover:text-white/90 transition-colors duration-300"
              >
                Log in
              </Link>
              <button
                href="/register"
                className="
text-sm lg:text-base
    font-matter-medium
    text-dark bg-white
     flex justify-center items-center
    px-3 lg:px-6 rounded-lg py-3.5
    transform
    transition-transform duration-200 ease-in-out
    hover:scale-105 w-fit
  "
              >
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
