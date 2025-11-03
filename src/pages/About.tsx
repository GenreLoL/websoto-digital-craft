import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Users, Target, Heart } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Alex Rivera",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
    {
      name: "Sarah Chen",
      role: "Lead Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
    {
      name: "Marcus Johnson",
      role: "Senior Developer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
      name: "Emma Thompson",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
  ];

  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "High-quality solutions that exceed expectations",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Working closely as partners with our clients",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation",
      description: "Using latest technologies for cutting-edge solutions",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion",
      description: "Love for what we do shows in quality and care",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About WebSoto</h1>
            <p className="text-xl text-muted-foreground">
              Passionate designers and developers creating exceptional web experiences
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2019 with a mission to help businesses succeed online through beautiful, functional websites.
                </p>
                <p>
                  From a small team to a full-service agency, our core values remain the same. We believe in great design, clean code, and genuine partnerships.
                </p>
                <p>
                  We've helped over 50 businesses transform their online presence, and we're just getting started.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team"
                className="rounded"
              />
            </div>
          </div>

          {/* Values */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="mb-4 text-accent">{value.icon}</div>
                    <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team */}
          <div>
            <h2 className="text-3xl font-bold mb-12">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="overflow-hidden bg-card border-border">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                    <p className="text-sm text-accent">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to start your project? We'd love to hear from you
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
