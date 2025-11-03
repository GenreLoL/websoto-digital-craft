import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, Palette, ShoppingCart, Wrench } from "lucide-react";

const Services = () => {
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
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive solutions to help your business thrive
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-8">
                  <div className="mb-6 text-accent">{service.icon}</div>
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's Discuss Your Project
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Create a custom solution that fits your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
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
