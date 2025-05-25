export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  achievements: string[];
  github: string;
  live?: string;
}

export type ProjectType = Project;