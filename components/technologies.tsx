const tech = [
  {
    header: "Programming Languages",
    list: ["JavaScript/TypeScript", "Python", "HTML/CSS", "C#"],
  },
  {
    header: "Database Technologies",
    list: [
      "MySQL - PlanetScale",
      "PostgreSQL - Neon/Vercel",
      "Redis - Upstash/Vercel",
      "MongoDB/Mongoose ORM",
    ],
  },
  {
    header: "Frontend Frameworks",
    list: ["React", "Next.js", "Jinja", "EJS"],
  },
  {
    header: "Cloud Platforms",
    list: ["Vercel", "AWS (Amazon Web Services)"],
  },
  {
    header: "Version Control Systems",
    list: ["Git/GitHub", "Subversion (SVN)"],
  },
  {
    header: "Web Technologies",
    list: ["REST", "tRPC", "HTTP/HTTPS", "Ajax"],
  },
  {
    header: "Authentication",
    list: ["Clerk", "NextAuth", "Auth0", "JWT and OAuth"],
  },
  {
    header: "UI Libraries",
    list: ["Tailwind CSS", "Shadcn UI", "MUI"],
  },
  {
    header: "Server Technologies",
    list: ["Express.js", "Flask"],
  },
  {
    header: "Project Management Tools",
    list: ["Jira", "Linear", "Asana", "Trello", "ClickUp"],
  },
  {
    header: "Misc.",
    list: [
      "CI/CD",
      "Agile/Scrum",
      "Figma/Sketch",
      "CDN/Caching/Lazy Loading",
      "DevOps",
    ],
  },
];

export default function Technologies() {
  return (
    <>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 pt-16">
        Skills and Technologies
      </h2>
      <div className="grid md:grid-cols-2">
        {tech.map((t) => (
          <div key={t.header} className="py-2">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              {t.header}
            </h3>
            <ul>
              {t.list.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
