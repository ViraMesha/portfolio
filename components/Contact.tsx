"use client";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

import { useSectionInView } from "@/hooks";

import SectionHeading from "./SectionHeading";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="text-center mb:20 sm:mb-28 scroll-mt-28 w-[min(100%, 38rem)]"
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-sky-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:wira.mescha@gmail.com">
          wira.mescha@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form className="mt-10 flex flex-col">
        <input
          className="h-14 rounded-lg borderBlack px-4 focus:outline-sky-700"
          type="email"
          placeholder="Your email"
        />
        <textarea
          name=""
          id=""
          className="h-52 my-3 rounded-lg borderBlack p-4 focus:outline-sky-700 resize-none"
          placeholder="Your message"
        ></textarea>
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-sky-900 hover:bg-sky-950 text-white rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
}
