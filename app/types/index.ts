// Types for portfolio data

export interface CaseStudy {
  title: string;
  category: string;
  role: string;
  duration: string;
  image: string;
  color: string;
  problem: string;
  solution: string;
  outcome: string;
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
  level: number;
}

export interface Tool {
  name: string;
  icon: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}
