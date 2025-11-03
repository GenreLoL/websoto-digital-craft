import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle2, Instagram, Twitter, Linkedin } from "lucide-react";
import { toast } from "sonner";
import SEO from "@/components/SEO";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const formInView = useInView(formRef, { once: true, margin: "-100px" });
  const infoInView = useInView(infoRef, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast.success("Message sent! We'll get back to you soon.");
    
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "websoto.studio@gmail.com",
      link: "mailto:websoto.studio@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "+1 601-357-6414",
      link: "tel:+16013576414"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      content: "Houston, TX",
      link: null
    },
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, label: "Instagram", url: "#" },
    { icon: <Twitter className="w-5 h-5" />, label: "Twitter", url: "#" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", url: "#" },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Let's Connect - WebSoto"
        description="Get in touch with our web design and development team. We're here to help bring your digital vision to life."
        keywords="contact web design, get in touch, web development inquiry, project consultation"
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
                Start Something Great
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              Let's Connect
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance">
              Have a vision? Let's bring it to life together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info & Social */}
            <motion.div
              ref={infoRef}
              initial={{ opacity: 0, x: -30 }}
              animate={infoInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={infoInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      whileHover={{ x: 5 }}
                      className="group transition-smooth"
                    >
                      {info.link ? (
                        <a
                          href={info.link}
                          className="flex items-start space-x-4 p-4 rounded-lg bg-card/50 border border-border hover:border-accent transition-smooth"
                        >
                          <div className="text-accent group-hover:scale-110 transition-smooth">
                            {info.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1 text-foreground">
                              {info.title}
                            </h3>
                            <p className="text-muted-foreground">{info.content}</p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start space-x-4 p-4 rounded-lg bg-card/50 border border-border">
                          <div className="text-accent">{info.icon}</div>
                          <div>
                            <h3 className="font-semibold mb-1 text-foreground">
                              {info.title}
                            </h3>
                            <p className="text-muted-foreground">{info.content}</p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={infoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      aria-label={social.label}
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-smooth hover:shadow-glow"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: 30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-3"
            >
              <Card className="bg-card border-border shadow-medium overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 200, 
                          damping: 15,
                          delay: 0.2 
                        }}
                        className="inline-block mb-6"
                      >
                        <CheckCircle2 className="w-20 h-20 text-accent" />
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>
                      <p className="text-muted-foreground">
                        We'll get back to you as soon as possible.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="space-y-6">
                        {/* Name Field */}
                        <div className="relative">
                          <motion.label
                            htmlFor="name"
                            initial={false}
                            animate={{
                              y: focusedField === "name" || formData.name ? -24 : 0,
                              scale: focusedField === "name" || formData.name ? 0.85 : 1,
                              color: focusedField === "name" ? "hsl(var(--accent))" : "hsl(var(--muted-foreground))"
                            }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 top-3 font-medium pointer-events-none origin-left"
                          >
                            Your Name
                          </motion.label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField(null)}
                            required
                            className="bg-transparent border-0 border-b-2 border-border rounded-none px-0 pt-6 pb-2 focus-visible:ring-0 focus-visible:border-accent transition-smooth"
                          />
                        </div>

                        {/* Email Field */}
                        <div className="relative">
                          <motion.label
                            htmlFor="email"
                            initial={false}
                            animate={{
                              y: focusedField === "email" || formData.email ? -24 : 0,
                              scale: focusedField === "email" || formData.email ? 0.85 : 1,
                              color: focusedField === "email" ? "hsl(var(--accent))" : "hsl(var(--muted-foreground))"
                            }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 top-3 font-medium pointer-events-none origin-left"
                          >
                            Your Email
                          </motion.label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            required
                            className="bg-transparent border-0 border-b-2 border-border rounded-none px-0 pt-6 pb-2 focus-visible:ring-0 focus-visible:border-accent transition-smooth"
                          />
                        </div>

                        {/* Message Field */}
                        <div className="relative">
                          <motion.label
                            htmlFor="message"
                            initial={false}
                            animate={{
                              y: focusedField === "message" || formData.message ? -24 : 0,
                              scale: focusedField === "message" || formData.message ? 0.85 : 1,
                              color: focusedField === "message" ? "hsl(var(--accent))" : "hsl(var(--muted-foreground))"
                            }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 top-3 font-medium pointer-events-none origin-left"
                          >
                            Your Message
                          </motion.label>
                          <Textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("message")}
                            onBlur={() => setFocusedField(null)}
                            required
                            className="bg-transparent border-0 border-b-2 border-border rounded-none px-0 pt-6 pb-2 focus-visible:ring-0 focus-visible:border-accent transition-smooth resize-none"
                          />
                        </div>
                      </div>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent group"
                        >
                          <span>Send Message</span>
                          <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-smooth" />
                        </Button>
                      </motion.div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
