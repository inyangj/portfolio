import { useState } from "react";

const ProjectCard = ({
  title,
  description,
  status,
  technologies,
  codeLink,
  siteLink,
  type,
  isWebApp,
  index,
}) => {
  const isEven = index === 0 || index % 2 === 0;

  const getAnimationClasses = () => {
    if (type === "Paid") {
      return isEven
        ? "transform lg:place-self-start animate-right"
        : "transform lg:place-self-end animate-left";
    } else {
      return isEven
        ? "transform lg:place-self-end animate-left"
        : "transform lg:place-self-start animate-right";
    }
  };

  return (
    <div
      className={`bg-[#202359] border border-[#3434ff] lg:w-[70%] rounded-lg mb-4 transition-transform ${getAnimationClasses()}`}
    >
      <div className="p-4">
        <div className="lg:flex justify-between items-center">
          <h2 className="text-xl font-bold">{title}</h2>
          <ul className="flex flex-wrap mt-2 gap-2 text-white">
            {technologies.map((tech, index) => (
              <li key={index} className="flex items-center">
                <div className="h-2 w-2 bg-primary-blue rounded-full mr-1"></div>
                <span className="text-sm">{tech}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-3">{description}</p>
      </div>
      <div className="mt-2 md:-left-6 md:absolute">
        <span
          className={`inline-block px-2 py-2 rounded ${
            status === "Completed" ? "bg-green-700" : "bg-yellow-600"
          }`}
        >
          {status}
        </span>
      </div>
      <div className="flex justify-end mt-4 md:mt-10 space-x-4 text-center items-center">
        {type !== "Paid" && (
          <a
            href={codeLink}
            target="_blank"
            className="mt-2 inline-block text-white px-4 py-2 rounded"
          >
            View Code
          </a>
        )}
        <a
          href={siteLink}
          target="_blank"
          className="bg-blue-600 rounded-tl-full w-1/2 text-white px-4 py-4 rounded"
        >
          {isWebApp ? "View App" : "View Site"}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
