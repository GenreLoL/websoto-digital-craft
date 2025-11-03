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
import { projects } from "@/data/projects";

const Portfolio = () => {
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const projectsInView = useInView(projectsRef, { once: true, margin: "-100px" });

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
              <Link key={index} to={`/portfolio/${project.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * (index % 3) }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="group overflow-hidden bg-card border-border hover:border-accent transition-smooth h-full hover:shadow-glow cursor-pointer">
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
              </Link>
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
