"use client";

import { useState } from "react";
import ProjectCard from "./component/ProjectCard";

const projects = [
  {
    title: "My Portfolio",
    description:
      "My new portfolio capturing my 3+ years of frontend development",
    status: "In Progress",
    technologies: ["Figma", "Next.js", "TypeScript", "Tailwind CSS"],
    codeLink: "#",
    siteLink: "#",
    type: "Personal",
    isWebApp: true,
  },
  {
    title: "For Travel Bay",
    description:
      "Clean and sharp authentication pages for Travel Bay UI challenge, integrated login and sign up using GraphQL",
    status: "Completed",
    technologies: ["React.js", "GraphQL", "Tailwind CSS"],
    codeLink: "#",
    siteLink: "#",
    type: "Personal",
    isWebApp: true,
  },
  {
    title: "Logistics Dashboard",
    description:
      "A static and simple logistics dashboard (2021) with cool animations and loading states",
    status: "Completed",
    technologies: ["Next.js", "CSS3", "Tailwind CSS"],
    codeLink: "#",
    siteLink: "#",
    type: "Personal",
    isWebApp: false,
  },
  {
    title: "E-commerce Platform",
    description:
      "A complete e-commerce platform with payment integration and admin dashboard.",
    status: "Completed",
    technologies: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    codeLink: "#",
    siteLink: "#",
    type: "Paid",
    isWebApp: true,
  },
  {
    title: "Corporate Website",
    description: "A sleek and modern corporate website for a financial firm.",
    status: "Completed",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    codeLink: "#",
    siteLink: "#",
    type: "Paid",
    isWebApp: false,
  },
  {
    title: "Mobile App UI",
    description: "Designed and developed the UI for a mobile app.",
    status: "Completed",
    technologies: ["React Native", "Tailwind CSS"],
    codeLink: "#",
    siteLink: "#",
    type: "Paid",
    isWebApp: true,
  },
];

export default function Home() {
    const [filter, setFilter] = useState("Personal");

    const filteredProjects = projects.filter(
      (project) => project.type === filter
    );

    return (
      <section className="px-5 md:px-12 pb-10">
        <div className="">
          <h1 className="text-3xl font-bold">Some of My Projects</h1>
          <p className="mt-4 ">
            Discover a range of my projects, highlighting my frontend
            development experience. From ReactJS to Next.js, each project
            reflects my journey, showcasing intuitive interfaces, and fast,
            innovative applications with meticulous attention to detail.
          </p>
        </div>
        <div className="mt-8 ">
          <div className="flex justify-center mb-4">
            <button
              className={`px-4 py-2 rounded uppercase ${
                filter === "Personal" ? "bg-[#202359]" : "bg-transparent"
              }`}
              onClick={() => setFilter("Personal")}
            >
              Personal
            </button>
            <button
              className={`px-4 py-2 rounded ml-4 uppercase ${
                filter === "Paid" ? "bg-[#202359]" : " bg-transparent"
              }`}
              onClick={() => setFilter("Paid")}
            >
              Paid
            </button>
          </div>
          <div className="grid grid-cols-1 gap-4 ">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} index={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    );
}
