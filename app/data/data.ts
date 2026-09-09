import {
  Project,
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
    "I'm a UI/UX Designer with 7 months of internship experience, currently seeking a Fresher role in UI/UX. I enjoy exploring how design, technology, and business intersect to create meaningful digital products.",
    "My background in Management Information Systems, combined with hands-on internship work, has given me experience in UX research, user flows, wireframing, and UI design. I'm eager to keep learning and growing through real-world projects.",
  ],
  quickInfo: [
    { icon: "GraduationCap", label: "Management Information Systems" },
    { icon: "Sparkles", label: "3.6 GPA" },
  ],
  quote: "Good design is simple, purposeful, and focused on real user needs.",
  image: "/images/profile.jpg",
  imageAlt: "Thanh Thuy - UI/UX Designer",
};


export const experiences: Experience[] = [
  {
    id: 1,
    role: "UI/UX Designer",
    company: "Lac Viet Computing Corporation",
    period: "Sep 2025 - Jan 2026",
    type: "Internship",
    description:
      "At Lac Viet, I worked as a UI/UX Designer on HR system products including recruitment websites, web portals, dashboards, and mobile applications.",

    responsibilities: [
      "Designed and improved UI/UX for recruitment websites, web portals, and HR dashboards.",
      "Created UI screens based on client and stakeholder requirements.",
      "Designed mobile portal interfaces for employee and manager usage.",
      "Collaborated with BA and developers to define user flows and ensure feasibility.",
    ],
  },
  {
    id: 2,
    role: "UI/UX Designer",
    company: "DigiBird Corporation",
    period: "May 2026 - August 2026",
    type: "Internship",
    description:
      "At DigiBird, I worked as a UI/UX Designer, responsible for designing interfaces for Zalo Mini Apps and Mobile Mini Apps, including internal product templates and client-facing projects.",

    responsibilities: [
      "Designed UI/UX for Zalo Mini Apps based on client requirements.",
      "Designed UI templates for the company's Mini App products.",
      "Led UI/UX design for major projects, including a Zalo Mini App for Bridgestone and a mobile app for An Khai Hung.",
      "Collaborated with BA, Dev, and BD teams to ensure designs met business requirements and were feasible to implement.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    category: "Mobile App Design",
    title: "Reely - Movie Streaming App",
    description:
      "A movie streaming app designed to help users easily discover, explore, and enjoy films they love. The app focuses on clear navigation, personalized recommendations, and a smooth watching experience across devices.",
    date: "11/2025 - 12/2025",
    role: "UI/UX Designer",
    duration: "5-6 weeks",
    tools: ["Figma"],
    image: "/images/project-01.png",
    link: "https://www.behance.net/gallery/243737657/Reely-Movie-Streaming-App",
  },
  {
    id: 2,
    category: "Web Design",
    title: "FoodiOS - Smart Restaurant Ordering",
    description:
      "A seamless QR ordering experience that connects customers and staff in one real-time system. Built with a focus on clarity, speed, and operational efficiency to reduce manual processes and improve service flow.",
    date: "12/2025 - 02/2026",
    role: "UI/UX Designer",
    duration: "8-9 weeks",
    tools: ["Figma", "Photoshop"],
    image: "/images/project-02.png",
    link: "https://www.behance.net/gallery/244896565/FoodiOS-Smart-Table-Ordering-for-Modern-Restaurants",
  },
  {
    id: 3,
    category: "Landing Page",
    title: "UIPrimer — UI/UX Learning Platform",
    description:
      "A landing page for a UI/UX learning platform that helps beginners study through real, interactive components instead of static theory. Built with a focus on clear structure, purposeful motion, and a design system that scales as new features are added.",
    date: "08/2026",
    role: "UI/UX Designer",
    duration: "2 weeks",
    tools: ["Figma"],
    image: "/images/project-03.png",
    link: "https://www.behance.net/gallery/255407329/UIPrimer-Landing-Page",
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
    name: "Capcut",
    logo: "/images/capcut.jpg",
    description: "Basic short-form video editing.",
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
  role: "UI/UX Designer",
  email: "huynhthuyth29@gmail.com",
  tagline: "...",
  facebook: "https://www.facebook.com/bethyy29/",
  behance: "https://www.behance.net/thuhunhththanh",
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
