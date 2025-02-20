import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

function ProjectCard({ thumbnailUrl, title, description, projectUrl, tools }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <a
      href={projectUrl}
      target="_blank"
      className="transition-all duration-300 border border-[#FFFFFF00]  hover:bg-gray-800 hover:border-gray-800 hover:bg-opacity-35 hover:shadow-lg m-1 rounded-lg px-6 py-4 flex"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={" w-32 h-20 mr-2 flex flex-col items-center justify-center"}
      >
        <Image
          src={thumbnailUrl}
          alt={title}
          width={1000}
          height={1000}
          className={"w-64 h-32 object-contain "}
        />
      </div>
      <div className={"flex flex-col gap-4"}>
        <h3>
          <span
            className={`transition-all duration-300 ${isHovered ? "text-accent" : "text-white"}`}
          >
            {title}
          </span>{" "}
          <span className={"p-2 "}>
            <GoArrowUpRight className="inline" />
          </span>
        </h3>
        <p className="text-sm text-gray-400">{description}</p>
        <ul className="flex flex-wrap gap-2 text-[#39CCCCFF]">
          {tools.map((tool, index) => (
            <li
              key={index}
              className="bg-[#39CCCC22]  px-4 py-1 rounded-full text-sm"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}

export default ProjectCard;
