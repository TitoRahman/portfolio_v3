import React from "react";
import GlowEffect from "@/effect/GlowEffect";
import ProjectCardDetail from "@/pages/Components/ProjectCardDetail";

function ProjectPage() {
  const projects = [
    {
      thumbnailUrl: "",
      title: "Kebun Center Super App",
      description:
        "Creating a super app for Kebun Center tuition, mainly for absent checking, schedule management, and handling students data.",
      projectUrl: "https://kebuncenter.id/",
      skills: ["Firebase", "React Native"],
    },
    {
      thumbnailUrl: "/project-thumbnail/lumidzn-thumbnail.webp",
      title: "Lumidzn Studio",
      description:
        "A landing page for Lumidzn Studio, showcasing our services and portfolio.",
      projectUrl: "https://www.lumidzn.com/",
      skills: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      thumbnailUrl: "/project-thumbnail/cato-thumbnail.webp",
      title: "Online Delivery App",
      description:
        "Developed an interactive platform for students to learn programming languages.",
      projectUrl: "https://github.com/Speedwagon-Org/catering-ta-mobile",
      skills: ["Kotlin", "Firebase", "Android SDK"],
    },
  ];
  return (
    <div
      className={
        "bg-gradient-to-br from-slate-900 to-gray-900 h-screen py-24 px-32"
      }
    >
      <h1>Projects</h1>
      <div className={"flex flex-wrap gap-4"}>
        {projects.map((project, index) => (
          <ProjectCardDetail
            key={index}
            thumbnailUrl={project.thumbnailUrl}
            title={project.title}
            description={project.description}
            projectUrl={project.projectUrl}
            skills={project.skills}
          />
        ))}
        <GlowEffect />
      </div>
    </div>
  );
}

export default ProjectPage;
