"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";

import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useSectionInView } from "@/hooks";
import avatarImg from "@/public/images/avatar.jpg";

export default function Intro() {
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={avatarImg}
              alt="Vira Mesha's portrait"
              width={150}
              height={150}
              quality="90"
              priority
              className="h-24 w-24 object-cover rounded-full border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, my name is Vira! </span>
        I'm a <span className="font-bold">full-stack developer </span>with{" "}
        <span className="font-bold">experience</span> working on{" "}
        <span className="font-bold"> team projects.</span> I have a passion for{" "}
        <span className="italic"> web development</span> and a solid foundation
        in <span className="underline"> front-end technologies</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
          href="#contact"
          className="group bg-sky-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-sky-950 active:scale-105 transition"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/CV.pdf"
          target="_blank"
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition borderBlack dark:bg-white/10"
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          href="http://linkedin.com/in/vira-mesha"
          aria-label="Link to Vira's Linkedin"
          target="_blank"
          rel="noreferrer noopener"
          className="bg-white text-sky-900 text-[1.35rem] p-3 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 hover:text-sky-950  active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/ViraMesha"
          aria-label="Link to Vira's Github"
          target="_blank"
          rel="noreferrer noopener"
          className="bg-white text-sky-900 text-[1.35rem] p-3 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 hover:text-sky-950 active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
