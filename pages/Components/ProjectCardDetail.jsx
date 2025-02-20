import React from "react";

function ProjectCardDetail({
  title,
  description,
  skills,
  link,
  years,
  thumbnailUrl,
}) {
  return (
    <a
      href={link}
      target="_blank"
      className={
        "hover:text-accent flex gap-2 w-1/2 font-semibold text-lg hover:cursor-pointer "
      }
    >
      <div className="transition-all duration-300 border border-[#FFFFFF00]  hover:bg-gray-800 hover:border-gray-800 hover:bg-opacity-35 hover:shadow-lg m-1 rounded-lg px-6 py-4 flex">
        <div
          className={
            " w-32 h-20 mr-2 flex flex-col items-center justify-center"
          }
        >
          <img
            src={thumbnailUrl}
            alt={title}
            className={"w-64 h-32 object-contain "}
          />
        </div>
        <div className={"flex flex-col gap-4"}>
          <h3>
            <span className={"transition-all duration-300 text-accent"}>
              {title}
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

export default ProjectCardDetail;
