import { Link } from "react-router-dom";
import { ArrowLeft, Cookie, Shield, Eye, Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CookiePolicy = () => {
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
            <Cookie className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Cookie Policy
          </h1>
          <p className="text-xl text-muted-foreground">
            Understanding how we use cookies on PasswordGenCheck.com
          </p>
          <div className="mt-4 text-sm text-muted-foreground">
            Last Updated: October 4, 2025
          </div>
        </header>

        {/* Introduction */}
        <section className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">What Are Cookies?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/90">
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide a better user experience, as well as to provide information to the website owners.
              </p>
              <p>
                At PasswordGenCheck.com, we use cookies to enhance your experience, analyze site traffic, and understand where our visitors are coming from. This Cookie Policy explains what cookies are, how we use them, and your choices regarding cookies.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Types of Cookies */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Settings className="w-8 h-8 text-primary" />
            Types of Cookies We Use
          </h2>

          <div className="space-y-6">
            {/* Strictly Necessary Cookies */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  1. Strictly Necessary Cookies
                </CardTitle>
                <CardDescription>Essential for the website to function properly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/90">
                  These cookies are essential for you to browse the website and use its features. Without these cookies, services you have asked for cannot be provided.
                </p>
                <div className="bg-primary/10 rounded-lg p-4">
                  <h4 className="font-bold mb-2">Purpose:</h4>
                  <ul className="space-y-2 text-sm text-foreground/90">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Maintain your session and remember your preferences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Enable core functionality like language selection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Ensure website security and prevent fraud</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="text-sm text-foreground/80">
                    <strong>Can be disabled:</strong> No - these cookies are essential for the website to work.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Analytics Cookies */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Eye className="w-6 h-6 text-primary" />
                  2. Analytics and Performance Cookies
                </CardTitle>
                <CardDescription>Help us understand how visitors use our website</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/90">
                  These cookies collect information about how visitors use our website, such as which pages visitors go to most often and if they receive error messages. These cookies don't collect information that identifies a visitor directly.
                </p>
                <div className="bg-primary/10 rounded-lg p-4">
                  <h4 className="font-bold mb-2">Services Used:</h4>
                  <ul className="space-y-2 text-sm text-foreground/90">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Google Analytics:</strong> Tracks page views, session duration, and user behavior</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Information collected is aggregated and anonymous</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-primary/10 rounded-lg p-4">
                  <h4 className="font-bold mb-2">Purpose:</h4>
                  <ul className="space-y-2 text-sm text-foreground/90">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Understand which pages are most popular</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Improve website content and user experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Identify technical issues and optimize performance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Monitor traffic patterns and user engagement</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="text-sm text-foreground/80">
                    <strong>Can be disabled:</strong> Yes - you can opt-out through browser settings or Google Analytics opt-out tools.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Advertising Cookies */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <span className="text-2xl">📢</span>
                  3. Advertising Cookies
                </CardTitle>
                <CardDescription>Used to deliver relevant ads and measure campaign effectiveness</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/90">
                  These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.
                </p>
                <div className="bg-primary/10 rounded-lg p-4">
                  <h4 className="font-bold mb-2">Services Used:</h4>
                  <ul className="space-y-2 text-sm text-foreground/90">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Google AdSense:</strong> Displays relevant advertisements based on your browsing behavior</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>DoubleClick:</strong> Google's advertising platform for ad serving and tracking</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-primary/10 rounded-lg p-4">
                  <h4 className="font-bold mb-2">Purpose:</h4>
                  <ul className="space-y-2 text-sm text-foreground/90">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Show you relevant advertisements based on your interests</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Limit how many times you see the same ad</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Measure advertising campaign effectiveness</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Support free access to our password security tools</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="text-sm text-foreground/80">
                    <strong>Can be disabled:</strong> Yes - you can manage advertising cookie preferences through your browser settings or by visiting the Network Advertising Initiative opt-out page.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Functionality Cookies */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <span className="text-2xl">⚙️</span>
                  4. Functionality Cookies
                </CardTitle>
                <CardDescription>Remember your preferences and choices</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/90">
                  These cookies allow our website to remember choices you make (such as your language preference) and provide enhanced, more personalized features.
                </p>
                <div className="bg-primary/10 rounded-lg p-4">
                  <h4 className="font-bold mb-2">Purpose:</h4>
                  <ul className="space-y-2 text-sm text-foreground/90">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Remember your language selection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Save your password generator preferences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Maintain theme preferences (dark/light mode)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="text-sm text-foreground/80">
                    <strong>Can be disabled:</strong> Yes - but this may affect website functionality and your user experience.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How to Manage Cookies */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-6">How to Manage and Control Cookies</h2>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Browser Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/90">
                Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience.
              </p>
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-bold mb-3">Browser-Specific Instructions:</h4>
                <ul className="space-y-3 text-sm text-foreground/90">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      <strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data
                      <br />
                      <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Learn more →
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      <strong>Mozilla Firefox:</strong> Options → Privacy & Security → Cookies and Site Data
                      <br />
                      <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Learn more →
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      <strong>Safari:</strong> Preferences → Privacy → Manage Website Data
                      <br />
                      <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Learn more →
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      <strong>Microsoft Edge:</strong> Settings → Cookies and site permissions → Cookies and site data
                      <br />
                      <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Learn more →
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Opt-Out Tools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/90">
                You can also use these industry-standard opt-out tools to manage advertising cookies:
              </p>
              <ul className="space-y-3 text-foreground/90">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>Network Advertising Initiative (NAI):</strong>{" "}
                    <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      https://optout.networkadvertising.org/
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>Digital Advertising Alliance (DAA):</strong>{" "}
                    <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      https://optout.aboutads.info/
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>Google Ads Settings:</strong>{" "}
                    <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      https://adssettings.google.com/
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>Google Analytics Opt-out:</strong>{" "}
                    <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      https://tools.google.com/dlpage/gaoptout
                    </a>
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mobile Device Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/90">
                On mobile devices, you can manage cookies and tracking through your device settings:
              </p>
              <ul className="space-y-3 text-foreground/90">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>iOS:</strong> Settings → Privacy → Tracking → Toggle "Allow Apps to Request to Track"
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>Android:</strong> Settings → Google → Ads → Opt out of Ads Personalization
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Third-Party Cookies */}
        <section className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Third-Party Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/90">
              <p>
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics, deliver advertisements, and improve our services.
              </p>
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-bold mb-3">Third-Party Services:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Google AdSense:</strong> For displaying advertisements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Google Analytics:</strong> For website analytics and performance monitoring</span>
                  </li>
                </ul>
              </div>
              <p>
                These third parties have their own privacy policies. We recommend reviewing their policies to understand how they use cookies and your data:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    Google Privacy Policy:{" "}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      https://policies.google.com/privacy
                    </a>
                  </span>
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
                  Under the General Data Protection Regulation (GDPR), you have the right to:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Access your personal data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Rectify inaccurate personal data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Request erasure of your personal data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Restrict processing of your personal data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Object to processing of your personal data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Withdraw consent at any time</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CCPA Compliance (California, USA)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground/90">
                <p>
                  Under the California Consumer Privacy Act (CCPA), California residents have the right to:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Know what personal information is collected</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Know whether personal information is sold or disclosed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Opt-out of the sale of personal information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Access your personal information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Request deletion of personal information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Not be discriminated against for exercising these rights</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>LGPD Compliance (Brazil)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground/90">
                <p>
                  Under the Lei Geral de Proteção de Dados (LGPD), Brazilian users have rights similar to GDPR, including the right to access, correct, delete, and port their personal data.
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
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically.
              </p>
              <p>
                The "Last Updated" date at the top of this policy indicates when it was last revised. Any changes will become effective when we post the revised Cookie Policy on our website.
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
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
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
            For more information about privacy practices, please read our{" "}
            <Link to="/privacy-policy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </p>
        </footer>
      </div>
    </main>
  );
};

export default CookiePolicy;
