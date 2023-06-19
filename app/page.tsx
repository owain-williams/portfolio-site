"use client";
import AboutMe from "@/components/about_me";
import Portfolio from "@/components/portfolio";
import Technologies from "@/components/technologies";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <motion.div
        initial={{ x: -1080, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Owain Williams
        </h1>
        <sub className="text-xl text-muted-foreground">
          Full Stack Developer
        </sub>
      </motion.div>
      <div className="text-left">
        <AboutMe />
        <Portfolio />
        <Technologies />
      </div>
    </main>
  );
}
