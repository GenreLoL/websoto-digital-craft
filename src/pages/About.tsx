import { useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Users, Target, Heart, TrendingUp, Users2, Sparkles } from "lucide-react";
import SEO from "@/components/SEO";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const About = () => {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const statsRef = useRef(null);
  const imageRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const team = [
    {
      name: "Erik King",
      role: "Founder & Lead Developer",
    },
    {
      name: "Sebastian King",
      role: "Co-Founder & Designer",
    },
  ];

  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "Delivering clean, professional, and impactful websites every time.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We work closely with our clients to bring their vision to life.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation",
      description: "Modern tools, creative ideas, and efficient development.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion",
      description: "We love building digital experiences that stand out.",
    },
  ];

  const stats = [
    { icon: <TrendingUp className="w-6 h-6" />, value: "100+", label: "Projects Delivered" },
    { icon: <Users2 className="w-6 h-6" />, value: "50+", label: "Happy Clients" },
    { icon: <Sparkles className="w-6 h-6" />, value: "3+", label: "Months Experience" },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="About WebSoto - Our Story & Team"
        description="Learn about WebSoto, a digital studio founded by Erik and Sebastian King. We create sleek, high-performance websites for modern brands in Houston, TX."
        keywords="about WebSoto, web design team, Houston digital agency, Erik King, Sebastian King"
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
                Our Story
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              We Create Digital Love Stories
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance">
              A small team with a big vision — creating next-level websites for modern brands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-20" ref={statsRef}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-card border-border hover:border-accent transition-smooth hover:shadow-glow">
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-4 text-accent">
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-bold mb-2">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story with Parallax Image */}
      <section className="pb-24" ref={storyRef}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  WebSoto was founded by cousins <strong className="text-foreground">Erik</strong> and <strong className="text-foreground">Sebastian King</strong> in 2025 with the goal of helping businesses
                  establish a strong, modern online presence through design and development that actually converts.
                </p>
                <p>
                  What started as two creatives experimenting with web design turned into a full-fledged digital studio dedicated to creating sleek, high-performance websites tailored to each client.
                </p>
                <p>
                  Every project reflects our belief in great design, clean code, and real connection with our clients.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              ref={imageRef}
              initial={{ opacity: 0, x: 30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative overflow-hidden rounded-lg"
              style={{ y: imageY }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team collaboration"
                loading="lazy"
                className="w-full h-full object-cover rounded-lg"
                style={{ scale: imageScale }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="pb-24" ref={valuesRef}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">What drives us every day</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="bg-card border-border h-full hover:border-accent transition-smooth hover:shadow-glow group">
                  <CardContent className="p-6">
                    <motion.div 
                      className="mb-4 text-accent"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      {value.icon}
                    </motion.div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-smooth">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="pb-24" ref={teamRef}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Meet The Team</h2>
            <p className="text-xl text-muted-foreground">The people behind the pixels</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={teamInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-gradient-primary border-border p-8 text-center hover:shadow-glow transition-smooth">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-accent font-medium">{member.role}</p>
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
              Let's Build Something Great
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have a project in mind? Reach out — we're ready to bring it to life.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:shadow-glow">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
