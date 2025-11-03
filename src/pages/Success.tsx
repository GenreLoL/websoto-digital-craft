import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Home, Mail } from "lucide-react";
import SEO from "@/components/SEO";

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-redirect to home after 10 seconds
    const timer = setTimeout(() => {
      navigate("/");
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen">
      <SEO 
        title="Success - WebSoto"
        description="Your message has been sent successfully"
      />
      <Header />

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="bg-card border-border">
              <CardContent className="p-12">
                <CheckCircle className="w-20 h-20 text-accent mx-auto mb-6" />
                <h1 className="text-4xl font-bold mb-4">Success!</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Thank you for reaching out. We've received your message and will get back to you as soon as possible.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={() => navigate("/")} className="bg-accent text-accent-foreground">
                    <Home className="w-4 h-4 mr-2" />
                    Return Home
                  </Button>
                  <Button onClick={() => navigate("/contact")} variant="outline">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Another Message
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-8">
                  Redirecting to homepage in 10 seconds...
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Success;
