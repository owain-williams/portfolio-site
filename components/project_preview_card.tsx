import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Github, View } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Project from "../types/project";

export default function ProjectPreviewCard({ params }: { params: Project }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{params.title}</CardTitle>
        <CardDescription>{params.description}</CardDescription>
      </CardHeader>
      <CardContent className="relative">
        {/* Live site icon */}
        <Link href={params.liveUrl} className="py-1">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="flex flex-row items-center align-center">
                <View />
                <p className="pl-2 text-sm font-medium leading-none">Live</p>
              </TooltipTrigger>
              <TooltipContent>
                <p>See it live</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>

        {/* GitHub Icon */}
        <Link href={params.githubUrl} className="py-1">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="flex flex-row items-center align-center">
                <Github />
                <p className="pl-2 text-sm font-medium leading-none">GitHub</p>
              </TooltipTrigger>
              <TooltipContent>
                <p>See the GitHub project</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>
        <div className="flex justify-center">
          <Image
            src={params.image}
            alt={`Screenshot of ${params.title}`}
            width={640}
            height={480}
            // fill={true}
          ></Image>
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap justify-start align-middle">
        <br />
        {params.techStack.map((tech) => (
          <div key={tech.name} className="px-0.5 py-0.5">
            <Link href={tech.url}>
              <Badge>{tech.name}</Badge>
            </Link>
          </div>
        ))}
      </CardFooter>
    </Card>
  );
}
