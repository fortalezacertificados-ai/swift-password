import { Link } from "react-router-dom";
import { Mail, ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactUs = () => {
  const email = "fortalezacertificados@gmail.com";

  return (
    <>
      <SEOHead
        title="Contact Us - Get in Touch"
        description="Contact our cybersecurity team for questions, support, or partnership opportunities. We're here to help keep you safe online."
        keywords="contact, support, email, cybersecurity help"
        canonical="https://passwordgencheck.com/contact-us"
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
            <Mail className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold">Contact Us</h1>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-foreground/90 mb-8">
                Have questions, feedback, or need support? We'd love to hear from you! 
                Our team is committed to helping you stay secure online.
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">Email Us</h2>
                <div className="flex items-center gap-3 flex-wrap">
                  <a 
                    href={`mailto:${email}`}
                    className="text-primary text-lg hover:underline"
                  >
                    {email}
                  </a>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      navigator.clipboard.writeText(email);
                    }}
                  >
                    Copy Email
                  </Button>
                </div>
              </div>

              <div className="space-y-4 text-foreground/80">
                <h2 className="text-xl font-semibold text-foreground">What can you contact us about?</h2>
                <ul className="space-y-2 list-disc list-inside">
                  <li>General questions about our tools and services</li>
                  <li>Technical support or bug reports</li>
                  <li>Partnership or collaboration opportunities</li>
                  <li>Suggestions for new features or content</li>
                  <li>Security concerns or vulnerability reports</li>
                  <li>Media inquiries</li>
                </ul>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  We typically respond within 24-48 hours during business days. 
                  For urgent security matters, please indicate "URGENT" in your subject line.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
};

export default ContactUs;
