import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ThemeSwitch from "@/components/ThemeSwitch";
import ActiveSectionContextProvider from "@/context/activeSectionContext";
import ThemeContextProvider from "@/context/ThemeContext";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vira Mesha | Portfolio",
  description: "A personal portfolio of a junior full-stack developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-sky-50 text-sky-950 relative pt-28 sm:pt-36 dark:bg-sky-900 dark:text-sky-50 dark:text-opacity-90`}
      >
        <div className="bg-[#96cef3] absolute top-[-6rem] right-[11rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.25rem] dark:bg-[#bad4e6]"></div>
        <div className="bg-[#c5c5e4] absolute top-[-1rem] left-[-35rem] -z-10 h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.25rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#597a91]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
