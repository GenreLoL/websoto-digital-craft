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
      bio: "Passionate about creating digital experiences that make a difference.",
    },
    {
      name: "Sarah Chen",
      role: "Lead Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      bio: "Bringing creativity and innovation to every design project.",
    },
    {
      name: "Marcus Johnson",
      role: "Senior Developer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      bio: "Building robust, scalable solutions with cutting-edge technology.",
    },
    {
      name: "Emma Thompson",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      bio: "Ensuring seamless project delivery and client satisfaction.",
    },
  ];

  const values = [
    {
      icon: <Award className="w-10 h-10 text-accent" />,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering high-quality solutions that exceed expectations.",
    },
    {
      icon: <Users className="w-10 h-10 text-accent" />,
      title: "Collaboration",
      description: "Working closely with clients as partners, understanding their vision and bringing it to life.",
    },
    {
      icon: <Target className="w-10 h-10 text-accent" />,
      title: "Innovation",
      description: "Staying ahead of trends and using the latest technologies to create cutting-edge solutions.",
    },
    {
      icon: <Heart className="w-10 h-10 text-accent" />,
      title: "Passion",
      description: "We love what we do and it shows in the quality and care we put into every project.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About WebSoto</h1>
            <p className="text-xl text-white/90">
              We're a team of passionate designers and developers dedicated to creating exceptional web experiences
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    WebSoto was founded in 2019 with a simple mission: to help businesses succeed online through
                    beautiful, functional websites that deliver real results.
                  </p>
                  <p>
                    What started as a small team of two has grown into a full-service digital agency, but our core
                    values remain the same. We believe in the power of great design, clean code, and genuine
                    partnerships with our clients.
                  </p>
                  <p>
                    Today, we've helped over 50 businesses transform their online presence, and we're just getting
                    started. Every project is an opportunity to create something special and make a real impact.
                  </p>
                </div>
              </div>
              <div className="animate-scale-in">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Team collaboration"
                  className="rounded-lg shadow-medium"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center animate-scale-in border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="inline-block mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The talented people behind WebSoto's success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-medium transition-smooth animate-scale-in border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-80 transition-smooth" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-foreground">{member.name}</h3>
                  <p className="text-accent font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "200+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "5+", label: "Years Experience" },
              { number: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Ready to start your project? We'd love to hear from you.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
