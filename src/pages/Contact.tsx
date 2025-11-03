import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";
import SEO from "@/components/SEO";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      content: "websoto.studio@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      content: "+1 601-357-6414",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      content: "Houston, TX",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Contact Us - WebSoto Web Design & Development"
        description="Get in touch with WebSoto. Let's discuss your project and create something exceptional together. Email, phone, and location in Houston, TX."
        keywords="contact WebSoto, get quote, web design inquiry, Houston web agency contact, project consultation"
      />
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              Have a project in mind? Let's create something exceptional together
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl">
            {/* Form */}
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-2 min-h-32"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-accent text-accent-foreground" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="bg-card border-border">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="text-accent mt-1">{info.icon}</div>
                          <div>
                            <h3 className="font-semibold mb-1">{info.title}</h3>
                            <p className="text-muted-foreground">{info.content}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Common Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "How long does a project take?",
                  a: "Most projects take 1-4 weeks depending on complexity. We'll provide a detailed timeline during consultation.",
                },
                {
                  q: "What is your pricing?",
                  a: "We offer custom pricing based on requirements. Contact us for a free quote and consultation.",
                },
                {
                  q: "Do you provide support?",
                  a: "Yes, we offer maintenance packages to keep your site updated, secure, and running smoothly.",
                },
                {
                  q: "Can you redesign existing sites?",
                  a: "Absolutely! We specialize in redesigns and can modernize your presence while maintaining your brand.",
                },
              ].map((faq, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
