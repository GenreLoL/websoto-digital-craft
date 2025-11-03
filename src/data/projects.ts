export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  tags: string[];
  image: string;
  images: string[];
  result: string;
  challenge: string;
  solution: string;
  outcome: string;
  timeline: string;
  client: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "techstart-solutions",
    title: "TechStart Solutions",
    category: "Development",
    description: "Modern SaaS platform with custom dashboard and real-time analytics",
    fullDescription: "TechStart Solutions needed a comprehensive SaaS platform that could scale with their growing user base while providing real-time analytics and insights.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop",
    ],
    result: "+150% leads",
    challenge: "The client needed a platform that could handle thousands of concurrent users while providing real-time data processing and visualization.",
    solution: "We built a scalable microservices architecture with React frontend, Node.js backend, and MongoDB for flexible data storage. Implemented WebSocket connections for real-time updates.",
    outcome: "The platform successfully handles 10,000+ concurrent users with sub-second response times. Lead generation increased by 150% in the first quarter.",
    timeline: "12 weeks",
    client: "TechStart Inc.",
  },
  {
    id: "urban-boutique",
    title: "Urban Boutique",
    category: "E-commerce",
    description: "Fashion store with inventory management and payment processing",
    fullDescription: "Urban Boutique wanted to expand their brick-and-mortar success online with a sophisticated e-commerce platform.",
    tags: ["Shopify", "React", "Stripe"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=800&fit=crop",
    ],
    result: "+200% sales",
    challenge: "Creating a seamless shopping experience with complex inventory management across multiple locations and real-time stock updates.",
    solution: "Built a custom Shopify storefront with React, integrated Stripe for payments, and created a centralized inventory system syncing across all sales channels.",
    outcome: "Sales increased by 200% within 6 months. Customer satisfaction scores improved by 45%. Average order value up 30%.",
    timeline: "10 weeks",
    client: "Urban Boutique LLC",
    liveUrl: "https://example.com",
  },
  {
    id: "creative-agency",
    title: "Creative Agency",
    category: "Design",
    description: "Portfolio website with smooth animations and interactive galleries",
    fullDescription: "A creative agency needed a stunning portfolio website that would showcase their work and attract high-value clients.",
    tags: ["Next.js", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop",
    ],
    result: "+80% inquiries",
    challenge: "Standing out in a crowded market while maintaining fast load times despite heavy visual content.",
    solution: "Leveraged Next.js for optimal performance, implemented lazy loading, and created custom animations with Framer Motion for a premium feel.",
    outcome: "Inquiry rate increased by 80%. Average project value up 60%. Featured in multiple design publications.",
    timeline: "8 weeks",
    client: "Creative Co.",
  },
  {
    id: "fitlife-gym",
    title: "FitLife Gym",
    category: "Development",
    description: "Membership system with class booking and workout tracking",
    fullDescription: "FitLife Gym needed a comprehensive digital platform to manage memberships, bookings, and provide value to their members.",
    tags: ["Vue.js", "Firebase", "PWA"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&h=800&fit=crop",
    ],
    result: "+120% signups",
    challenge: "Creating a mobile-first experience that works offline and integrates with existing gym management systems.",
    solution: "Built a Progressive Web App with Vue.js and Firebase for real-time updates. Implemented offline functionality and push notifications.",
    outcome: "Membership signups increased 120%. Class attendance up 35%. Member retention improved by 25%.",
    timeline: "14 weeks",
    client: "FitLife Gym Chain",
  },
  {
    id: "greenearth-ngo",
    title: "GreenEarth NGO",
    category: "Design",
    description: "Non-profit site with donation system and impact tracking",
    fullDescription: "GreenEarth NGO needed a platform to tell their story, accept donations, and show the impact of contributions.",
    tags: ["WordPress", "Custom Theme"],
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&h=800&fit=crop",
    ],
    result: "+300% donations",
    challenge: "Building trust with donors and creating an emotional connection while making the donation process seamless.",
    solution: "Created a custom WordPress theme with powerful storytelling features, integrated donation platform, and real-time impact visualization.",
    outcome: "Donations increased 300%. Recurring donors up 150%. Featured in major environmental publications.",
    timeline: "9 weeks",
    client: "GreenEarth Foundation",
  },
  {
    id: "tastybites-restaurant",
    title: "TastyBites Restaurant",
    category: "E-commerce",
    description: "Online ordering with delivery tracking and loyalty program",
    fullDescription: "TastyBites wanted to compete with major food delivery platforms while building their own customer base.",
    tags: ["React Native", "Node.js"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1200&h=800&fit=crop",
    ],
    result: "+250% orders",
    challenge: "Creating a competitive alternative to major delivery platforms while maintaining profitability and customer loyalty.",
    solution: "Built a native mobile app with React Native, real-time order tracking, integrated payment processing, and a custom loyalty rewards system.",
    outcome: "Online orders increased 250%. Customer retention rate 70%. Average order value up 40%.",
    timeline: "16 weeks",
    client: "TastyBites Restaurant Group",
  },
];
