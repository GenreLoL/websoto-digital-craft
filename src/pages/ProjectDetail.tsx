import { useRef } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Calendar, User } from "lucide-react";
import SEO from "@/components/SEO";
import { motion, useInView } from "framer-motion";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  
  const heroRef = useRef(null);
  const detailsRef = useRef(null);
  const galleryRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const detailsInView = useInView(detailsRef, { once: true, margin: "-100px" });
  const galleryInView = useInView(galleryRef, { once: true, margin: "-100px" });

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <div className="min-h-screen">
      <SEO 
        title={`${project.title} - WebSoto Portfolio`}
        description={project.fullDescription}
        keywords={`${project.category}, ${project.tags.join(", ")}, case study`}
      />
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 overflow-hidden" ref={heroRef}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            {/* Hidden - Uncomment to restore Portfolio link */}
            {/* <Button asChild variant="ghost" className="hover:text-accent">
              <Link to="/portfolio">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Link>
            </Button> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <Badge className="mb-4 bg-accent text-accent-foreground border-0">
              {project.category}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              {project.fullDescription}
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <User className="w-5 h-5" />
                <span>{project.client}</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Calendar className="w-5 h-5" />
                <span>{project.timeline}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {project.tags.map((tag, idx) => (
                <Badge key={idx} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>

            {project.liveUrl && (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="bg-accent text-accent-foreground">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    View Live Site
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-lg overflow-hidden shadow-medium"
          >
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="pb-20" ref={detailsRef}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={detailsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-card border-border h-full">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-accent">The Challenge</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.challenge}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={detailsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="bg-card border-border h-full">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-accent">The Solution</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={detailsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-2"
            >
              <Card className="bg-gradient-primary border-border">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">The Outcome</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.outcome}
                  </p>
                  <div className="inline-block px-6 py-3 bg-accent/20 rounded-lg">
                    <span className="text-2xl font-bold text-accent">{project.result}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="pb-20" ref={galleryRef}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={galleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12"
          >
            Project Gallery
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.images.slice(1).map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={galleryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                whileHover={{ scale: 1.02 }}
                className="rounded-lg overflow-hidden shadow-medium"
              >
                <img
                  src={image}
                  alt={`${project.title} screenshot ${idx + 2}`}
                  loading="lazy"
                  className="w-full h-auto"
                />
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create something amazing together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="bg-accent text-accent-foreground">
                  <Link to="/contact">Get Started</Link>
                </Button>
              </motion.div>
              {/* Hidden - Uncomment to restore Portfolio link */}
              {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" variant="outline">
                  <Link to="/portfolio">View More Projects</Link>
                </Button>
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
