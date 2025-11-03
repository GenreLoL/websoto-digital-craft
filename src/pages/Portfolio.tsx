import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import SEO from "@/components/SEO";
import { motion, useInView } from "framer-motion";

const Portfolio = () => {
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const projectsInView = useInView(projectsRef, { once: true, margin: "-100px" });

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
      <section className="pt-32 pb-20 overflow-hidden" ref={heroRef}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                Selected Work
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              Digital Stories We've Told
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance">
              Recent projects and success stories that speak for themselves
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24" ref={projectsRef}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * (index % 3) }}
                whileHover={{ y: -10 }}
              >
                <Card className="group overflow-hidden bg-card border-border hover:border-accent transition-smooth h-full hover:shadow-glow">
                  {/* Image Container */}
                  <div className="relative overflow-hidden aspect-video">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    />
                    
                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-background/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth"
                      initial={false}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      >
                        <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                          <ExternalLink className="w-6 h-6 text-accent-foreground" />
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-accent text-accent-foreground border-0 shadow-soft">
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-smooth">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={projectsInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: 0.1 * (index % 3) + 0.05 * idx }}
                        >
                          <Badge variant="outline" className="text-xs hover:border-accent transition-smooth">
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Result */}
                    <motion.div
                      className="flex items-center justify-between pt-4 border-t border-border"
                      initial={{ opacity: 0 }}
                      animate={projectsInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.1 * (index % 3) + 0.2 }}
                    >
                      <span className="text-sm font-semibold text-accent">{project.result}</span>
                      <motion.div
                        className="text-muted-foreground group-hover:text-accent transition-smooth"
                        whileHover={{ x: 5 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Your Project Could Be Here
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create something amazing together that drives real results
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:shadow-glow">
                <Link to="/contact">Start Your Project</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
