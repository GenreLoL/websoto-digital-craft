import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Code, Palette, ShoppingCart, Wrench, ArrowRight, ChevronDown, Sparkles, Zap, Target } from "lucide-react";
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
  const [isVisible, setIsVisible] = useState({
    about: false,
    portfolio: false,
    services: false,
  });

  const aboutRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setIsVisible((prev) => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (portfolioRef.current) observer.observe(portfolioRef.current);
    if (servicesRef.current) observer.observe(servicesRef.current);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Brand Identity",
      description: "Distinctive visual systems that capture your essence",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Website Design",
      description: "Award-worthy interfaces that mesmerize users",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Development",
      description: "Performance-focused builds with pixel perfection",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Digital Strategy",
      description: "Data-driven roadmaps for measurable growth",
    },
  ];

  const portfolio = [
    {
      title: "Stellar Banking",
      category: "Fintech Platform",
      image: heroImage,
      tags: ["UI/UX", "Development"],
      result: "+250% engagement"
    },
    {
      title: "Lux Boutique",
      category: "E-commerce",
      image: heroImage,
      tags: ["Branding", "E-commerce"],
      result: "2M+ revenue"
    },
    {
      title: "Pulse Fitness",
      category: "Mobile App",
      image: heroImage,
      tags: ["App Design", "Development"],
      result: "50k+ downloads"
    },
    {
      title: "Horizon Real Estate",
      category: "Web Platform",
      image: heroImage,
      tags: ["UI/UX", "3D Design"],
      result: "85% faster sales"
    },
  ];

  const stats = [
    { number: "85+", label: "Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "15+", label: "Active Clients" },
    { number: "3+", label: "Months Experience" },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="WebSoto - Custom Website Design & Development Agency"
        description="Transform your digital presence with custom web solutions designed for growth. Professional web design, development, e-commerce, and maintenance services in Houston, TX."
        keywords="web design, web development, e-commerce solutions, custom websites, digital agency, Houston web design, responsive design"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-background/80 z-[1]" />
        
        {/* Content */}
        <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[0.9] tracking-tight animate-fade-in text-balance">
              Digital Experiences<br />
              <span className="text-accent">That Inspire</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-slide-up">
              We craft award-winning websites and digital products that push creative boundaries.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:opacity-90 hover-lift text-lg px-8 py-6 h-auto">
                <Link to="/contact">Start a Project</Link>
              </Button>
              {/* Hidden - Uncomment to restore Portfolio link */}
              {/* <Button asChild size="lg" variant="outline" className="hover-lift text-lg px-8 py-6 h-auto">
                <Link to="/portfolio">Explore Work</Link>
              </Button> */}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-8 h-8 text-accent" />
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about"
        ref={aboutRef}
        className={`py-32 transition-all duration-1000 ${
          isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-balance">
              We Turn Bold Ideas Into<br />
              <span className="text-accent">Remarkable Realities</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-balance">
              A boutique digital studio obsessed with crafting immersive experiences 
              that blend innovative design with flawless execution.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl md:text-6xl font-bold text-accent mb-2 group-hover:scale-110 transition-smooth">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section - Hidden. Uncomment to restore */}
      {/* <section 
        id="portfolio"
        ref={portfolioRef}
        className={`py-32 bg-card/30 transition-all duration-1000 ${
          isVisible.portfolio ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Featured Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Projects that push boundaries and deliver results
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
                  <Card className="group hover:border-accent transition-smooth overflow-hidden bg-card hover-lift">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <div className="flex gap-2 mb-2">
                          {project.tags.map((tag, i) => (
                            <span key={i} className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-sm text-accent mb-2">{project.category}</p>
                      <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                      <p className="text-muted-foreground text-sm">{project.result}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-6" />
            <CarouselNext className="hidden md:flex -right-6" />
          </Carousel>

          <div className="text-center mt-16">
            <Button asChild size="lg" variant="outline" className="hover-lift">
              <Link to="/portfolio">
                View All Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section 
        id="services"
        ref={servicesRef}
        className={`py-32 transition-all duration-1000 ${
          isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Our Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Full-spectrum digital services tailored to elevate your brand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:border-accent transition-spring bg-card/50 hover-lift relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity" />
                <CardContent className="p-8 relative z-10">
                  <div className="mb-6 text-accent group-hover:scale-110 transition-spring inline-block">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild size="lg" variant="outline" className="hover-lift">
              <Link to="/services">
                Explore All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 border-t border-border bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-balance">
            Ready to Create<br />
            <span className="text-accent">Something Extraordinary?</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Let's collaborate and bring your vision to life with design that inspires action.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:opacity-90 hover-lift text-lg px-10 py-7 h-auto shadow-glow">
            <Link to="/contact">
              Let's Talk
              <Target className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
