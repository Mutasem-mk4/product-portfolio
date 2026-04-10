import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export interface ProjectData {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  status: 'Active' | 'Shipped';
  href: string;
  stars: string;
}

export function ProjectCard({ project }: { project: ProjectData }) {
  return (
    <Card className="shadow-[0px_0px_0px_1px_rgba(0,0,0,0.08),0px_2px_2px_rgba(0,0,0,0.04),0px_8px_8px_-8px_rgba(0,0,0,0.04),0px_0px_0px_1px_#fafafa] hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.08),0px_2px_2px_rgba(0,0,0,0.04),0px_8px_8px_-8px_rgba(0,0,0,0.04),0px_0px_0px_1px_#fafafa,0px_12px_24px_-12px_rgba(0,0,0,0.06)] transition-shadow duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-2">
          <div className="w-10 h-10 rounded-md border border-border flex items-center justify-center bg-background">
            {project.icon}
          </div>
          <Badge
            variant="secondary"
            className={`rounded-full text-xs font-medium ${
              project.status === 'Active'
                ? 'bg-[#ebf5ff] text-[#0068d6]'
                : 'bg-[#f0fdf4] text-[#15803d]'
            }`}
          >
            {project.status}
          </Badge>
        </div>
        <CardTitle className="text-2xl font-semibold tracking-[-0.04em]">
          {project.title}
        </CardTitle>
        <CardDescription className="text-base text-muted-foreground leading-relaxed mt-1">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-md border border-gray-100"
            >
              {tag}
            </span>
          ))}
        </div>
        <Separator className="mb-3" />
        <div className="flex items-center justify-between">
          <a
            href={project.href}
            className="text-sm font-medium text-[#0072f5] underline underline-offset-2 hover:text-[#0a72ef] transition-colors"
          >
            View Project →
          </a>
          <span className="font-mono text-xs font-medium text-muted-foreground">
            ★ {project.stars}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
