import { ProjectItem } from "src/app/projects/project-item";

export class ClientDetails {
    id!: number;
    name!: string;
    description!: string;
    address!: string;
    email!: string;
    phone!: string;
    projects!: ProjectItem[];
}