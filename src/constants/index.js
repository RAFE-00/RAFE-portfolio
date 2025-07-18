
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Security Engineer",
    icon: backend,  // keep the existing icon or change if you want
  },
  {
    title: "AI Product Manager",
    icon: creator,
  },
];

const technologies = [
  // technologies.js
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.png" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.png" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.png" },
  { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.png" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.png" },
  { name: "React JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.png" },
  { name: "Node JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.png" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.png" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.png" },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.png" },
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.png" },
  { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.png" },
];

export default technologies;




const experiences = [
  {
    title: "Security Engineer",
    company_name: "Your Company",
    icon: tekisky, // you can replace this with your company logo image imported at the top
    iconBg: "#000000",
    date: "Jan 2020 - Present",
    points: [
      "Implemented security protocols to protect organizational assets.",
      "Conducted penetration testing and vulnerability assessments.",
      "Collaborated with product and engineering teams on AI security.",
      "Monitored and responded to security incidents.",
    ],
  },
  {
    title: "AI Product Manager",
    company_name: "Your AI Company",
    icon: tekisky, // replace with your logo
    iconBg: "#123456",
    date: "Feb 2022 - Present",
    points: [
      "Led AI product strategy and roadmap.",
      "Managed cross-functional teams to deliver AI-powered products.",
      "Worked on customer feedback and iterative product improvements.",
      "Coordinated with engineering on AI model deployment and scaling.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Kiharu proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like kiharu does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After kiharu optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "AI-based Threat Detection System",
    description:
      "Developed a system that uses machine learning to detect cybersecurity threats in real time.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Machine Learning", color: "green-text-gradient" },
      { name: "AWS", color: "pink-text-gradient" },
    ],
    image: project2, // replace with your project image imported at the top
    source_code_link: "https://github.com/yourusername/ai-threat-detection",
  },
  {
    name: "Enterprise Security Dashboard",
    description:
      "Created a dashboard for monitoring and managing security incidents across enterprise systems.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Express", color: "pink-text-gradient" },
    ],
    image: gearXpert, // replace with your project image
    source_code_link: "https://github.com/yourusername/security-dashboard",
  },
  {
    name: "AI Product Launch & Analytics",
    description:
      "Managed the launch of an AI-powered product with focus on user adoption and analytics.",
    tags: [
      { name: "Product Management", color: "blue-text-gradient" },
      { name: "Data Analysis", color: "green-text-gradient" },
    ],
    image: project3, // replace with your project image
    source_code_link: "https://github.com/yourusername/ai-product-launch",
  },
];


export { services, technologies, experiences, testimonials, projects };
