import Project from "../types/project";
import ProjectPreviewCard from "@/components/project_preview_card";

const projects: Project[] = [
  {
    id: 1,
    title: "Blog Site",
    description:
      "This project was completed with no tutorial, and for the most part over two evenings. The goal was to create a blog site using Next.js and Tailwind CSS. The site is hosted on Vercel. The styling is purposefully basic, as is the functionality. The goal was to get a basic understanding of Next.js 13 Server Components and Server Actions.",
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

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Owain Williams
      </h1>
      <sub className="text-xl text-muted-foreground">Full Stack Developer</sub>
      {/* Once more projects are added, add lg:grid-cols-2 */}
      <div className="grid grid-cols-1 py-4">
        {projects.map((project) => (
          <ProjectPreviewCard key={project.id} params={project} />
        ))}
      </div>
    </main>
  );
}
