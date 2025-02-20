import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineCodepen,
  AiOutlineInstagram,
} from "react-icons/ai";

function InformationSection(props) {
  const router = useRouter();
  const { asPath } = router;

  return (
    <section className={"h-screen grid grid-rows-3 py-24 pl-96"}>
      <div className="flex flex-col gap-4 grid-start-1">
        <h1 className={"text-2xl md:text-4xl font-bold"}>
          Tito Ardimam Rahman
        </h1>
        <h2 className={"text-lg font-medium"}>
          Creative Agency Director &middot; Computer Science Instructor
        </h2>
        <p className={"opacity-75 font-light w-3/4"}>
          Experienced leader and educator in tech and creative industries.
        </p>
      </div>
      <nav className={"invisible md:visible place-content-center"}>
        <ul className={"flex flex-col gap-6"}>
          <li>
            <Link
              href="/#About"
              className={`font-bold flex items-center gap-4 transition-all duration-500 hover:opacity-100 hover:w-64 ${asPath === "/#About" || asPath === "/" ? "opacity-100 w-64" : "opacity-35 w-32"}`}
            >
              <div
                className={`h-0.5 bg-white transition-all duration-500 w-full min-w-12 max-w-24`}
              />
              <p>ABOUT</p>
            </Link>
          </li>
          <li>
            <Link
              href="/#Experience"
              className={`font-bold flex items-center gap-4 transition-all duration-500 hover:opacity-100 hover:w-64 ${asPath === "/#Experience" ? "opacity-100 w-64" : "opacity-35 w-32"}`}
            >
              <div
                className={`h-0.5 bg-white transition-all duration-500 w-full min-w-12 max-w-24`}
              />
              <p>EXPERIENCE</p>
            </Link>
          </li>
          <li>
            <Link
              href="/#Project"
              className={`font-bold flex items-center gap-4 transition-all duration-500 hover:opacity-100 hover:w-64 ${asPath === "/#Project" ? "opacity-100 w-64" : "opacity-35 w-32"}`}
            >
              <div
                className={`h-0.5 bg-white transition-all duration-500 w-full min-w-12 max-w-24`}
              />
              <p>PROJECT</p>
            </Link>
          </li>
        </ul>
      </nav>

      <div className={"flex gap-4 self-end"}>
        <Link href="https://github.com/TitoRahman" target={"_blank"}>
          <AiFillGithub
            size={32}
            className={"opacity-75 hover:opacity-100 cursor-pointer"}
          />
        </Link>
        <Link href={"https://www.instagram.com/tito_a_r"} target={"_blank"}>
          <AiOutlineInstagram
            size={32}
            className={"opacity-75 hover:opacity-100 cursor-pointer"}
          />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/tito-rahman-1b0015225/"}
          target={"_blank"}
        >
          <AiFillLinkedin
            size={32}
            className={"opacity-75 hover:opacity-100 cursor-pointer"}
          />
        </Link>
        <Link href={"https://codepen.io/titorahman/"} target={"_blank"}>
          <AiOutlineCodepen
            size={32}
            className={"opacity-75 hover:opacity-100 cursor-pointer"}
          />
        </Link>
      </div>
    </section>
  );
}

export default InformationSection;
