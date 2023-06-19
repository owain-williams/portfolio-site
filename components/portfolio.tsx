"use client";
import Project from "../types/project";
import ProjectPreviewCard from "./project_preview_card";
import { motion } from "framer-motion";

const projects: Project[] = [
  {
    id: 1,
    title: "Blog Site",
    description:
      "This project was completed with no tutorial, and for the most part over two evenings. The styling is purposefully basic, as is the functionality. The goal was to get a basic understanding of Next.js 13 Server Components and Server Actions using only the documentation.",
    image: "/blog-site.png",
    liveUrl: "https://blog-site.owainwilliams.io",
    githubUrl: "https://github.com/owain-williams/blog-site2",
    techStack: [
      {
        name: "Next.js",
        url: "https://nextjs.org/",
      },
      {
        name: "Tailwind CSS",
        url: "https://tailwindcss.com/",
      },
      {
        name: "Vercel",
        url: "https://vercel.com/",
      },
      {
        name: "Clerk",
        url: "https://clerk.dev/",
      },
      {
        name: "shadcn UI",
        url: "https://ui.shadcn.com",
      },
      {
        name: "Prisma",
        url: "https://www.prisma.io/",
      },
      {
        name: "PlanetScale",
        url: "https://planetscale.com/",
      },
    ],
  },
];

export default function Portfolio() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        animate={{
          scale: [1.1, 1],
        }}
      >
        <div className="flex flex-col lg:columns-2">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 pt-16">
            Portfolio
          </h2>
          {/* Once more projects are added, add lg:grid-cols-2 */}
          <div className="grid grid-cols-1 py-4">
            {projects.map((project) => (
              <ProjectPreviewCard key={project.id} params={project} />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
