export interface Project {
  id: number;
  category: string;
  title: string;
  description: string;
  date: string;
  role?: string;
  duration?: string;
  tools?: string[];
  image: string;
  link: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  responsibilities?: string[];
  technologies?: string[];
  type?: "Full-time" | "Part-time" | "Internship" | "Freelance";
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon: string;
  description: string;
}

export interface Tool {
  name: string;
  logo: string;
  description: string;
}

export interface ContactData {
  heading: string;
  subheading: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}