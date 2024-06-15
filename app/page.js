import Image from "next/image";
import {profile} from '@/public/assets/images'
import {github, github1, linkedin, twitter} from '@/public/assets/icons'
import Button from "./components/elements/Button";

export default function Home() {
  return (
    <main className=" px-5  md:px-12">
      <article className="flex flex-col lg:flex-row justify-between  gap-5 ">
        <div className="text-3xl">
          <h2>Hi 👋</h2>
          <p>
            {" "}
            I am <span className=" capitalize ">Inyang Johnson</span>{" "}
          </p>
          <div className=" text-lg w-96 mt-8 hidden lg:block">
            <h1 className="text-3xl font-bold hidden ">Inyang</h1>
            <p className="lg:text-xl font-semibold my-6 hidden">
              Frontend Developer
            </p>
            <p>
              I'm a <em>frontend developer</em> based in Port Harcourt, Nigeria,
              specializing in creating visually stunning, functional, and
              responsive websites.
            </p>
            <div className="flex gap-4 mt-6">
              <Button className={`w-full`}>Get in touch</Button>
            </div>
          </div>
        </div>
        <div className="flex items-center relative  ">
          <div className=" border-[8px] border-dashed  rounded-full border-[#202359] w-72 h-72 sm:h-[360px] sm:w-[360px]">
            <Image src={profile} alt="hero" className="rounded-full" />
          </div>
          <div className="grid gap-4 text-3xl lg:">
            <div className=" absolute top-4 right-12 sm:right-48 lg:right-14 flex gap-2 items-center ">
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
              <Image src={linkedin} alt="hero" className="rounded-full " />
              <p className="hidden sm:block lg:hidden xl:block capitalize">
                linkedin
              </p>
            </div>
            <div className="absolute bottom-4 right-12 sm:right-44 lg:right-14 flex gap-2 items-center">
              <Image src={twitter} alt="hero" className="rounded-full " />
              <p className="hidden sm:block lg:hidden xl:block capitalize">
                twitterX
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 text-lg mt-8 lg:hidden">
          <h1 className="text-3xl font-bold hidden ">Inyang</h1>
          <p className="lg:text-xl font-semibold my-6 hidden">
            Frontend Developer
          </p>
          <p>
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
