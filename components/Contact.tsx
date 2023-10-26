"use client";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

import { sendEmail } from "@/actions/sendEmail";
import { useSectionInView } from "@/hooks";

import SectionHeading from "./SectionHeading";
import SubmitButton from "./SubmitButton";

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
      <p className="text-sky-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:wira.mescha@gmail.com">
          wira.mescha@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col text-sky-950"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!");
        }}
      >
        <input
          name="email"
          className="h-14 rounded-lg borderBlack px-4 focus:outline-sky-700 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
          type="email"
          placeholder="Your email"
          required
          maxLength={500}
        />
        <textarea
          name="message"
          className="h-52 my-3 rounded-lg borderBlack p-4 focus:outline-sky-700 resize-none dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
          placeholder="Your message"
          required
          maxLength={5000}
        ></textarea>
        <SubmitButton />
      </form>
    </motion.section>
  );
}
