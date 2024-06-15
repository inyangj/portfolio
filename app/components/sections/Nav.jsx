"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public/assets/images";
import { menu, close } from "@/public/assets/icons";
import Button from "../elements/Button";

const Nav = () => {
  const [showSideNav, setShowSideNav] = useState(false);

  const toggleSideNav = () => {
    setShowSideNav((prev) => !prev);
  };

  return (
    <nav className="md:text-xl">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="logo"
            width={24}
            height={24}
            className="rounded"
          />
          <Link href="/">
            <h1>{`< Inyang / >`}</h1>
          </Link>
        </div>
        <ul className="hidden lg:flex items-center gap-4">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <Button className="hidden lg:block">Download Resume</Button>
        <button
          className="lg:hidden z-20"
          onClick={toggleSideNav}
          aria-label="Toggle menu"
        >
          <Image src={menu} alt="menu" width={35} height={35} />
        </button>
      </div>

      {showSideNav && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 "
          onClick={toggleSideNav}
        >
          <div
            className="fixed top-0 right-0 w-80 h-full sm:w-96    bg-primary-blue z-50 p-6 flex justify-between flex-col "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-4"
              onClick={toggleSideNav}
              aria-label="Close menu"
            >
              <Image src={close} alt="close" width={35} height={35} />
            </button>
            <div aria-hidden="true"></div>
            <ul className="flex flex-col items-center gap-8 mt-16 text-xl">
              <li>
                <Link href="/about" onClick={toggleSideNav}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" onClick={toggleSideNav}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={toggleSideNav}>
                  Contact
                </Link>
              </li>
            </ul>
            <Button className="mt-8">Download Resume</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
