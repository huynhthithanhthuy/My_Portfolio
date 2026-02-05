import {
  CaseStudy,
  Experience,
  ProcessStep,
  Skill,
  Testimonial,
  Tool,
} from "../types";

export const aboutData = {
  sectionLabel: "About Me",
  heading: "Passionate about creating",
  headingAccent: "meaningful experiences",
  description: [
    "I'm a fourth-year Management Information Systems student at Ho Chi Minh City Open University and a junior UX/UI Designer. I'm interested in how design, technology, and business come together to create meaningful digital products.",
    "Through my studies and personal projects, I've gained experience in UX research, user flows, wireframing, and UI design. My background in information systems helps me understand product logic and how users interact with systems.",
  ],
  quickInfo: [
    { icon: "GraduationCap", label: "Management Information Systems" },
    { icon: "Sparkles", label: "3.6 GPA" },
  ],
  quote: "Good design is simple, purposeful, and focused on real user needs.",
  image: "/images/Profile.jpg",
  imageAlt: "Thanh Thuy - UX/UI Designer",
  cvLink: "/cv.pdf",
  ctaText: "Download CV",
};


export const experienceData = {
  sectionLabel: "Journey",
  heading: "Experience",
  subheading: "My professional journey in design",
  experience: {
    role: "UX/UI Design Intern",
    company: "Tech Company Name",
    period: "Jan 2024 - Present",
    description:
      "Collaborated with the design team to create user-centered interfaces for mobile and web applications. Conducted user research, developed wireframes and prototypes, and contributed to the design system.",
  },
};


export const worksData = {
  sectionLabel: "Portfolio",
  heading: "Featured Projects",
  subheading: "A collection of projects where research meets creativity",
  projects: [
    {
      id: 1,
      badge: "Mobile App Design",
      title: "Discover Movies Made Simple",
      description:
        "A movie streaming app designed to help users easily discover, explore, and enjoy films they love. The app focuses on clear navigation, personalized recommendations, and a smooth watching experience across devices.",
      tags: ["UI/UX Design", "Mobile App", "Movie Streaming"],
      image: "/images/behance-1.png",
      link: "https://example.com/project-1",
      year: "2025",
    },
    {
      id: 2,
      badge: "Dashboard UI",
      title: "Simplify Your",
      description:
        "An intuitive analytics dashboard that transforms complex data into actionable insights. Built with a focus on clarity and ease of use for business professionals.",
      tags: ["Web Design", "Dashboard", "Analytics"],
      image: "/images/project-2.jpg",
      link: "https://example.com/project-2",
      year: "2024",
    },
  ],
};

export const caseStudies: CaseStudy[] = [
  {
    title: "E-Commerce Redesign",
    category: "Product Manager",
    role: "Lead Designer",
    duration: "3 months",
    image: "🛍️",
    color: "from-blue-50 to-blue-100",
    problem: "Low conversion rate and high cart abandonment",
    solution: "Redesigned checkout flow, reduced steps from 5 to 3",
    outcome: "+45% conversion, -32% cart abandonment",
    link: "https://www.pinterest.com/pin/788763322280012200/",
  },
  {
    title: "Healthcare Mobile App",
    category: "Mobile UX/UI",
    role: "UX Designer",
    duration: "4 months",
    image: "💊",
    color: "from-green-50 to-green-100",
    problem: "Patients struggling to book appointments",
    solution: "Simplified booking flow with smart suggestions",
    outcome: "4.8★ rating, 10k+ downloads in 2 months",
    link: "/projects/healthcare",
  },
  {
    title: "SaaS Dashboard",
    category: "Product Design",
    role: "Product Designer",
    duration: "6 months",
    image: "📊",
    color: "from-purple-50 to-purple-100",
    problem: "Complex data visualization overwhelming users",
    solution: "Modular dashboard with customizable widgets",
    outcome: "+60% user engagement, -40% support tickets",
    link: "/projects/saas-dashboard",
  },
];

export const designProcess: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description: "User research, stakeholder interviews, competitive analysis",
    icon: "🔍",
  },
  {
    step: "02",
    title: "Define",
    description: "User personas, journey maps, problem statements",
    icon: "🎯",
  },
  {
    step: "03",
    title: "Ideate",
    description: "Brainstorming, sketching, information architecture",
    icon: "💡",
  },
  {
    step: "04",
    title: "Design",
    description: "Wireframes, prototypes, visual design, design systems",
    icon: "✨",
  },
  {
    step: "05",
    title: "Test",
    description: "Usability testing, feedback loops, iterations",
    icon: "🧪",
  },
];

export const skills: Skill[] = [
  { name: "UX Research", level: 90 },
  { name: "Wireframing", level: 95 },
  { name: "UI Design", level: 92 },
  { name: "Prototyping", level: 88 },
  { name: "Usability Testing", level: 85 },
  { name: "Design System", level: 87 },
];

export const tools: Tool[] = [
  { name: "Figma", icon: "🎨" },
  { name: "FigJam", icon: "📝" },
  { name: "Miro", icon: "🗂️" },
  { name: "Notion", icon: "📋" },
  { name: "Adobe XD", icon: "🖌️" },
  { name: "Photoshop", icon: "🎭" },
];

export const experiences: Experience[] = [
  {
    role: "Senior UX/UI Designer",
    company: "Tech Startup Inc.",
    period: "2022 - Present",
    description: "Led design for multiple products, mentored junior designers",
  },
  {
    role: "UX/UI Designer",
    company: "Digital Agency",
    period: "2020 - 2022",
    description: "Designed websites and mobile apps for various clients",
  },
  {
    role: "Junior Designer",
    company: "Creative Studio",
    period: "2018 - 2020",
    description: "Worked on UI components and design systems",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Outstanding designer with great attention to detail. Delivered beyond expectations.",
    name: "John Smith",
    role: "Product Manager",
    company: "Tech Corp",
  },
  {
    quote:
      "Excellent collaboration skills and deep understanding of user needs.",
    name: "Sarah Johnson",
    role: "CEO",
    company: "Startup XYZ",
  },
];

// Personal info - easy to update
export const personalInfo = {
  name: "Thanh Thuy",
  role: "UX/UI Designer",
  email: "your@email.com",
  tagline:
    "Designing meaningful digital experiences that solve real user problems.",
  linkedin: "#",
  github: "#",
};
