import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    toast.success("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-accent" />,
      title: "Email Us",
      content: "hello@websoto.com",
      link: "mailto:hello@websoto.com",
    },
    {
      icon: <Phone className="w-6 h-6 text-accent" />,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="w-6 h-6 text-accent" />,
      title: "Visit Us",
      content: "123 Digital Avenue, Tech City, TC 12345",
      link: "#",
    },
    {
      icon: <Clock className="w-6 h-6 text-accent" />,
      title: "Working Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-xl text-white/90">
              Have a project in mind? We'd love to hear from you. Let's create something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="animate-fade-in border-border">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="mt-2"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-2 min-h-32"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-primary" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6 animate-slide-up">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-medium transition-smooth border-border"
                    >
                      <CardContent className="p-6">
                        <a href={info.link} className="flex items-start space-x-4">
                          <div className="mt-1">{info.icon}</div>
                          <div>
                            <h3 className="font-semibold mb-1 text-foreground">{info.title}</h3>
                            <p className="text-muted-foreground">{info.content}</p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <Card className="border-border overflow-hidden">
                <div className="h-64 bg-secondary flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-12 h-12 mx-auto mb-2 text-accent" />
                    <p className="font-medium">Interactive Map</p>
                    <p className="text-sm">123 Digital Avenue, Tech City</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "How long does a typical project take?",
                  a: "Most projects take 4-8 weeks from start to finish, depending on complexity and scope. We'll provide a detailed timeline during our initial consultation.",
                },
                {
                  q: "What is your pricing structure?",
                  a: "We offer custom pricing based on project requirements. Contact us for a free quote and consultation to discuss your specific needs.",
                },
                {
                  q: "Do you provide ongoing support?",
                  a: "Yes! We offer maintenance packages to keep your site updated, secure, and running smoothly. We're here to support you long after launch.",
                },
                {
                  q: "Can you redesign an existing website?",
                  a: "Absolutely! We specialize in website redesigns and can help modernize your online presence while maintaining your brand identity.",
                },
              ].map((faq, index) => (
                <Card key={index} className="animate-fade-in border-border" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2 text-foreground">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Not Sure Where to Start?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation call and we'll help you figure out the best solution for your needs.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Schedule a Call
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
