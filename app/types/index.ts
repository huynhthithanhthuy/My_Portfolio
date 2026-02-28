export interface CaseStudy {
  id: number;
  badge: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  year: string;
}

export interface Experience {
  id: number;
  category: string;          
  title: string;
  description: string;
  date: string;               
  role?: string;             
  duration?: string;         
  tags: string[];
  tools?: string[];          
  image: string;
  link: string;
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