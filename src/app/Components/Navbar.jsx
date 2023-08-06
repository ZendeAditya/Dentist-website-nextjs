"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/app/Assets/logo.jpeg";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import Hero from "./Hero";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handlMenu = () => {
    setOpen(!open);
  };
  const Links = [
    { name: "About Us", link: "home" },
    { name: "Our Team", link: "about" },
    { name: "Our Services", link: "contact" },
    { name: "Contact Us", link: "services" },
    { name: "Blog", link: "blog" },
  ];
  return (
    <section className="h-screen w-screen">
      <nav className=" flex items-center justify-between bg-transparent px-7 border-b-2 py-2 shadow-md w-screen">
      <div>
        <Image src={Logo} alt="logo" width={60} />
      </div>
      <ul className={`flex items-center justify-between gap-x-7 px-2`}>
        {Links.map((element, index) => (
          <li
            className="hover:border-b-4 hover:border-[#FF7F50] cursor-pointer hover:text-orange-500 hover:duration-300"
            key={Math.random()}
          >
            <Link href={element.link}>{element.name}</Link>
          </li>
        ))}
      </ul>
      <div>
        <button className="py-3 px-3 bg-[#FF7F50] rounded-full hover:bg-[#FF6347] text-white">
          Make Appointment
        </button>
      </div>
      {open ? (
        <RxCross1
          className="text-3xl  text-black z-20  right-5 top-6 cursor-pointer md:hidden "
          onClick={handlMenu}
        />
      ) : (
        <GiHamburgerMenu
          className="text-3xl font-bold text-black z-20  right-5 top-6 cursor-pointer md:hidden "
          onClick={handlMenu}
        />
      )}
    </nav>
    <Hero/>
    </section>
  );
};

export default Navbar;
