import { Link } from "react-router-dom";
import { Shield, ArrowLeft, AlertTriangle, XCircle, CheckCircle2, Eye } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CommonPasswordMistakes = () => {
  return (
    <>
      <SEOHead
        title="Common Password Mistakes That Put You at Risk"
        description="Learn about critical password security mistakes that millions make daily. Avoid using personal information, password reuse, predictable patterns, and other vulnerabilities that hackers exploit."
        keywords="password mistakes, password security errors, password reuse, weak passwords, password best practices, cybersecurity"
        canonical="https://passwordgencheck.com/articles/common-password-mistakes"
        ogType="article"
        article={{
          publishedTime: "2025-10-03T10:00:00Z",
          author: "PasswordGenCheck Security Team"
        }}
      />
      
      <SchemaMarkup
        type="article"
        data={{
          headline: "Common Password Mistakes That Put You at Risk",
          description: "Identify and avoid critical password security mistakes",
          datePublished: "2025-10-03",
          author: "PasswordGenCheck Security Team"
        }}
      />

      <article className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/articles" 
            className="inline-flex items-center gap-2 text-primary hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>

          <header className="mb-8">
            <div className="flex items-center gap-2 text-sm text-primary mb-4">
              <Shield className="w-5 h-5" />
              <span className="font-semibold">Security Tips</span>
              <span className="text-muted-foreground">• October 3, 2025 • 7 min read</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Common Password Mistakes That Put You at Risk
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Discover the password security errors millions make every day—and learn how to avoid them before it's too late.
            </p>
          </header>

          <div className="prose prose-lg max-w-none space-y-6">
            <Card className="bg-destructive/10 border-destructive/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  The Cost of Password Mistakes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  In 2024 alone, over 6 billion accounts were compromised due to weak password practices. The average cost of a data breach reached $4.45 million, with stolen credentials being the most common initial attack vector. Despite decades of security awareness campaigns, the same preventable password mistakes continue to put individuals and organizations at severe risk.
                </p>
              </CardContent>
            </Card>

            <p>
              Understanding and avoiding common password mistakes is just as important as knowing how to create strong passwords. Let's examine the most dangerous password security errors and learn practical strategies to eliminate them from your digital life.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4 flex items-center gap-2">
              <XCircle className="w-6 h-6 text-destructive" />
              The 10 Most Dangerous Password Mistakes
            </h2>

            <div className="space-y-6">
              <Card className="border-destructive/30">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <span className="text-destructive">1.</span>
                    Reusing Passwords Across Multiple Sites
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    <strong>The Mistake:</strong> Using the same password for multiple accounts because it's convenient and easy to remember.
                  </p>
                  <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-lg mb-4">
                    <p className="text-sm mb-2"><strong>Why It's Dangerous:</strong></p>
                    <p className="text-sm text-muted-foreground">
                      When one website gets breached (which happens daily), attackers immediately test those credentials on hundreds of other popular services. This attack method, called "credential stuffing," is responsible for 80% of account takeovers. One compromised password can cascade into dozens of hacked accounts.
                    </p>
                  </div>
                  <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg">
                    <p className="text-sm mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <strong>The Fix:</strong>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Use a password manager to generate and store unique passwords for every account. This eliminates the need to remember dozens of passwords—you only need to remember one master password.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-destructive/30">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <span className="text-destructive">2.</span>
                    Using Personal Information in Passwords
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    <strong>The Mistake:</strong> Including your name, birthday, pet's name, favorite sports team, or other personal details in your passwords.
                  </p>
                  <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-lg mb-4">
                    <p className="text-sm mb-2"><strong>Why It's Dangerous:</strong></p>
                    <p className="text-sm text-muted-foreground mb-2">
                      Social media profiles reveal an enormous amount of personal information that attackers use to guess passwords. They can easily discover:
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Your birth date, children's names, and pet names</li>
                      <li>Your favorite sports teams and hobbies</li>
                      <li>Your hometown and schools attended</li>
                      <li>Anniversaries and significant dates</li>
                    </ul>
                  </div>
                  <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg">
                    <p className="text-sm mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <strong>The Fix:</strong>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Use completely random passwords or passphrases composed of unrelated words that have no connection to your life. Let your password manager generate truly random credentials.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-destructive/30">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <span className="text-destructive">3.</span>
                    Creating Short Passwords
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    <strong>The Mistake:</strong> Using passwords with fewer than 12 characters to meet minimum requirements.
                  </p>
                  <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-lg mb-4">
                    <p className="text-sm mb-2"><strong>Why It's Dangerous:</strong></p>
                    <p className="text-sm text-muted-foreground mb-2">
                      Modern password-cracking tools can test billions of combinations per second. Time to crack passwords by length:
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>8 characters: Less than 1 hour with modern GPUs</li>
                      <li>10 characters: Several days</li>
                      <li>12 characters: Several years</li>
                      <li>16+ characters: Centuries with current technology</li>
                    </ul>
                  </div>
                  <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg">
                    <p className="text-sm mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <strong>The Fix:</strong>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Always use passwords with at least 16 characters. For critical accounts like email and banking, use 20+ characters. Length matters more than complexity.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-destructive/30">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <span className="text-destructive">4.</span>
                    Using Predictable Patterns and Substitutions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    <strong>The Mistake:</strong> Replacing letters with similar-looking numbers or symbols (P@ssw0rd, L3tm3in) or using keyboard patterns (qwerty123, asdfgh).
                  </p>
                  <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-lg mb-4">
                    <p className="text-sm mb-2"><strong>Why It's Dangerous:</strong></p>
                    <p className="text-sm text-muted-foreground">
                      Password-cracking algorithms are specifically designed to test common substitutions (@ for a, 0 for o, 3 for e, $ for s) and keyboard patterns. These "clever" tricks are the first combinations attackers try. Passwords like "P@ssw0rd123!" offer minimal protection despite appearing complex.
                    </p>
                  </div>
                  <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg">
                    <p className="text-sm mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <strong>The Fix:</strong>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Use truly random character combinations or passphrase methods (4-6 unrelated words). Avoid any patterns your fingers naturally fall into on the keyboard.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-destructive/30">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <span className="text-destructive">5.</span>
                    Storing Passwords Insecurely
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    <strong>The Mistake:</strong> Writing passwords in plain text files, sticky notes, spreadsheets, or unencrypted documents.
                  </p>
                  <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-lg mb-4">
                    <p className="text-sm mb-2"><strong>Why It's Dangerous:</strong></p>
                    <p className="text-sm text-muted-foreground">
                      Physical notes can be photographed or stolen. Digital files stored without encryption can be accessed by malware, stolen laptops, or anyone with access to your device. Browser-saved passwords without master password protection are also vulnerable.
                    </p>
                  </div>
                  <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg">
                    <p className="text-sm mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <strong>The Fix:</strong>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Use an encrypted password manager with a strong master password and two-factor authentication. Never store passwords in plain text anywhere.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-destructive/30">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <span className="text-destructive">6.</span>
                    Sharing Passwords with Others
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    <strong>The Mistake:</strong> Sending passwords via email, text message, or sharing them verbally with family members, coworkers, or service providers.
                  </p>
                  <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-lg mb-4">
                    <p className="text-sm mb-2"><strong>Why It's Dangerous:</strong></p>
                    <p className="text-sm text-muted-foreground">
                      Once shared, you lose control over that password's security. Messages can be intercepted, read by others, or stored in insecure systems. Even trusted individuals can accidentally compromise the password. Shared accounts make it impossible to audit who accessed what and when.
                    </p>
                  </div>
                  <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg">
                    <p className="text-sm mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <strong>The Fix:</strong>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Use password manager sharing features that encrypt credentials in transit. For family accounts, use built-in family sharing features. Never send passwords via email or unencrypted messaging.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-destructive/30">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <span className="text-destructive">7.</span>
                    Never Changing Passwords After a Breach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    <strong>The Mistake:</strong> Ignoring breach notifications or not checking if your credentials have been compromised in data breaches.
                  </p>
                  <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-lg mb-4">
                    <p className="text-sm mb-2"><strong>Why It's Dangerous:</strong></p>
                    <p className="text-sm text-muted-foreground">
                      When a service you use gets breached, your credentials become available to attackers within hours. If you don't change that password immediately—and especially if you've reused it elsewhere—attackers will systematically test it on every popular service until they gain access.
                    </p>
                  </div>
                  <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg">
                    <p className="text-sm mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <strong>The Fix:</strong>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Monitor services like "Have I Been Pwned" to check if your email appears in breaches. Immediately change passwords for any compromised accounts. Use a password manager that alerts you to breaches.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-destructive/30">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <span className="text-destructive">8.</span>
                    Disabling Two-Factor Authentication for Convenience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    <strong>The Mistake:</strong> Turning off 2FA because it feels inconvenient or slows down the login process.
                  </p>
                  <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-lg mb-4">
                    <p className="text-sm mb-2"><strong>Why It's Dangerous:</strong></p>
                    <p className="text-sm text-muted-foreground">
                      Even the strongest password can be compromised through phishing, keyloggers, or data breaches. Without 2FA, a stolen password grants immediate access to your account. Two-factor authentication blocks 99.9% of automated account takeover attempts.
                    </p>
                  </div>
                  <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg">
                    <p className="text-sm mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <strong>The Fix:</strong>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Enable 2FA on all accounts that support it, especially email, banking, and password managers. Use authenticator apps or hardware keys for better security than SMS.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-destructive/30">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <span className="text-destructive">9.</span>
                    Falling for Phishing Attempts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    <strong>The Mistake:</strong> Entering passwords on fake login pages that mimic legitimate websites.
                  </p>
                  <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-lg mb-4">
                    <p className="text-sm mb-2"><strong>Why It's Dangerous:</strong></p>
                    <p className="text-sm text-muted-foreground">
                      Phishing emails and text messages have become incredibly sophisticated, often indistinguishable from legitimate communications. Once you enter your password on a phishing site, attackers have your credentials and will use them within minutes.
                    </p>
                  </div>
                  <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg">
                    <p className="text-sm mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <strong>The Fix:</strong>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Never click links in emails or messages. Instead, manually type the website address or use bookmarks. Verify the URL is correct before entering credentials. Use hardware security keys that are phishing-resistant.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-destructive/30">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <span className="text-destructive">10.</span>
                    Using Public Wi-Fi Without Protection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    <strong>The Mistake:</strong> Logging into accounts on public Wi-Fi networks at coffee shops, airports, or hotels without using a VPN.
                  </p>
                  <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-lg mb-4">
                    <p className="text-sm mb-2"><strong>Why It's Dangerous:</strong></p>
                    <p className="text-sm text-muted-foreground">
                      Public Wi-Fi networks are often unsecured, allowing attackers on the same network to intercept your data. Man-in-the-middle attacks can capture passwords as they're transmitted, even on websites that appear secure.
                    </p>
                  </div>
                  <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg">
                    <p className="text-sm mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <strong>The Fix:</strong>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Always use a VPN when on public Wi-Fi. Avoid accessing sensitive accounts (banking, email) on public networks. Use your phone's mobile hotspot instead when possible.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mt-8 mb-4 flex items-center gap-2">
              <Eye className="w-6 h-6 text-primary" />
              Creating a Password Security Routine
            </h2>

            <p>
              Avoiding these mistakes requires establishing consistent security habits:
            </p>

            <Card className="my-6">
              <CardHeader>
                <CardTitle>Your Monthly Password Security Checklist</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>Check password manager security dashboard for weak or reused passwords</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>Review accounts on Have I Been Pwned for new breaches</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>Update passwords for any compromised services</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>Enable 2FA on any new accounts you've created</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>Remove old or unused accounts to reduce your attack surface</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>Review authorized devices and sessions on important accounts</div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="my-8 bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Conclusion: Breaking Bad Password Habits</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="mb-4">
                  Password security mistakes aren't just technical errors—they're habits that develop from prioritizing convenience over security. The good news is that with the right tools and awareness, breaking these habits is entirely achievable.
                </p>
                <p className="mb-4">
                  Start by addressing the most critical mistakes first: eliminate password reuse, use a password manager, and enable two-factor authentication on all important accounts. These three changes alone will dramatically improve your security posture.
                </p>
                <p>
                  Remember that cybersecurity is not about perfection—it's about making yourself a harder target than the next person. By avoiding these common mistakes, you'll be protecting yourself against the vast majority of account compromise attempts and securing your digital life for years to come.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </article>
    </>
  );
};

export default CommonPasswordMistakes;