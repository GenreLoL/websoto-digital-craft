import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Code,
  Palette,
  ShoppingCart,
  Wrench,
  Smartphone,
  Search,
  Zap,
  Lock,
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: <Palette className="w-12 h-12 text-accent" />,
      title: "Website Design",
      description:
        "We create stunning, user-centric designs that reflect your brand identity and captivate your audience. Our designs are modern, responsive, and optimized for conversions.",
      features: [
        "Custom UI/UX design",
        "Brand identity integration",
        "Mobile-first approach",
        "Wireframing and prototyping",
      ],
    },
    {
      icon: <Code className="w-12 h-12 text-accent" />,
      title: "Web Development",
      description:
        "Transform designs into fully functional websites with clean, maintainable code. We build fast, secure, and scalable web applications using the latest technologies.",
      features: [
        "Custom web applications",
        "CMS integration",
        "Database architecture",
        "API development",
      ],
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-accent" />,
      title: "E-commerce Solutions",
      description:
        "Launch your online store with our comprehensive e-commerce solutions. We create seamless shopping experiences that drive sales and customer loyalty.",
      features: [
        "Product catalog management",
        "Secure payment integration",
        "Inventory management",
        "Order tracking systems",
      ],
    },
    {
      icon: <Wrench className="w-12 h-12 text-accent" />,
      title: "Website Maintenance",
      description:
        "Keep your website running smoothly with our ongoing maintenance services. We handle updates, backups, security, and performance optimization.",
      features: [
        "Regular updates and backups",
        "Security monitoring",
        "Performance optimization",
        "24/7 technical support",
      ],
    },
  ];

  const additionalServices = [
    {
      icon: <Smartphone className="w-8 h-8 text-accent" />,
      title: "Responsive Design",
      description: "Perfect experience across all devices and screen sizes",
    },
    {
      icon: <Search className="w-8 h-8 text-accent" />,
      title: "SEO Optimization",
      description: "Improve visibility and rank higher in search results",
    },
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: "Performance Optimization",
      description: "Lightning-fast loading speeds for better user experience",
    },
    {
      icon: <Lock className="w-8 h-8 text-accent" />,
      title: "Security & SSL",
      description: "Protect your site and customer data with robust security",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-white/90">
              Comprehensive web solutions to help your business thrive in the digital world
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <Card
                key={index}
                className="animate-slide-up border-border overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="mb-6">{service.icon}</div>
                      <h2 className="text-3xl font-bold mb-4 text-foreground">{service.title}</h2>
                      <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-accent rounded-full" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-secondary p-8 md:p-12 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl font-bold text-primary mb-4">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <Button asChild className="bg-gradient-primary">
                          <Link to="/contact">Learn More</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Extra features and services to enhance your web presence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-medium transition-smooth animate-scale-in border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-block transform group-hover:scale-110 transition-smooth">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a custom solution that fits your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
