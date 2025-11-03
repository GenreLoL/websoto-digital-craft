import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Code, Palette, ShoppingCart, Wrench, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-dark.jpg";

const Index = () => {
  const services = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Website Design",
      description: "Modern designs that engage your audience",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Web Development",
      description: "Custom-built with clean, maintainable code",
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "E-commerce",
      description: "Online stores that drive sales",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Maintenance",
      description: "Ongoing support and optimization",
    },
  ];

  const stats = [
    { number: "85+", label: "Projects" },
    { number: "98%", label: "Satisfaction" },
    { number: "15+", label: "Clients" },
    { number: "3+", label: "Months" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              We Build Websites<br />That Build Businesses
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Transform your digital presence with custom solutions designed for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:opacity-90">
                <Link to="/contact">Start Project</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/portfolio">View Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Comprehensive solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:border-accent transition-smooth bg-card"
              >
                <CardContent className="p-6">
                  <div className="mb-4 text-accent">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="group">
              <Link to="/services">
                All Services
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-smooth" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Start?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create something exceptional together
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:opacity-90">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
