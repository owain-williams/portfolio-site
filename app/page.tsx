import AboutMe from "@/components/about_me";
import Portfolio from "@/components/portfolio";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Owain Williams
      </h1>
      <sub className="text-xl text-muted-foreground">Full Stack Developer</sub>
      <div className="text-left">
        <AboutMe />
        <Portfolio />
      </div>
    </main>
  );
}
