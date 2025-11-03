import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Users, Target, Heart } from "lucide-react";
import SEO from "@/components/SEO";

const About = () => {
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

  return (
    <div className="min-h-screen">
      <SEO 
        title="About WebSoto - Our Story & Team"
        description="Learn about WebSoto, a digital studio founded by Erik and Sebastian King. We create sleek, high-performance websites for modern brands in Houston, TX."
        keywords="about WebSoto, web design team, Houston digital agency, Erik King, Sebastian King"
      />
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About WebSoto</h1>
            <p className="text-xl text-muted-foreground">
              A small team with a big vision — creating next-level websites for modern brands.
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
                  WebSoto was founded by cousins <strong>Erik</strong> and <strong>Sebastian King</strong> in 2025 with the goal of helping businesses
                  establish a strong, modern online presence through design and development that actually converts.
                </p>
                <p>
                  What started as two creatives experimenting with web design turned into a full-fledged digital studio dedicated to creating sleek, high-performance websites tailored to each client.
                </p>
                <p>
                  Every project reflects our belief in great design, clean code, and real connection with our clients.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team collaboration"
                loading="lazy"
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="bg-card border-border p-6 text-center">
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-accent">{member.role}</p>
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
            Let's Build Something Great
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Have a project in mind? Reach out — we’re ready to bring it to life.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
