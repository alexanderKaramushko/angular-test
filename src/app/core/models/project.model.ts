// todo d.ts не виден глобально
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="shared-kernel.d.ts" />

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
