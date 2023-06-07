import ProjectPreviewCard from "@/components/project_preview_card";
import Project from "../types/project";

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
      <div className="text-left">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 pt-16 ">
          About me
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6 pt-2">
          Hello! I&apos;m a Full Stack Engineer with a passion for leveraging
          technology to solve real-world problems. With a knack for building
          dynamic and interactive web applications, I&apos;ve honed my skills
          across a wide range of technologies that enable me to transform ideas
          into reality.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          My technical arsenal is diverse, covering both frontend and backend
          development. I am proficient in <strong>Next.js</strong>, a{" "}
          <strong>React</strong> framework that provides me with capabilities to
          build performant, SEO-friendly, production-grade{" "}
          <strong>JavaScript</strong> applications with ease. Alongside, I am an
          avid fan of <strong>Tailwind CSS</strong>, a utility-first CSS
          framework that gives me full control over my designs. This ensures
          that every application I build is not just highly functional, but
          aesthetically pleasing as well.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          My skills go beyond the visual surface and into the architecture that
          makes web applications robust and efficient. With{" "}
          <strong>Vercel</strong>, I deploy and host applications ensuring
          optimal performance and user experience. The{" "}
          <strong>Serverless</strong> architecture means I can move at speed,
          and with great flexibility when it comes to <strong>CI/CD</strong>. I
          use <strong>Shadcn UI</strong>, an innovative UI library, to add an
          engaging visual interface to the applications I develop. I am well
          versed in <strong>Clerk</strong>, a complete authentication and user
          management solution, which helps me provide top-notch authentication
          to the products I develop.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          I am also well-versed in handling databases, being proficient in{" "}
          <strong>Prisma</strong>, a next-generation ORM for{" "}
          <strong>Node.js</strong> and <strong>TypeScript</strong>. With{" "}
          <strong>MySQL</strong>/<strong>PlanetScale</strong> as my database
          technology of choice, I design data models that are efficient, secure,
          and scalable.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          My technical expertise, coupled with a problem-solving mindset and a
          keen eye for detail, enables me to create web applications that are
          not just functional, but also user-friendly and visually appealing. I
          always stay updated with the latest technologies and trends, ensuring
          that every product I build meets the expectations of the modern user.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          But that&apos;s not all about me! I believe in sharing knowledge and
          actively contribute to various online communities, helping budding
          developers find their footing in this vast tech landscape. I am also
          an advocate for clean and sustainable coding practices, making sure
          that every line of code I write is efficient and maintainable.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          In conclusion, I&apos;m not just a Full Stack Engineer, but a
          dedicated technophile committed to using my knowledge and skills to
          create applications that make a difference. Whether it&apos;s a
          complex enterprise solution or a unique start-up idea, I&apos;m always
          ready to take on challenges and transform your visions into reality.
        </p>
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
    </main>
  );
}
