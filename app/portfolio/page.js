"use client";

import { useState } from "react";
import ProjectCard from "./component/ProjectCard";

const projects = [
  {
    title: "funMight Beauty Shop",
    description: "A beauty shop web application",
    status: "In Progress",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS", "Ant Design"],
    codeLink: "https://github.com/inyangj/FunMigh-Beauty-Shop",
    siteLink: "https://funmight-beauty-shop.vercel.app/",
    type: "Paid",
    isWebApp: true,
  },
  {
    title: "Larger Than I",
    description: "NGO website",
    status: "Completed",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS", "Ant Design"],
    codeLink: "https://github.com/Cedar1000/larger-than-i-website",
    siteLink: "https://www.largerthani.org/",
    type: "Paid",
    isWebApp: false,
  },
  {
    title: "RIL Booking Widget Landing Page",
    description: "A landing page for the RIL Booking Widget.",
    status: "Completed",
    technologies: ["HTML5", "JavaScript", "Tailwind CSS"],
    codeLink:
      "https://github.com/Renaissance-Innovation-Labs/booking-widget-landingpage",
    siteLink: "https://booking-widget-landingpage.vercel.app/",
    type: "Paid",
    isWebApp: false,
  },
  {
    title: "Headless HR Landing Page",
    description: "A landing page for the Headless HR project.",
    status: "Completed",
    technologies: ["HTML5", "JavaScript", "Tailwind CSS"],
    codeLink:
      "https://github.com/Renaissance-Innovation-Labs/headless-hr-landing-page",
    siteLink: "https://www.headlesshr.com/",
    type: "Paid",
    isWebApp: false,
  },
  {
    title: "RIL Playground",
    description: "A playground for RIL projects and experiments.",
    status: "Completed",
    technologies: ["vite.js", "Tailwind CSS"],
    codeLink: "https://github.com/Renaissance-Innovation-Labs/ril-play-ground",
    siteLink: "https://ril-play-ground.vercel.app/",
    type: "Paid",
    isWebApp: false,
  },
  {
    title: "Event Buddy",
    description: "A web application for managing and attending events.",
    status: "Completed",
    technologies: ["vite.js", "Tailwind CSS"],
    codeLink: "https://github.com/Renaissance-Innovation-Labs/event-buddy",
    siteLink: "https://event-buddy-ruby.vercel.app/",
    type: "Personal",
    isWebApp: true,
  },
  {
    title: "RIL Merger",
    description: "An article merger tool for combining and managing articles.",
    status: "Completed",
    technologies: ["vite.js", "Tailwind CSS"],
    codeLink: "https://github.com/inyangj/Article-Merger",
    siteLink: "https://article-merger-git-main-inyangj.vercel.app/",
    type: "Personal",
    isWebApp: true,
  },
  {
    title: "BRAG",
    description:
      "A platform for sharing and discovering projects and achievements.",
    status: "Completed",
    technologies: ["vite.js", "Tailwind CSS"],
    codeLink: "https://github.com/inyangj/brag",
    siteLink: "https://brag-chi.vercel.app",
    type: "Personal",
    isWebApp: true,
  },
  {
    title: "AI Paraphraser",
    description: "A web application for paraphrasing text using AI.",
    status: "Completed",
    technologies: ["vite.js", "Tailwind CSS"],
    codeLink: "https://github.com/inyangj/Paraphraser",
    siteLink: "https://paraphraser-w8i4-git-main-inyangj.vercel.app/",
    type: "Personal",
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
