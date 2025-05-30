export type TEAM_MEMBER_TYPE = {
    id: number,
    name: string,
    photo: string,
    jobTitle: string,
    type: "Full-Time" | "Part-Time" | "Contract" | "Intern",
    department: string,
    linkedin: string,
    twitter: string,
    email: string,
    phone: string,
    description: string
};

export const TEAM: TEAM_MEMBER_TYPE[] = [
    {
        "id": 1,
        "name": "Allison Benson",
        "photo": "/assets/images/hero-1.jpg",
        "jobTitle": "Marketing Coordinator",
        "description": "Allison is a seasoned marketing professional with over 5 years of experience in digital marketing and brand management.",
        "type": "Full-Time",
        "department": "Marketing",
        "linkedin": "https://linkedin.com/in/allisonbenson",
        "twitter": "https://twitter.com/allisonbenson",
        "email": "allison.benson@example.com",
        "phone": "+1-555-123-4567"
    },
    {
        "id": 2,
        "name": "Alfred Wallace",
        "photo": "/assets/images/hero-2.jpg",
        "jobTitle": "UI/UX Designer",
        "description": "Allison is a seasoned marketing professional with over 5 years of experience in digital marketing and brand management.",
        "type": "Full-Time",
        "department": "Design",
        "linkedin": "https://linkedin.com/in/alfredwallace",
        "twitter": "https://twitter.com/alfredwallace",
        "email": "alfred.wallace@example.com",
        "phone": "+1-555-234-5678"
    },
    {
        "id": 3,
        "name": "Angela Russell",
        "photo": "/assets/images/hero-3.jpg",
        "jobTitle": "HR Manager",
        "description": "Allison is a seasoned marketing professional with over 5 years of experience in digital marketing and brand management.",
        "type": "Full-Time",
        "department": "Human Resources",
        "linkedin": "https://linkedin.com/in/angelarussell",
        "twitter": "https://twitter.com/angelarussell",
        "email": "angela.russell@example.com",
        "phone": "+1-555-345-6789"
    },
    {
        "id": 4,
        "name": "Jose Rios",
        "photo": "/assets/images/feed-1.jpg",
        "jobTitle": "Product Manager",
        "description": "Allison is a seasoned marketing professional with over 5 years of experience in digital marketing and brand management.",
        "type": "Full-Time",
        "department": "Product",
        "linkedin": "https://linkedin.com/in/joserios",
        "twitter": "https://twitter.com/joserios",
        "email": "jose.rios@example.com",
        "phone": "+1-555-456-7890"
    },
    {
        "id": 5,
        "name": "Vanessa Silva",
        "photo": "/assets/images/feed-2.jpg",
        "jobTitle": "Sales Representative",
        "description": "Allison is a seasoned marketing professional with over 5 years of experience in digital marketing and brand management.",
        "type": "Part-Time",
        "department": "Sales",
        "linkedin": "https://linkedin.com/in/vanessasilva",
        "twitter": "https://twitter.com/vanessasilva",
        "email": "vanessa.silva@example.com",
        "phone": "+1-555-567-8901"
    },
    {
        "id": 6,
        "name": "Scott Coleman",
        "photo": "/assets/images/feed-3.jpg",
        "jobTitle": "Backend Developer",
        "description": "Allison is a seasoned marketing professional with over 5 years of experience in digital marketing and brand management.",
        "type": "Full-Time",
        "department": "Engineering",
        "linkedin": "https://linkedin.com/in/scottcoleman",
        "twitter": "https://twitter.com/scottcoleman",
        "email": "scott.coleman@example.com",
        "phone": "+1-555-678-9012"
    },
    {
        "id": 7,
        "name": "Jonathan Owens",
        "photo": "https://randomuser.me/api/portraits/men/7.jpg",
        "jobTitle": "Financial Analyst",
        "description": "Allison is a seasoned marketing professional with over 5 years of experience in digital marketing and brand management.",
        "type": "Contract",
        "department": "Finance",
        "linkedin": "https://linkedin.com/in/jonathanowens",
        "twitter": "https://twitter.com/jonathanowens",
        "email": "jonathan.owens@example.com",
        "phone": "+1-555-789-0123"
    },
    {
        "id": 8,
        "name": "Megan Cooper",
        "photo": "https://randomuser.me/api/portraits/women/8.jpg",
        "jobTitle": "Content Writer",
        "description": "Allison is a seasoned marketing professional with over 5 years of experience in digital marketing and brand management.",
        "type": "Intern",
        "department": "Content",
        "linkedin": "https://linkedin.com/in/megancooper",
        "twitter": "https://twitter.com/megancooper",
        "email": "megan.cooper@example.com",
        "phone": "+1-555-890-1234"
    },
    {
        "id": 9,
        "name": "Dylan Hart",
        "photo": "https://randomuser.me/api/portraits/men/9.jpg",
        "jobTitle": "QA Engineer",
        "description": "Allison is a seasoned marketing professional with over 5 years of experience in digital marketing and brand management.",
        "type": "Full-Time",
        "department": "Engineering",
        "linkedin": "https://linkedin.com/in/dylanhart",
        "twitter": "https://twitter.com/dylanhart",
        "email": "dylan.hart@example.com",
        "phone": "+1-555-901-2345"
    },
    {
        "id": 10,
        "name": "Sophia Reed",
        "photo": "https://randomuser.me/api/portraits/women/10.jpg",
        "jobTitle": "Project Manager",
        "description": "Allison is a seasoned marketing professional with over 5 years of experience in digital marketing and brand management.",
        "type": "Full-Time",
        "department": "Project Management",
        "linkedin": "https://linkedin.com/in/sophiareed",
        "twitter": "https://twitter.com/sophiareed",
        "email": "sophia.reed@example.com",
        "phone": "+1-555-012-3456"
    }
]


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

