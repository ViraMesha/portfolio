"use client";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";

import { useActiveSectionContext } from "@/context/activeSectionContext";
import { links } from "@/lib/data";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 flex py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-zinc-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map(({ hash, name }) => (
            <motion.li
              key={hash}
              className="h-3/4 flex items-center justify-center relative"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={hash}
                className={clsx(
                  "w-full flex items-center justify-center p-3 hover:text-zinc-700 transition",
                  { "text-zinc-700": activeSection === name }
                )}
                onClick={() => {
                  setActiveSection(name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {name}
                {name === activeSection && (
                  <motion.span
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                    className="bg-sky-100 rounded-full absolute inset-0 -z-10"
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
