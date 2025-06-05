import type { StaticImageData } from "next/image";

export type ProjectStatus = "in-progress" | "published" | "coming-soon";

export type Project = {
  title: string;
  description?: string;
  descriptionHtml?: string;
  imageUrl: string | StaticImageData;
  repoUrl?: string;
  date: string;
  status: ProjectStatus;
  skillsUsed?: string[];
  placeholderImage?: boolean;
  expandedDetails?: string[];
};
