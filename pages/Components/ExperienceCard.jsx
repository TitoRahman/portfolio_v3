import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function ExperienceCard({
  startYear,
  endYear,
  title,
  description,
  company,
  skills = [],
  companySite,
}) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <a
      href={companySite}
      target="_blank"
      className="transition-all duration-300 border border-[#FFFFFF00]  hover:bg-gray-800 hover:border-gray-800 hover:bg-opacity-35 hover:shadow-lg m-1 rounded-lg px-6 py-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex gap-8 ">
        <p className="text-sm text-gray-400 font-semibold min-w-32">
          {startYear} - {endYear === 0 ? "PRESENT" : endYear}
        </p>
        <div className="flex gap-4 flex-col ">
          <h3
            className={`transition - all duration-300 ${isHovered ? "text-accent" : "text-white"}`}
          >
            <span>{title}</span> <span>&middot;</span> <span>{company}</span>
            <span className={"p-2 "}>
              <GoArrowUpRight className="inline" />
            </span>
          </h3>

          <p className="text-sm text-gray-400">{description}</p>
          <ul className="flex flex-wrap gap-2 text-[#39CCCCFF]">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="bg-[#39CCCC22]  px-4 py-1 rounded-full text-sm"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </a>
  );
}

export default ExperienceCard;
