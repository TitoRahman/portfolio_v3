import React from "react";
import ExperienceCard from "@/pages/Components/ExperienceCard";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";
import ProjectCard from "@/pages/Components/ProjectCard";
import Link from "next/link";

function DetailSection(props) {
  const experiences = [
    {
      company: "Lumidzn Studio",
      title: "Founder & Director",
      startYear: 2024,
      endYear: "Present",
      description:
        "Managed a team of designers and developers to create digital assets for clients. Oversaw project management, client communication, and quality assurance.",
      skills: ["Management", "Communication", "QA", "Leadership"],
      companySite: "https://lumidzn.com",
      isHovered: false,
    },
    {
      company: "Kebun Center",
      title: "Computer Instructor",
      startYear: 2022,
      endYear: "Present",
      description:
        "Taught programming and design to students of all ages. Developed curriculum, lesson plans, and assessments for various courses.",
      skills: [
        "Python",
        "C/C++",
        "HTML & CSS",
        "Photoshop",
        "Corel Draw",
        "Figma",
        "JavaScript",
        "Java",
        "Competitive Programming",
        "Leadership",
        "Office Automation",
      ],
      companySite: "https://kebuncenter.id",
      isHovered: false,
    },
    {
      company: "Bangkit Academy",
      title: "Android Developer Cohort",
      startYear: 2023,
      endYear: 2023,
      description:
        "Gained experience in Android development, learning Kotlin, Android Jetpack, SOLID principles, and UI/UX design.",
      skills: [
        "Time Management",
        "Communication",
        "Kotlin",
        "Android Jetpack",
        "SOLID Principles",
        "UI/UX Design",
      ],
      companySite: "https://grow.google/intl/id_id/bangkit/",
      isHovered: false,
    },
    {
      company: "Mikroskil University",
      title: "Head of Event Division",
      startYear: 2022,
      endYear: 2022,
      description:
        "Organized events and managed teams to ensure successful university functions and activities.",
      skills: ["Management", "Communication", "Teamwork", "Leadership"],
      companySite: "https://mikroskil.ac.id",
      isHovered: false,
    },
    {
      company: "Sutomo 1 Medan",
      title: "Lecture Assistant",
      startYear: 2019,
      endYear: 2022,
      description:
        "Assisted in teaching programming and design, developing lesson plans, and mentoring students.",
      skills: [
        "Python",
        "Teamwork",
        "C++",
        "Visual Basic",
        "Photoshop",
        "Corel Draw",
        "Problem Solving",
        "Leadership",
        "Office Automation",
      ],
      companySite: "https://sutomo-mdn.sch.id/",
      isHovered: false,
    },
  ];

  const projects = [
    {
      thumbnailUrl: "",
      title: "Kebun Center Super App",
      description:
        "Creating a super app for Kebun Center tuition, mainly for absent checking, schedule management, and handling students data.",
      projectUrl: "https://kebuncenter.id/",
      tools: ["Firebase", "React Native"],
    },
    {
      thumbnailUrl: "/project-thumbnail/lumidzn-thumbnail.webp",
      title: "Lumidzn Studio",
      description:
        "A landing page for Lumidzn Studio, showcasing our services and portfolio.",
      projectUrl: "https://www.lumidzn.com/",
      tools: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      thumbnailUrl: "/project-thumbnail/cato-thumbnail.webp",
      title: "Online Delivery App",
      description:
        "Developed an interactive platform for students to learn programming languages.",
      projectUrl: "https://github.com/Speedwagon-Org/catering-ta-mobile",
      tools: ["Kotlin", "Firebase", "Android SDK"],
    },
  ];

  return (
    <section
      className={
        " py-24 overflow-x-hidden h-screen overflow-scroll scroll-m-2 text-gray-400 "
      }
    >
      {/* ABOUT Section */}
      <section id="About" className="flex flex-col gap-4 mb-12 ml-8 mr-80">
        <p>
          I'm a developer, educator, and leader passionate about building teams
          and solving challenges in tech and design. I love learning, sharing
          knowledge, and creating simple, user-friendly solutions.
        </p>
        <p>
          Currently, I teach programming and design at{" "}
          <a href="https://kebuncenter.id/" target="_blank">
            Kebun Center
          </a>
          , mentoring students for the past two years. I'm also the director of{" "}
          <a href="https://lumidzn.com" target="_blank">
            Lumidzn Studio
          </a>
          , where we help businesses and individuals manage their digital
          assets, including websites, logos, and ads.
        </p>
        <p>
          I hold a Computer Science degree from{" "}
          <a href="https://mikroskil.ac.id/" target="_blank">
            Mikroskil University
          </a>
          . Previously, I worked as a Lecturer Assistant at{" "}
          <a href="https://sutomo-mdn.sch.id/" target="_blank">
            Sutomo 1 Medan
          </a>{" "}
          for two years before becoming a full-time instructor. Alongside
          teaching, I freelance as a developer and designer, helping businesses
          solve digital challenges.
        </p>
        <p>
          In my free time, I enjoy music, gaming, and sports. I’m always open to
          new opportunities and collaborations feel free to reach out!
        </p>
      </section>
      {/* EXPERIENCE Section */}
      <section id="Experience" className="flex flex-col gap-4 mr-72">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            company={experience.company}
            title={experience.title}
            startYear={experience.startYear}
            endYear={experience.endYear}
            description={experience.description}
            skills={experience.skills}
            companySite={experience.companySite}
          />
        ))}
        <a
          href="https://drive.google.com/file/d/1839lgdYDdmHX6SzqLxuEct6PvakbqdZp/view?usp=sharing"
          className={
            "hover:text-accent flex gap-2 w-fit font-semibold text-lg mb-24"
          }
          target={"_blank"}
        >
          <p>View Full Résumé</p>
          <GoArrowUpRight className={"self-center"} />
        </a>
      </section>

      {/* PROJECT Section */}
      <section id="Project" className={"flex flex-col gap-4 mr-72"}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            thumbnailUrl={project.thumbnailUrl}
            title={project.title}
            description={project.description}
            projectUrl={project.projectUrl}
            tools={project.tools}
          />
        ))}
        {/*<Link*/}
        {/*  href="/project"*/}
        {/*  className={"hover:text-accent flex gap-2 w-fit font-semibold text-lg"}*/}
        {/*  target={"_blank"}*/}
        {/*>*/}
        {/*  <p>View All Previous Project</p>*/}
        {/*  <GoArrowRight className={"self-center"} />*/}
        {/*</Link>*/}
      </section>

      <footer className={" w-1/3 text-xs p-2 rounded-full mt-12 "}>
        Designed & Developed with{" "}
        <a href={"https://nextjs.org"} target={"_blank"}>
          Next.js
        </a>{" "}
        &{" "}
        <a href={"https://tailwindcss.com"} target={"_blank"}>
          Tailwind CSS
        </a>
        . Design inspired by{" "}
        <a href={"https://brittanychiang.com"}>Brittany Chiang</a>.
      </footer>
    </section>
  );
}

export default DetailSection;
