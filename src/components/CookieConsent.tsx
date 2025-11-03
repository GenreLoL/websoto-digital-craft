import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <Card className="max-w-4xl mx-auto bg-card border-border p-6 shadow-medium">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-semibold mb-2">Cookie Consent</h3>
            <p className="text-sm text-muted-foreground">
              We use cookies to enhance your browsing experience and analyze site traffic. By clicking "Accept", you consent to our use of cookies.{" "}
              <Link to="/privacy-policy" className="text-accent hover:underline">
                Learn more
              </Link>
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Button variant="outline" onClick={declineCookies} size="sm">
              Decline
            </Button>
            <Button onClick={acceptCookies} className="bg-accent text-accent-foreground" size="sm">
              Accept
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CookieConsent;
