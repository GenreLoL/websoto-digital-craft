import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "TechStart Solutions",
      category: "Web Development",
      description:
        "A modern SaaS platform with custom dashboard, user management, and real-time analytics. Built with React and Node.js.",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      results: "+150% lead generation",
    },
    {
      title: "Urban Boutique",
      category: "E-commerce",
      description:
        "Full-featured online fashion store with inventory management, payment processing, and customer reviews.",
      tags: ["Shopify", "React", "Stripe", "SEO"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      results: "+200% online sales",
    },
    {
      title: "Creative Agency Pro",
      category: "Web Design",
      description:
        "Stunning portfolio website showcasing creative work with smooth animations and interactive galleries.",
      tags: ["Next.js", "Framer Motion", "TypeScript"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop",
      results: "+80% client inquiries",
    },
    {
      title: "FitLife Gym",
      category: "Web Development",
      description:
        "Membership management system with class booking, trainer profiles, and workout tracking features.",
      tags: ["Vue.js", "Firebase", "Stripe", "PWA"],
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
      results: "+120% member signups",
    },
    {
      title: "GreenEarth NGO",
      category: "Web Design",
      description:
        "Non-profit website with donation system, volunteer management, and impact tracking dashboard.",
      tags: ["WordPress", "Custom Theme", "Donation API"],
      image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&h=600&fit=crop",
      results: "+300% donations",
    },
    {
      title: "TastyBites Restaurant",
      category: "E-commerce",
      description:
        "Online ordering system with menu management, delivery tracking, and customer loyalty program.",
      tags: ["React Native", "Node.js", "Stripe", "Google Maps"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      results: "+250% online orders",
    },
  ];

  const categories = ["All", "Web Development", "E-commerce", "Web Design"];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Portfolio</h1>
            <p className="text-xl text-white/90">
              Explore our latest projects and see how we've helped businesses succeed online
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-secondary sticky top-20 z-40 shadow-soft">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "bg-gradient-primary" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-medium transition-smooth animate-scale-in border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                      <ExternalLink className="mr-2 w-4 h-4" />
                      View Project
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-accent text-white">{project.category}</Badge>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-semibold text-accent">{project.results}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
            Trusted by Leading Brands
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="h-16 bg-muted rounded-lg flex items-center justify-center text-muted-foreground font-semibold"
              >
                Client {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want to See Your Project Here?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Get in touch to start your project.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
