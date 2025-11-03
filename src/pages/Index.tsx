import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Code, Palette, ShoppingCart, Wrench, ArrowDown, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-dark.jpg";
import SEO from "@/components/SEO";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -10% 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    }, observerOptions);

    [aboutRef, portfolioRef, servicesRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Brand Identity",
      description: "Strategic design systems that define and elevate your brand presence",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Bespoke digital experiences built with cutting-edge technology",
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce",
      description: "Conversion-optimized platforms that transform browsers into buyers",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Digital Strategy",
      description: "Data-driven solutions that scale with your ambitions",
    },
  ];

  const portfolio = [
    {
      title: "Luna Cosmetics",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=600&fit=crop",
    },
    {
      title: "Apex Financial",
      category: "Corporate Site",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    },
    {
      title: "Nomad Adventures",
      category: "Booking Platform",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=600&fit=crop",
    },
    {
      title: "Studio Craft",
      category: "Portfolio",
      image: "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?w=800&h=600&fit=crop",
    },
    {
      title: "Urban Eats",
      category: "Restaurant",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="WebSoto - Award-Winning Digital Agency"
        description="We craft exceptional digital experiences that captivate audiences and drive results. Explore our portfolio of premium websites and digital solutions."
        keywords="digital agency, web design, creative studio, brand design, web development, award-winning"
      />
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 gradient-overlay" />
        </div>
        
        {/* Content */}
        <div className="container relative z-10 px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto space-y-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight leading-[0.9] animate-fade-in text-balance">
              We Build<br />
              <span className="text-accent">Digital Dreams</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto animate-slide-up text-balance">
              Transforming visions into exceptional digital experiences that captivate and convert
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 hover-lift text-lg px-8 py-6 h-auto">
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 h-auto border-accent/30 hover:border-accent hover:bg-accent/10">
                <Link to="/portfolio">Explore Work</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-float">
          <ArrowDown className="w-6 h-6 text-accent/60" />
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-32 md:py-48 opacity-0">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block px-4 py-2 rounded-full border border-accent/30 mb-4">
              <span className="text-sm tracking-wider text-accent uppercase">About Studio</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight text-balance">
              We craft digital experiences that matter
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-balance">
              At WebSoto, we blend strategic thinking with exceptional design to create digital products 
              that don't just look beautiful—they perform brilliantly. Every pixel, every interaction, 
              every line of code is crafted with intention.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
              <div>
                <div className="text-5xl font-bold text-accent mb-2">85+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-accent mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-accent mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section ref={portfolioRef} className="py-32 md:py-48 bg-card/30 opacity-0">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center md:text-left">
            <div className="inline-block px-4 py-2 rounded-full border border-accent/30 mb-4">
              <span className="text-sm tracking-wider text-accent uppercase">Selected Work</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-balance">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl text-balance">
              A curated collection of our most ambitious digital endeavors
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {portfolio.map((project, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group relative overflow-hidden rounded-lg bg-card aspect-[4/5] hover-lift cursor-pointer">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-xs tracking-wider text-accent uppercase mb-2 block">{project.category}</span>
                      <h3 className="text-2xl font-display font-semibold">{project.title}</h3>
                      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="inline-flex items-center text-sm text-accent">
                          View Project <ArrowRight className="ml-2 w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-12">
              <CarouselPrevious className="relative left-0 translate-y-0 hover:bg-accent hover:text-accent-foreground" />
              <CarouselNext className="relative right-0 translate-y-0 hover:bg-accent hover:text-accent-foreground" />
            </div>
          </Carousel>

          <div className="text-center mt-16">
            <Button asChild variant="outline" size="lg" className="group border-accent/30 hover:border-accent hover:bg-accent/10">
              <Link to="/portfolio">
                View All Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-32 md:py-48 opacity-0">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center">
            <div className="inline-block px-4 py-2 rounded-full border border-accent/30 mb-4">
              <span className="text-sm tracking-wider text-accent uppercase">Capabilities</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-balance">
              What We Do Best
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Comprehensive digital solutions tailored to your unique vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-accent/50 transition-all duration-500 hover-lift bg-card/50 backdrop-blur"
              >
                <CardContent className="p-8 lg:p-10">
                  <div className="mb-6 text-accent group-hover:scale-110 transition-transform duration-500 inline-block">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-display font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors duration-500 -translate-y-1/2 translate-x-1/2" />
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild variant="outline" size="lg" className="group border-accent/30 hover:border-accent hover:bg-accent/10">
              <Link to="/services">
                Explore All Services
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 md:py-48 border-t border-border/50">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-block px-4 py-2 rounded-full border border-accent/30 mb-4">
              <span className="text-sm tracking-wider text-accent uppercase">Let's Collaborate</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight text-balance">
              Ready to create something extraordinary?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Let's transform your vision into a digital masterpiece that stands out
            </p>
            <div className="pt-8">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 hover-lift text-lg px-10 py-6 h-auto shadow-glow">
                <Link to="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
