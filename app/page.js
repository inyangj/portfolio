"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { profile } from "@/public/assets/images";
import { github, linkedin, twitter } from "@/public/assets/icons";
import Button from "./components/elements/Button";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const slideViewRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    if (slideViewRef.current) {
      observer.observe(slideViewRef.current);
    }

    return () => {
      if (slideViewRef.current) {
        observer.unobserve(slideViewRef.current);
      }
    };
  }, []);

  return (
    <main className="px-5 md:px-12 xl:px-0 font-inconsolata grid place-content-center lg:place-content-stretch h-[800px] sm:h-full sm:pb-6 lg:pb-0">
      <article className="flex flex-col lg:flex-row lg:justify-between lg:gap-5 xl:gap-0  ">
        <div className="text-3xl sm:text-4xl">
          <h2>
            Hi <span className="emoji-wave">👋</span>
          </h2>
          <p>
            I am <span className="capitalize font-oswald">Inyang Johnson</span>
          </p>
          <div className="text-lg w-96 xl:w-[500px] mt-8 hidden lg:block">
            <h1 className="text-3xl font-bold hidden">Inyang</h1>
            <p className="lg:text-xl font-semibold my-6 hidden">
              Frontend Developer
            </p>
            <p className="text-xl">
              I'm a <em>frontend developer</em> based in Port Harcourt, Nigeria,
              specializing in creating visually stunning, functional, and
              responsive websites.
            </p>
            <div className="flex gap-4 mt-6">
              <Button className={`w-full`}>Get in touch</Button>
            </div>
          </div>
        </div>
        <div className="flex items-center relative">
          <div className="border-[8px] border-dashed rounded-full border-[#202359] w-72 h-72 sm:h-[360px] sm:w-[360px] ">
            <Image src={profile} alt="hero" className="rounded-full" />
          </div>
          <div className="grid gap-4 text-2xl">
            <div className="absolute top-4 right-20 sm:right-52 lg:right-14 xl:right-20 flex gap-2 items-center">
              <Image
                src={github}
                alt="hero"
                className="rounded-full flex gap-2 items-center"
              />
              <p className="hidden sm:block lg:hidden xl:block capitalize">
                Github
              </p>
            </div>
            <div className="flex gap-2 items-center ml-3 sm:ml-5">
              <Image src={linkedin} alt="hero" className="rounded-full" />
              <p className="hidden sm:block lg:hidden xl:block capitalize">
                linkedin
              </p>
            </div>
            <div className="absolute bottom-2 sm:bottom-4 right-20 sm:right-44 lg:right-14 flex gap-2 items-center">
              <Image src={twitter} alt="hero" className="rounded-full" />
              <p className="hidden sm:block lg:hidden xl:block capitalize">
                twitterX
              </p>
            </div>
          </div>
        </div>

        <div
          ref={slideViewRef}
          className={`flex-1 text-lg mt-8 lg:hidden transition-opacity duration-500 ease-out ${
            isVisible ? "slide-in-bottom" : "opacity-0"
          }`}
        >
          <h1 className="text-3xl font-bold hidden">Inyang</h1>
          <p className="lg:text-xl font-semibold my-6 hidden">
            Frontend Developer
          </p>
          <p className="text-xl sm:text-2xl">
            I'm a <em>frontend developer</em> based in Port Harcourt, Nigeria,
            specializing in creating visually stunning, functional, and
            responsive websites.
          </p>
          <div className="flex gap-4 mt-6">
            <Button className={`w-full`}>Get in touch</Button>
          </div>
        </div>
      </article>
    </main>
  );
}
