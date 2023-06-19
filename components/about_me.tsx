"use client";
import { motion } from "framer-motion";

export default function AboutMe() {
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
        <h2 className="ease-in scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 pt-16 ">
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
      </motion.div>
    </>
  );
}
