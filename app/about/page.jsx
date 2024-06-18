import Head from "next/head";
import React from "react";
import { Button } from "../components/elements";

const About = () => {
  const technicalSkills = [
    "Typescript",
    "Next.js",
    "React.js",
    "Responsive Web Design",
    "JavaScript",
    "CSS3",
    "HTML5",
    "Redux & RTK",
    "Tailwind CSS",
    "Material UI",
    "Git & GitHub",
  ];

  return (
    <>
      <Head>
        <title>About Me - Inyang Inyang</title>
        <meta
          name="description"
          content="Learn more about Inyang Inyang, a passionate frontend developer with over 3 years of experience."
        />
      </Head>
      <div className="min-h-screen p-5 md:p-12">
        <main className="flex flex-col items-center w-full max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-8">
            GET TO KNOW <span className="text-green-500">ME</span>
          </h1>
          <section className="text-lg space-y-4 text-center">
            <p>
              Hello! I'm Inyang Inyang, a passionate and dedicated frontend
              developer with over 3 years of experience in creating engaging and
              user-friendly web applications. My journey in tech has been driven
              by curiosity, continuous learning, and a desire to solve
              real-world problems through innovative solutions.
            </p>
            <p>
              My tech journey began during my undergraduate studies in Geology
              at the University of Calabar, Nigeria. I was fascinated by
              software development and started teaching myself programming,
              beginning with basic HTML and CSS, and soon moved on to
              JavaScript.
            </p>
            <p>
              After completing my degree and the compulsory National Service, I
              immersed myself in the tech industry through the guidance of
              Renaissance Innovation Labs, focusing on modern JavaScript
              frameworks and libraries, particularly React.js.
            </p>
          </section>
          <section className="mt-8 w-full">
            <h3 className="text-2xl font-bold text-center mb-4">
              Technical Skills
            </h3>
            <div className="flex flex-wrap justify-center space-x-2">
              {technicalSkills.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-700 text-white p-2 rounded m-2"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </main>
        <aside className="w-full max-w-5xl mt-8 mx-auto">
          <h3 className="text-2xl font-bold">Frontend Developer</h3>
          <p>Renaissance Innovation Labs</p>
          <p>Oct 2022 - Current (Full Time)</p>
          <ul className="list-disc ml-4 mt-2 space-y-2">
            <li>Participate in design reviews and code reviews.</li>
            <li>
              Worked in the capacity of a frontend developer, building and
              maintaining web applications.
            </li>
            <li>
              Significant increase in user activity and engagement through
              optimized frontend solutions.
            </li>
            <li>
              Researched and designed the landing page and other key components
              for various projects.
            </li>
          </ul>
        </aside>
        <footer className="mt-8 flex justify-center">
          <Button className="p-3 rounded text-lg">Download Resume</Button>
        </footer>
      </div>
    </>
  );
};

export default About;
