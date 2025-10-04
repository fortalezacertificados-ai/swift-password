import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Eye, Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Navigation */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 mb-8 text-primary hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-2xl mb-6">
            <Shield className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground">
            How we collect, use, and protect your personal information on PasswordGenCheck.com
          </p>
          <div className="mt-4 text-sm text-muted-foreground">
            Last Updated: October 4, 2025
          </div>
        </header>

        {/* Introduction */}
        <section className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Introduction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/90">
              <p>
                At PasswordGenCheck.com, your privacy is a top priority. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our website and services.
              </p>
              <p>
                By accessing or using our website, you agree to the terms of this Privacy Policy. Please read it carefully to understand our practices regarding your information.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Information We Collect */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Settings className="w-8 h-8 text-primary" />
            Information We Collect
          </h2>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Eye className="w-6 h-6 text-primary" />
                  Personal Information
                </CardTitle>
                <CardDescription>Information you provide directly to us</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground/90">
                <p>
                  We may collect personal information that you provide voluntarily, such as your email address when you contact us for support or subscribe to newsletters.
                </p>
                <div className="bg-primary/10 rounded-lg p-4">
                  <h4 className="font-bold mb-2">Examples:</h4>
                  <ul className="space-y-2 text-sm text-foreground/90">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Email address for communication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Feedback or inquiries submitted via contact forms</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  Non-Personal Information
                </CardTitle>
                <CardDescription>Automatically collected information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground/90">
                <p>
                  We automatically collect information about your device, browser, and interactions with our website. This information helps us improve our website and services.
                </p>
                <div className="bg-primary/10 rounded-lg p-4">
                  <h4 className="font-bold mb-2">Examples:</h4>
                  <ul className="space-y-2 text-sm text-foreground/90">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>IP address, browser type, and operating system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Pages visited and duration of visit</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How We Use Information */}
        <section className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/90">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Provide and maintain our website and services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Analyze usage trends to improve functionality and content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Communicate with users regarding updates, support, or marketing (with consent)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Ensure website security and prevent abuse or fraud</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Legal Compliance */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-6">Legal Compliance</h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>GDPR Compliance (European Union)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground/90">
                <p>
                  If you are in the EU, you have rights regarding your personal data, including accessing, correcting, deleting, and restricting processing of your data, as well as withdrawing consent at any time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CCPA Compliance (California, USA)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground/90">
                <p>
                  If you are a California resident, you have rights to know what personal information we collect, opt-out of the sale of personal information, request deletion, and not be discriminated against for exercising these rights.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>LGPD Compliance (Brazil)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground/90">
                <p>
                  Brazilian users have rights similar to GDPR, including access, correction, deletion, and portability of personal data.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Updates */}
        <section className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Updates to This Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/90">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or operational needs. The "Last Updated" date at the top indicates when the policy was last revised.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Contact */}
        <section className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/90">
              <p>
                For questions about this Privacy Policy or our practices, contact us:
              </p>
              <div className="bg-muted/50 rounded-lg p-4">
                <ul className="space-y-2">
                  <li>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:privacy@passwordgencheck.com" className="text-primary hover:underline">
                      privacy@passwordgencheck.com
                    </a>
                  </li>
                  <li>
                    <strong>Website:</strong>{" "}
                    <a href="https://passwordgencheck.com" className="text-primary hover:underline">
                      https://passwordgencheck.com
                    </a>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>
            For more information about cookies and tracking, please read our{" "}
            <Link to="/cookie-policy" className="text-primary hover:underline">
              Cookie Policy
            </Link>
          </p>
        </footer>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
