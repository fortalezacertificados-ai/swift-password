import { Link } from "react-router-dom";
import { Shield, ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <>
      <SEOHead
        title="About Us - Cybersecurity & Digital Privacy Experts"
        description="We are a team dedicated to cybersecurity, committed to data protection, digital privacy, and developing secure tools for users and businesses."
        keywords="about us, cybersecurity team, digital privacy, data protection, online security"
        canonical="https://passwordgencheck.com/about-us"
      />
      
      <main className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold">About Us</h1>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-foreground/90">
                We are a team dedicated to cybersecurity, committed to data protection, 
                digital privacy, and developing secure tools for users and businesses. 
                Our goal is to provide information about network security and how to protect 
                yourself from fraud and scams on the internet.
              </p>
              
              <div className="mt-8 pt-8 border-t border-border">
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We believe that everyone deserves to be safe online. Through education, 
                  free tools, and comprehensive resources, we empower individuals and organizations 
                  to take control of their digital security.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Free, secure password generation tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Educational content about cybersecurity best practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Latest news and updates on digital threats</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Privacy-focused solutions with no data collection</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
};

export default AboutUs;
