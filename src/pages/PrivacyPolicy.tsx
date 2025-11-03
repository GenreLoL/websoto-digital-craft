import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Privacy Policy - WebSoto"
        description="Learn how WebSoto collects, uses, and protects your personal information."
        keywords="privacy policy, data protection, GDPR, privacy, WebSoto"
      />
      <Header />

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground mb-12">Last updated: January 2025</p>

            <Card className="bg-card border-border mb-8">
              <CardContent className="p-8 space-y-6">
                <section>
                  <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                  <p className="text-muted-foreground mb-3">
                    We collect information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Contact information (name, email address, phone number)</li>
                    <li>Project details and requirements</li>
                    <li>Payment and billing information</li>
                    <li>Communication records and support tickets</li>
                    <li>Usage data and analytics from our website</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                  <p className="text-muted-foreground mb-3">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process payments and send transaction confirmations</li>
                    <li>Communicate with you about projects, updates, and support</li>
                    <li>Send marketing communications (with your consent)</li>
                    <li>Analyze usage patterns to improve user experience</li>
                    <li>Comply with legal obligations and protect our rights</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
                  <p className="text-muted-foreground">
                    We do not sell your personal information. We may share your information with:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-3">
                    <li>Service providers who assist in our operations (payment processors, hosting providers)</li>
                    <li>Professional advisors (lawyers, accountants) when necessary</li>
                    <li>Law enforcement or regulatory authorities when required by law</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">4. Cookies and Tracking</h2>
                  <p className="text-muted-foreground">
                    We use cookies and similar tracking technologies to collect usage information and improve our services. 
                    You can control cookies through your browser settings. Disabling cookies may limit some functionality 
                    of our website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
                  <p className="text-muted-foreground">
                    We implement appropriate technical and organizational measures to protect your personal information. 
                    However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">6. Data Retention</h2>
                  <p className="text-muted-foreground">
                    We retain your information for as long as necessary to provide our services and fulfill the purposes 
                    outlined in this policy, unless a longer retention period is required by law.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
                  <p className="text-muted-foreground mb-3">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Access and receive a copy of your personal information</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your information (subject to legal requirements)</li>
                    <li>Object to or restrict certain processing of your information</li>
                    <li>Withdraw consent for marketing communications</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
                  <p className="text-muted-foreground">
                    Our services are not directed to individuals under 18. We do not knowingly collect personal information 
                    from children. If you believe we have collected information from a child, please contact us immediately.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">9. Changes to This Policy</h2>
                  <p className="text-muted-foreground">
                    We may update this Privacy Policy periodically. We will notify you of significant changes by posting 
                    the new policy on our website and updating the "Last updated" date.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
                  <p className="text-muted-foreground">
                    If you have questions about this Privacy Policy or how we handle your information, please contact us at:
                    <br /><br />
                    Email: websoto.studio@gmail.com<br />
                    Phone: +1 601-357-6414<br />
                    Location: Houston, TX
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

export default PrivacyPolicy;
