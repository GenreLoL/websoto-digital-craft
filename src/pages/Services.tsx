import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, Palette, ShoppingCart, Wrench, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import { motion, useInView } from "framer-motion";

const Services = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });

  const mainServices = [
    {
      icon: <Palette className="w-10 h-10" />,
      title: "Website Design",
      description:
        "User-centric designs that reflect your brand identity and engage your audience. Modern, responsive, and conversion-optimized.",
      features: ["Custom UI/UX", "Brand Integration", "Mobile-First", "Prototyping"],
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Web Development",
      description:
        "Transform designs into functional websites with clean code. Fast, secure, and scalable web applications.",
      features: ["Custom Applications", "CMS Integration", "Database Architecture", "API Development"],
    },
    {
      icon: <ShoppingCart className="w-10 h-10" />,
      title: "E-commerce",
      description:
        "Complete e-commerce solutions that drive sales and customer loyalty with seamless shopping experiences.",
      features: ["Product Management", "Payment Integration", "Inventory Systems", "Order Tracking"],
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: "Maintenance",
      description:
        "Keep your website running smoothly with ongoing maintenance, updates, security, and optimization.",
      features: ["Regular Updates", "Security Monitoring", "Performance", "24/7 Support"],
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Web Design & Development Services - WebSoto"
        description="Comprehensive web solutions: custom design, development, e-commerce, and maintenance. Professional digital services tailored to your business needs."
        keywords="web design services, web development, e-commerce solutions, website maintenance, CMS integration, custom applications"
      />
      <Header />

      {/* Hero Section */}
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
                What We Do
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              Crafted Capabilities
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance">
              Comprehensive solutions to help your business thrive online
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24" ref={servicesRef}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-card border-border h-full group hover:border-accent transition-smooth hover:shadow-glow relative overflow-hidden">
                  {/* Hover gradient background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-smooth"
                    initial={false}
                  />
                  
                  <CardContent className="p-8 relative z-10">
                    <motion.div 
                      className="mb-6 text-accent"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {service.icon}
                    </motion.div>
                    
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-accent transition-smooth">
                      {service.title}
                    </h2>
                    
                    <p className="text-muted-foreground mb-6 text-base">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.1 * index + 0.05 * idx }}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-1.5 h-1.5 bg-accent rounded-full group-hover:scale-150 transition-smooth" />
                          <span className="text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Hover arrow */}
                    <motion.div
                      className="mt-6 flex items-center text-accent opacity-0 group-hover:opacity-100 transition-smooth"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      <span className="text-sm font-medium mr-2">Learn More</span>
                      <ArrowRight className="w-4 h-4" />
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
              Let's Discuss Your Project
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Create a custom solution that fits your needs perfectly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:shadow-glow">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </motion.div>
              {/* Hidden - Uncomment to restore Portfolio link */}
              {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" variant="outline" className="hover:border-accent">
                  <Link to="/portfolio">View Portfolio</Link>
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

export default Services;
