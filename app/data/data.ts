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
};


export const experiences: Experience[] = [
  {
    id: 1,
    role: "UX/UI Designer",
    company: "Lac Viet Computing Corporation",
    period: "Oct 2025 - Jan 2026",
    type: "Internship",
    description:
      "At Lac Viet, I worked as a UX/UI Designer focusing on improving web and mobile products to enhance usability and support evolving business needs.",
    responsibilities: [
      "Redesigned existing interfaces to improve clarity and user experience",
      "Designed additional UI screens based on stakeholder and client requirements",
      "Collaborated closely with BA and developers to understand business logic and user flows",
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
    category: "Dashboard UI",
    title: "FoodiOS - Smart Restaurant Ordering",
    description:
      "A seamless QR ordering experience that connects customers and staff in one real-time system. Built with a focus on clarity, speed, and operational efficiency to reduce manual processes and improve service flow.",
    date: "12/2025 - 02/2026",
    role: "UX/UI Designer",
    duration: "8-9 weeks",
    tools: ["Figma"],
    image: "/images/project-02.png",
    link: "https://www.behance.net/gallery/244896565/FoodiOS-Smart-Table-Ordering-for-Modern-Restaurants",
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
  role: "UX/UI Designer",
  email: "huynhthuyth29@email.com",
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
