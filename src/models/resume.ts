import online from "../assets/online.resume.json";
import data from "../assets/resume.json";

type OnlineResume = typeof import("../assets/online.resume.json");

export enum Tag {
  /**
   * Languages
   */
  CSharp = "C#",
  JavaScript = "JavaScript",
  TypeScript = "TypeScript",
  HTML = "HTML",
  CSS = "CSS",
  Python = "Python",
  SQL = "SQL",
  Kotlin = "Kotlin",
  Java = "Java",
  R = "R",
  Scala = "Scala",
  CPlusPlus = "C++",
  XAML = "XAML",

  /**
   * Cloud
   */
  Aws = "AWS",
  Docker = "Docker",
  DynamoDB = "DynamoDB",
  S3 = "S3",
  Lambda = "Lambda",
  Terraform = "Terraform",
  GoogleCloud = "Google Cloud",
  Firestore = "Firestore",

  /**
   * Frameworks / Libraries
   */
  AspNet = "ASP.NET Core",
  Angular = "Angular 2+",
  React = "React",
  D3 = "D3",
  Flask = "Flask",
  WPF = "WPF",

  /**
   * Concepts
   */
  Microservices = "Microservices",
  FP = "FP",
  OO = "OO",
  WebDesign = "WebDesign",
  DevOps = "DevOps",
  MLEngineering = "ML Engineering"
}

export enum Section {
  Work = "work",
  Objective = "objective",
  Education = "education",
  Projects = "projects",
  Certificates = "certificates",
}

export interface Job {
  company: string;
  role: string;
  start: string;
  end: string;
  location: string;
  product: string;
  tags: Tag[];
  bullets: string[];
}
export interface Work {
  heading: string;
  jobs: Job[];
}

export interface School {
  name: string;
  major: string;
  start: string;
  end: string;
  logo: string;
}

export interface Education {
  heading: string;
  schools: School[];
}

export interface Certificates {
  heading: string;
  items: [
    {
      title: string;
      subtitle: string;
      description?: string;
    }
  ];
}

export interface Category     {
  title: string;
  tags: Tag[];
}
export interface Skills {
  heading: string;
  categories: Category[]
}

export interface Projects {
  heading: string;
  items: Project[];
}

export interface Project {
  name: string;
  start: string;
  end: string;
  description: string;
  bullets: string[];
  tags: Tag[];
}

export interface Objective {
  body: string;
}

export interface Resume {
  objective: Objective;
  work: Work;
  education: Education;
  projects: Projects;
  skills: Skills;
}

export const resume: Resume = data as Resume;
