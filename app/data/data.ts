import {
  CaseStudy,
  Experience,
  ProcessStep,
  Skill,
  Testimonial,
  Tool,
  ContactData
} from "../types";

export const aboutData = {
  sectionLabel: "About Me",
  heading: "Passionate about creating",
  headingAccent: "meaningful experiences",
  description: [
    "I'm a fourth-year Management Information Systems student at Ho Chi Minh City Open University and a fresher UX/UI Designer. I'm interested in how design, technology, and business come together to create meaningful digital products.",
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


export const experiences: Experience[] = [
  {
    id: 1,
    role: "UX/UI Designer",
    company: "Lac Viet Computing Corporation",
    period: "Oct 2025 - Jan 2026",
    type: "Internship",
    description:
      "Focused on enhancing and refining existing user interfaces for web applications. Worked closely with the team to understand business requirements and user flows before translating them into clearer, more usable UI designs. Occasionally researched and proposed new UI ideas based on product and leadership requirements.",
    responsibilities: [
      "Redesigned screens to enhance usability, clarity, and visual consistency",
      "Collaborated with team members to understand business logic and user flows before designing",
      "Conducted research and explored design references when proposing new UI ideas",
      "Created UI mockups based on product and management requirements",
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "Protopie"],
  },
];


export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    badge: "Mobile App Design",
    title: "Discover Movies Made Simple",
    description:
      "A movie streaming app designed to help users easily discover, explore, and enjoy films they love. The app focuses on clear navigation, personalized recommendations, and a smooth watching experience across devices.",
    tags: ["UI/UX Design", "Mobile App", "5-6 weeks"],
    image: "/images/behance-1.png",
    link: "https://www.behance.net/gallery/243737657/Reely-Movie-Streaming-App",
    year: "2025",
  },
  {
    id: 2,
    badge: "Dashboard UI",
    title: "Simplify Your Analytics",
    description:
      "An intuitive analytics dashboard that transforms complex data into actionable insights. Built with a focus on clarity and ease of use for business professionals.",
    tags: ["Web Design", "Dashboard", "Analytics"],
    image: "/images/project-2.jpg",
    link: "https://example.com/project-2",
    year: "2024",
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
  {
    name: "UI Design",
    icon: "🎨",
    description: "Designing clean and intuitive user interfaces.",
  },
  {
    name: "UX Research",
    icon: "🔍",
    description: "Understanding users through research and analysis.",
  },
  {
    name: "Prototyping",
    icon: "⚡",
    description: "Creating simple prototypes to explore ideas.",
  },
  {
    name: "Wireframing",
    icon: "✏️",
    description: "Structuring layouts and user flows.",
  },
  {
    name: "Usability Testing",
    icon: "👥",
    description: "Collecting feedback to improve usability.",
  },
];

export const tools: Tool[] = [
  {
    name: "Figma",
    logo: "/images/figma.png",
    description: "UI design and collaboration tool.",
  },
  {
    name: "Canva",
    logo: "/images/canva.png",
    description: "Quick visuals and simple layouts.",
  },
  {
    name: "Photoshop",
    logo: "/images/photoshop.png",
    description: "Image editing and visual refinement.",
  },
];

// Personal info - easy to update
export const personalInfo = {
  name: "Thanh Thuy",
  role: "UX/UI Designer",
  email: "huynhthuyth29@email.com",
  tagline:
    "Designing meaningful digital experiences that solve real user problems.",
  linkedin: "#",
  github: "#",
};

export const contactData: ContactData = {
  heading: "Let's build something",
  subheading: "meaningful together",
  description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
};

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
