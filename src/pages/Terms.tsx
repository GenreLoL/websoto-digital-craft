import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Terms of Service - WebSoto"
        description="Terms of service and conditions for using WebSoto's web design and development services."
        keywords="terms of service, legal, conditions, WebSoto"
      />
      <Header />

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Terms of Service</h1>
            <p className="text-muted-foreground mb-12">Last updated: January 2025</p>

            <Card className="bg-card border-border mb-8">
              <CardContent className="p-8 space-y-6">
                <section>
                  <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
                  <p className="text-muted-foreground">
                    By accessing and using WebSoto's services, you accept and agree to be bound by these Terms of Service. 
                    If you do not agree to these terms, please do not use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">2. Services</h2>
                  <p className="text-muted-foreground mb-3">
                    WebSoto provides web design, development, e-commerce solutions, and ongoing website maintenance services. 
                    Our services include but are not limited to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Custom website design and user interface development</li>
                    <li>Web application development and programming</li>
                    <li>E-commerce platform setup and integration</li>
                    <li>Website maintenance and technical support</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">3. Project Scope and Deliverables</h2>
                  <p className="text-muted-foreground">
                    All projects begin with a consultation to define scope, timeline, and deliverables. Changes to the agreed 
                    scope may result in additional fees and timeline adjustments. Final deliverables are specified in project 
                    contracts.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
                  <p className="text-muted-foreground">
                    Payment terms are outlined in individual project contracts. Typically, a deposit is required before work 
                    begins, with the balance due upon project completion. Late payments may incur additional fees.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
                  <p className="text-muted-foreground">
                    Upon full payment, clients receive ownership of the final website design and custom code. WebSoto retains 
                    the right to showcase completed projects in our portfolio unless otherwise agreed in writing.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">6. Warranties and Liability</h2>
                  <p className="text-muted-foreground">
                    We strive to deliver high-quality work but cannot guarantee uninterrupted service or complete absence of 
                    errors. Our liability is limited to the amount paid for services rendered. We are not liable for indirect, 
                    incidental, or consequential damages.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">7. Maintenance and Support</h2>
                  <p className="text-muted-foreground">
                    Ongoing maintenance and support services are available through separate agreements. Support response times 
                    and scope are defined in maintenance contracts.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">8. Termination</h2>
                  <p className="text-muted-foreground">
                    Either party may terminate services with written notice. Upon termination, clients are responsible for 
                    payment for work completed to date. All project files and materials will be provided upon final payment.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">9. Changes to Terms</h2>
                  <p className="text-muted-foreground">
                    WebSoto reserves the right to modify these terms at any time. Continued use of our services after changes 
                    constitutes acceptance of the updated terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">10. Contact Information</h2>
                  <p className="text-muted-foreground">
                    For questions regarding these Terms of Service, please contact us at websoto.studio@gmail.com or 
                    +1 601-357-6414.
                  </p>
                </section>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
