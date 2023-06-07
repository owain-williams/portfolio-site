type TechStack = {
  name: string;
  url: string;
};

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  techStack: TechStack[];
};

export default Project;