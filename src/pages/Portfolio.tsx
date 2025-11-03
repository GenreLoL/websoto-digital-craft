import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const Portfolio = () => {
  const projects = [
    {
      title: "TechStart Solutions",
      category: "Development",
      description: "Modern SaaS platform with custom dashboard and real-time analytics",
      tags: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      result: "+150% leads",
    },
    {
      title: "Urban Boutique",
      category: "E-commerce",
      description: "Fashion store with inventory management and payment processing",
      tags: ["Shopify", "React", "Stripe"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      result: "+200% sales",
    },
    {
      title: "Creative Agency",
      category: "Design",
      description: "Portfolio website with smooth animations and interactive galleries",
      tags: ["Next.js", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop",
      result: "+80% inquiries",
    },
    {
      title: "FitLife Gym",
      category: "Development",
      description: "Membership system with class booking and workout tracking",
      tags: ["Vue.js", "Firebase", "PWA"],
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
      result: "+120% signups",
    },
    {
      title: "GreenEarth NGO",
      category: "Design",
      description: "Non-profit site with donation system and impact tracking",
      tags: ["WordPress", "Custom Theme"],
      image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&h=600&fit=crop",
      result: "+300% donations",
    },
    {
      title: "TastyBites Restaurant",
      category: "E-commerce",
      description: "Online ordering with delivery tracking and loyalty program",
      tags: ["React Native", "Node.js"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      result: "+250% orders",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Portfolio - WebSoto Projects & Success Stories"
        description="Explore WebSoto's portfolio of successful web design and development projects. See how we've helped businesses grow with custom digital solutions."
        keywords="web design portfolio, development projects, case studies, client success stories, WebSoto work"
      />
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Portfolio</h1>
            <p className="text-xl text-muted-foreground">
              Recent projects and success stories
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden bg-card border-border hover:border-accent transition-smooth">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-accent/20 text-accent border-0">{project.category}</Badge>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm font-semibold text-accent">{project.result}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Your Project Could Be Here
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create something amazing together
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground">
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
