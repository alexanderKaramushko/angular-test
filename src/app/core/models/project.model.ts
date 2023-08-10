export type Project = {
  id: ProjectId;
  subject: string;
  description: string;
  createdBy: string;
  startDate: string;
  endDate: string;
  cost: number;
}

export type Projects = {
  Projects: Project[];
}
