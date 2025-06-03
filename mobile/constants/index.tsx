import { Linkedin, Mail, Twitter } from "lucide-react";
import { ReactNode } from "react";

export type TEAM_MEMBER_TYPE = {
    id: number,
    name: string,
    photo: string,
    jobTitle: string,
    type: "Full-Time" | "Part-Time" | "Contract" | "Intern",
    department: string,
    description: string,
    phone: string,
    socials: {
        label: string,
        icon: ReactNode,
        href: string
    }[]
};

export const TEAM: TEAM_MEMBER_TYPE[] = [
    {
        id: 1,
        name: "Allison Benson",
        photo: "https://randomuser.me/api/portraits/women/10.jpg",
        jobTitle: "Marketing Coordinator",
        description: "Allison is a seasoned marketing professional with over 5 years of experience in digital marketing and brand management.",
        type: "Full-Time",
        department: "Marketing",
        phone: "+1-555-123-4567",
        socials: [
            { label: "LinkedIn", icon: <Linkedin />, href: "https://linkedin.com/in/allisonbenson" },
            { label: "Twitter", icon: <Twitter />, href: "https://twitter.com/allisonbenson" },
            { label: "Email", icon: <Mail />, href: "mailto:allison.benson@example.com" }
        ]
    },
    {
        id: 2,
        name: "Alfred Wallace",
        photo: "https://randomuser.me/api/portraits/women/8.jpg",
        jobTitle: "UI/UX Designer",
        description: "Alfred creates intuitive and beautiful user interfaces, focusing on enhancing user experience and accessibility.",
        type: "Full-Time",
        department: "Design",
        phone: "+1-555-234-5678",
        socials: [
            { label: "LinkedIn", icon: <Linkedin />, href: "https://linkedin.com/in/alfredwallace" },
            { label: "Twitter", icon: <Twitter />, href: "https://twitter.com/alfredwallace" },
            { label: "Email", icon: <Mail />, href: "mailto:alfred.wallace@example.com" }
        ]
    },
    {
        id: 3,
        name: "Angela Russell",
        photo: "https://randomuser.me/api/portraits/men/7.jpg",
        jobTitle: "HR Manager",
        description: "Angela ensures our team stays happy, motivated, and well-supported in their careers and professional development.",
        type: "Full-Time",
        department: "Human Resources",
        phone: "+1-555-345-6789",
        socials: [
            { label: "LinkedIn", icon: <Linkedin />, href: "https://linkedin.com/in/angelarussell" },
            { label: "Twitter", icon: <Twitter />, href: "https://twitter.com/angelarussell" },
            { label: "Email", icon: <Mail />, href: "mailto:angela.russell@example.com" }
        ]
    },
    {
        id: 4,
        name: "Jose Rios",
        photo: "https://randomuser.me/api/portraits/men/9.jpg",
        jobTitle: "Product Manager",
        description: "Jose leads the product team with a focus on delivering customer-centric solutions that drive business growth.",
        type: "Full-Time",
        department: "Product",
        phone: "+1-555-456-7890",
        socials: [
            { label: "LinkedIn", icon: <Linkedin />, href: "https://linkedin.com/in/joserios" },
            { label: "Twitter", icon: <Twitter />, href: "https://twitter.com/joserios" },
            { label: "Email", icon: <Mail />, href: "mailto:jose.rios@example.com" }
        ]
    },
    {
        id: 5,
        name: "Vanessa Silva",
        photo: "https://randomuser.me/api/portraits/women/10.jpg",
        jobTitle: "Sales Representative",
        description: "Vanessa drives sales success by building strong client relationships and identifying new market opportunities.",
        type: "Part-Time",
        department: "Sales",
        phone: "+1-555-567-8901",
        socials: [
            { label: "LinkedIn", icon: <Linkedin />, href: "https://linkedin.com/in/vanessasilva" },
            { label: "Twitter", icon: <Twitter />, href: "https://twitter.com/vanessasilva" },
            { label: "Email", icon: <Mail />, href: "mailto:vanessa.silva@example.com" }
        ]
    },
    {
        id: 6,
        name: "Scott Coleman",
        photo: "https://randomuser.me/api/portraits/men/7.jpg",
        jobTitle: "Backend Developer",
        description: "Scott builds robust backend systems and ensures the scalability, security, and performance of our applications.",
        type: "Full-Time",
        department: "Engineering",
        phone: "+1-555-678-9012",
        socials: [
            { label: "LinkedIn", icon: <Linkedin />, href: "https://linkedin.com/in/scottcoleman" },
            { label: "Twitter", icon: <Twitter />, href: "https://twitter.com/scottcoleman" },
            { label: "Email", icon: <Mail />, href: "mailto:scott.coleman@example.com" }
        ]
    },
    {
        id: 7,
        name: "Jonathan Owens",
        photo: "https://randomuser.me/api/portraits/men/7.jpg",
        jobTitle: "Financial Analyst",
        description: "Jonathan analyzes financial data to help guide strategic business decisions and improve company performance.",
        type: "Contract",
        department: "Finance",
        phone: "+1-555-789-0123",
        socials: [
            { label: "LinkedIn", icon: <Linkedin />, href: "https://linkedin.com/in/jonathanowens" },
            { label: "Twitter", icon: <Twitter />, href: "https://twitter.com/jonathanowens" },
            { label: "Email", icon: <Mail />, href: "mailto:jonathan.owens@example.com" }
        ]
    },
    {
        id: 8,
        name: "Megan Cooper",
        photo: "https://randomuser.me/api/portraits/women/8.jpg",
        jobTitle: "Content Writer",
        description: "Megan crafts compelling content that connects with audiences and enhances our brand voice.",
        type: "Intern",
        department: "Content",
        phone: "+1-555-890-1234",
        socials: [
            { label: "LinkedIn", icon: <Linkedin />, href: "https://linkedin.com/in/megancooper" },
            { label: "Twitter", icon: <Twitter />, href: "https://twitter.com/megancooper" },
            { label: "Email", icon: <Mail />, href: "mailto:megan.cooper@example.com" }
        ]
    },
    {
        id: 9,
        name: "Dylan Hart",
        photo: "https://randomuser.me/api/portraits/men/9.jpg",
        jobTitle: "QA Engineer",
        description: "Dylan ensures our products meet the highest quality standards through rigorous testing and QA processes.",
        type: "Full-Time",
        department: "Engineering",
        phone: "+1-555-901-2345",
        socials: [
            { label: "LinkedIn", icon: <Linkedin />, href: "https://linkedin.com/in/dylanhart" },
            { label: "Twitter", icon: <Twitter />, href: "https://twitter.com/dylanhart" },
            { label: "Email", icon: <Mail />, href: "mailto:dylan.hart@example.com" }
        ]
    },
    {
        id: 10,
        name: "Sophia Reed",
        photo: "https://randomuser.me/api/portraits/women/10.jpg",
        jobTitle: "Project Manager",
        description: "Sophia coordinates cross-functional teams to ensure successful project delivery on time and within budget.",
        type: "Full-Time",
        department: "Project Management",
        phone: "+1-555-012-3456",
        socials: [
            { label: "LinkedIn", icon: <Linkedin />, href: "https://linkedin.com/in/sophiareed" },
            { label: "Twitter", icon: <Twitter />, href: "https://twitter.com/sophiareed" },
            { label: "Email", icon: <Mail />, href: "mailto:sophia.reed@example.com" }
        ]
    }
];



export const DEPARTMENTS = [
    {
        id: 1,
        title: "Marketing",
        description: "Responsible for promoting the company's products and services through various channels.",
        icon: "https://example.com/icons/marketing.png"
    },
    {
        id: 2,
        title: "Design",
        description: "Focuses on creating visually appealing and user-friendly designs for products and marketing materials.",
        icon: "https://example.com/icons/design.png"
    },
    {
        id: 3,
        title: "Human Resources",
        description: "Manages employee relations, recruitment, and organizational development.",
        icon: "https://example.com/icons/hr.png"
    },
    {
        id: 4,
        title: "Product",
        description: "Oversees product development, strategy, and lifecycle management.",
        icon: "https://example.com/icons/product.png"
    },
    {
        id: 5,
        title: "Sales",
        description: "Responsible for selling products and services to customers.",
        icon: "https://example.com/icons/sales.png"
    },
    {
        id: 6,
        title: "Engineering",
        description: "Develops and maintains the technical infrastructure and software products.",
        icon: "https://example.com/icons/engineering.png"
    },
    {
        id: 7,
        title: "Finance",
        description: "Handles financial planning, analysis, and reporting.",
        icon: "https://example.com/icons/finance.png"
    },
    {
        id: 8,
        title: "Content",
        description: "Creates and manages content for various platforms and channels.",
        icon: "https://example.com/icons/content.png"
    },
    {
        id: 9,
        title: "Project Management",
        description: "Coordinates projects, resources, and timelines to ensure successful delivery.",
        icon: "https://example.com/icons/project_management.png"
    }
]

