import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Lock, Key, Database, Eye, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import passwordProtection from "@/assets/password-protection.jpg";
import strongPassword from "@/assets/strong-password.jpg";

const PasswordArticle = () => {
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

        {/* Article Header */}
        <article className="prose prose-invert max-w-none">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              How to Create a Strong Password and Keep It Safe
            </h1>
            <p className="text-xl text-muted-foreground">
              A comprehensive guide to password security in the digital age
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
              <span>By Security Experts</span>
              <span>•</span>
              <span>Updated October 2025</span>
              <span>•</span>
              <span>10 min read</span>
            </div>
          </header>

          {/* Hero Image */}
          <div className="mb-12 rounded-xl overflow-hidden">
            <img 
              src={passwordProtection} 
              alt="Password protection and security" 
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <p className="text-lg leading-relaxed text-foreground/90">
              In today's interconnected digital world, passwords are the first line of defense protecting your personal information, financial data, and digital identity. A weak password is like leaving your front door unlocked—it's an invitation for cybercriminals to walk right in. This comprehensive guide will teach you everything you need to know about creating strong passwords and storing them securely.
            </p>
          </section>

          {/* Why Password Security Matters */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-primary" />
              Why Password Security Matters
            </h2>
            <div className="bg-card border border-border rounded-lg p-6 mb-6">
              <p className="text-foreground/90 leading-relaxed mb-4">
                Every day, millions of accounts are compromised due to weak or stolen passwords. According to recent cybersecurity reports:
              </p>
              <ul className="space-y-2 text-foreground/90">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>81% of data breaches are caused by weak or stolen passwords</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>The average person has over 100 password-protected accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>59% of people use the same password across multiple accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Cybercrime damages are expected to reach $10.5 trillion annually by 2025</span>
                </li>
              </ul>
            </div>
          </section>

          {/* What Makes a Password Strong */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Lock className="w-8 h-8 text-primary" />
              What Makes a Password Strong?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <span className="text-2xl">✅</span> Strong Password Characteristics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-foreground/90">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span><strong>Length:</strong> At least 12-16 characters (longer is better)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span><strong>Complexity:</strong> Mix of uppercase, lowercase, numbers, and symbols</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span><strong>Uniqueness:</strong> Different for each account</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span><strong>Unpredictability:</strong> No dictionary words or common patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span><strong>Random:</strong> Generated by secure tools, not guessable</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <span className="text-2xl">❌</span> Weak Password Examples
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-foreground/90">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive font-bold">•</span>
                      <span><code className="bg-destructive/20 px-2 py-1 rounded">password123</code> - Too common</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive font-bold">•</span>
                      <span><code className="bg-destructive/20 px-2 py-1 rounded">qwerty</code> - Keyboard pattern</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive font-bold">•</span>
                      <span><code className="bg-destructive/20 px-2 py-1 rounded">John1985</code> - Personal info</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive font-bold">•</span>
                      <span><code className="bg-destructive/20 px-2 py-1 rounded">iloveyou</code> - Dictionary word</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive font-bold">•</span>
                      <span><code className="bg-destructive/20 px-2 py-1 rounded">abc123</code> - Too simple</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <img 
              src={strongPassword} 
              alt="Strong password visualization" 
              className="w-full h-[300px] object-cover rounded-lg mb-6"
            />
          </section>

          {/* How to Create a Strong Password */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Key className="w-8 h-8 text-primary" />
              How to Create a Strong Password
            </h2>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-primary text-2xl font-bold">1</span>
                    Use a Password Generator
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/90 mb-4">
                    The most secure passwords are randomly generated. Use our password generator tool or similar services to create truly random passwords that are impossible to guess. Set the length to at least 16 characters and include all character types.
                  </p>
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <p className="text-sm text-foreground/80">
                      <strong>Example generated password:</strong>
                      <code className="block mt-2 bg-background px-3 py-2 rounded">
                        K8#mP2$vL9@nR4xQ7*wE5
                      </code>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-primary text-2xl font-bold">2</span>
                    The Passphrase Method
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/90 mb-4">
                    If you need to remember a password, create a passphrase using 4-6 random unrelated words separated by symbols. This method creates long, memorable passwords that are still secure.
                  </p>
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <p className="text-sm text-foreground/80">
                      <strong>Example passphrase:</strong>
                      <code className="block mt-2 bg-background px-3 py-2 rounded">
                        Umbrella$Dragon#Mountain!Coffee92
                      </code>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-primary text-2xl font-bold">3</span>
                    The Sentence Method
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/90 mb-4">
                    Think of a memorable sentence and use the first letter of each word, then add numbers and symbols. Replace some letters with numbers or symbols that look similar.
                  </p>
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <p className="text-sm text-foreground/80">
                      <strong>Sentence:</strong> "I love to travel to Paris every summer since 2020!"
                      <br />
                      <strong>Password:</strong>
                      <code className="block mt-2 bg-background px-3 py-2 rounded">
                        !Lt2tP3v3rySs2020!
                      </code>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* How to Store Passwords Securely */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Database className="w-8 h-8 text-primary" />
              How to Store Passwords Securely
            </h2>

            <div className="bg-destructive/20 border border-destructive/50 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-destructive">Never Do This:</h3>
                  <ul className="space-y-2 text-foreground/90">
                    <li>❌ Write passwords on paper or sticky notes</li>
                    <li>❌ Store passwords in plain text files</li>
                    <li>❌ Save passwords in email or messages</li>
                    <li>❌ Use browser password managers on shared computers</li>
                    <li>❌ Share passwords via text or email</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6">Recommended Password Storage Methods:</h3>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <span className="text-2xl">🏆</span> 1. Password Manager (Best Option)
                  </CardTitle>
                  <CardDescription>Most secure and convenient method</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/90 mb-4">
                    Password managers are encrypted vaults that store all your passwords securely. You only need to remember one master password to access all your credentials.
                  </p>
                  <div className="bg-primary/10 rounded-lg p-4 mb-4">
                    <h4 className="font-bold mb-2">Popular Password Managers:</h4>
                    <ul className="space-y-2 text-foreground/90">
                      <li className="flex items-center gap-2">
                        <span className="text-primary">•</span>
                        <strong>1Password</strong> - User-friendly, family sharing, excellent security
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-primary">•</span>
                        <strong>Bitwarden</strong> - Open-source, free option available, cloud sync
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-primary">•</span>
                        <strong>LastPass</strong> - Popular, good free tier, multi-device sync
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-primary">•</span>
                        <strong>Dashlane</strong> - VPN included, dark web monitoring
                      </li>
                    </ul>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-bold mb-2">Benefits:</h4>
                    <ul className="space-y-2 text-foreground/90 text-sm">
                      <li>✅ Military-grade encryption (AES-256)</li>
                      <li>✅ Auto-fill passwords on websites and apps</li>
                      <li>✅ Generate strong random passwords automatically</li>
                      <li>✅ Sync across all your devices</li>
                      <li>✅ Secure password sharing with family or team</li>
                      <li>✅ Alert you about weak or compromised passwords</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Eye className="w-6 h-6 text-primary" />
                    2. Browser Password Managers
                  </CardTitle>
                  <CardDescription>Convenient but less secure than dedicated managers</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/90 mb-4">
                    Modern browsers like Chrome, Firefox, Safari, and Edge have built-in password managers. While convenient, they're less secure than dedicated password managers.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-primary/10 rounded-lg p-4">
                      <h4 className="font-bold mb-2 text-sm">Pros:</h4>
                      <ul className="space-y-1 text-foreground/90 text-sm">
                        <li>✅ Free and built-in</li>
                        <li>✅ Easy to use</li>
                        <li>✅ Auto-sync across devices</li>
                      </ul>
                    </div>
                    <div className="bg-destructive/10 rounded-lg p-4">
                      <h4 className="font-bold mb-2 text-sm">Cons:</h4>
                      <ul className="space-y-1 text-foreground/90 text-sm">
                        <li>❌ Less secure than dedicated tools</li>
                        <li>❌ Vulnerable if device is compromised</li>
                        <li>❌ Limited features</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Lock className="w-6 h-6 text-primary" />
                    3. Encrypted File (Advanced Users)
                  </CardTitle>
                  <CardDescription>For tech-savvy users only</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/90 mb-4">
                    Store passwords in an encrypted file using tools like VeraCrypt or GPG. This requires technical knowledge and careful management.
                  </p>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <p className="text-sm text-foreground/80">
                      <strong>Important:</strong> This method is only recommended if you understand encryption and have a solid backup strategy. Losing the encryption key means losing all your passwords permanently.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Additional Security Tips */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-primary" />
              Additional Security Best Practices
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Enable Two-Factor Authentication (2FA)</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-foreground/90">
                  <p className="mb-3">
                    2FA adds an extra layer of security by requiring a second form of verification beyond your password. Use authenticator apps like Google Authenticator or Authy instead of SMS when possible.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Update Passwords Regularly</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-foreground/90">
                  <p className="mb-3">
                    Change passwords for critical accounts (banking, email) every 3-6 months. Immediately change passwords if you suspect a breach or if a service you use reports a data leak.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Use Unique Passwords</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-foreground/90">
                  <p className="mb-3">
                    Never reuse passwords across multiple accounts. If one site is compromised, hackers will try that password on other popular services. Each account should have its own unique password.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Monitor for Breaches</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-foreground/90">
                  <p className="mb-3">
                    Use services like Have I Been Pwned to check if your email or passwords have been exposed in data breaches. Many password managers include breach monitoring features.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Be Wary of Phishing</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-foreground/90">
                  <p className="mb-3">
                    Never enter your password on suspicious websites or links from emails. Always verify the URL and look for HTTPS. Legitimate companies will never ask for your password via email.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Secure Your Master Password</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-foreground/90">
                  <p className="mb-3">
                    If using a password manager, your master password is the key to everything. Make it extremely strong (20+ characters), unique, and memorable. Consider using a long passphrase.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
              <p className="text-foreground/90 leading-relaxed mb-4">
                Creating and storing strong passwords is one of the most important steps you can take to protect your digital life. While it may seem overwhelming at first, following these best practices will significantly enhance your security posture.
              </p>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Start by using a reputable password manager—it's a small investment that pays huge dividends in security and convenience. Generate unique, strong passwords for all your accounts, enable two-factor authentication wherever possible, and stay vigilant about potential security threats.
              </p>
              <p className="text-foreground/90 leading-relaxed font-semibold">
                Remember: A strong password today keeps hackers away tomorrow. Your digital security is worth the effort!
              </p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center py-12 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Ready to Secure Your Accounts?</h2>
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              Use our free password generator to create strong, random passwords instantly.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              <Key className="w-5 h-5" />
              Generate Password Now
            </Link>
          </section>
        </article>
      </div>
    </main>
  );
};

export default PasswordArticle;
