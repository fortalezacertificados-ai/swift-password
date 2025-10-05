import { Link } from "react-router-dom";
import { Shield, ArrowLeft, Smartphone, Key, Lock, CheckCircle2, XCircle, AlertTriangle } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TwoFactorAuthentication = () => {
  return (
    <>
      <SEOHead
        title="Understanding Two-Factor Authentication: Your Second Line of Defense"
        description="Complete guide to two-factor authentication (2FA). Learn about SMS codes, authenticator apps, hardware keys, and which methods provide the strongest account protection."
        keywords="two-factor authentication, 2FA, MFA, authenticator app, security key, account security, SMS authentication"
        canonical="https://passwordgencheck.com/articles/two-factor-authentication-guide"
        ogType="article"
        article={{
          publishedTime: "2025-10-04T10:00:00Z",
          author: "PasswordGenCheck Security Team"
        }}
      />
      
      <SchemaMarkup
        type="article"
        data={{
          headline: "Understanding Two-Factor Authentication: Your Second Line of Defense",
          description: "Comprehensive guide to implementing and using two-factor authentication effectively",
          datePublished: "2025-10-04",
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
              <span className="font-semibold">Authentication</span>
              <span className="text-muted-foreground">• October 4, 2025 • 10 min read</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Understanding Two-Factor Authentication: Your Second Line of Defense
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Why passwords alone are no longer enough and how 2FA protects your accounts from unauthorized access.
            </p>
          </header>

          <div className="prose prose-lg max-w-none space-y-6">
            <p>
              Despite using strong passwords, millions of accounts are compromised every year through data breaches, phishing attacks, and keylogging malware. Two-factor authentication (2FA), also known as multi-factor authentication (MFA), adds a critical second layer of security that makes it exponentially harder for attackers to access your accounts—even if they have your password.
            </p>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-primary" />
                  The Problem with Password-Only Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Over 15 billion credentials are currently circulating on the dark web from data breaches. When attackers obtain your password, they gain full access to your account. Two-factor authentication prevents this by requiring a second form of verification—something you have or something you are—in addition to something you know (your password).
                </p>
                <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-lg">
                  <p className="text-sm font-semibold mb-2">Sobering Statistics:</p>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>99.9% of account compromise attacks can be blocked by 2FA</li>
                    <li>Only 28% of users have 2FA enabled on their accounts</li>
                    <li>Accounts without 2FA are 4x more likely to be hacked</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-8 mb-4 flex items-center gap-2">
              <Key className="w-6 h-6 text-primary" />
              How Two-Factor Authentication Works
            </h2>

            <p>
              2FA combines two different types of authentication factors:
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Key className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold mb-2">Something You Know</h3>
                    <p className="text-sm text-muted-foreground">Password, PIN, or security question</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Smartphone className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold mb-2">Something You Have</h3>
                    <p className="text-sm text-muted-foreground">Phone, security key, or authenticator app</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold mb-2">Something You Are</h3>
                    <p className="text-sm text-muted-foreground">Fingerprint, face recognition, or iris scan</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <p>
              When you log in, you first enter your password (something you know). The system then requires a second verification step—typically a code from your phone (something you have) or a biometric scan (something you are). An attacker would need to compromise both factors simultaneously to gain access.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Types of 2FA Methods Compared</h2>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center justify-between">
                    <span>SMS Text Message Codes</span>
                    <span className="text-sm font-normal text-yellow-600 dark:text-yellow-500">⚠️ Basic Security</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    A 6-digit code is sent to your phone via text message each time you log in.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        Advantages
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Easy to set up</li>
                        <li>Works on any phone</li>
                        <li>Widely supported</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-red-600" />
                        Disadvantages
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Vulnerable to SIM swapping</li>
                        <li>SMS can be intercepted</li>
                        <li>Requires cell signal</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 p-3 rounded-lg">
                    <p className="text-sm">
                      <strong>Security Note:</strong> While SMS 2FA is better than no 2FA, it's the least secure method. Attackers can intercept SMS messages or perform SIM swap attacks to hijack your phone number.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center justify-between">
                    <span>Authenticator Apps (TOTP)</span>
                    <span className="text-sm font-normal text-green-600 dark:text-green-500">✅ Recommended</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Apps like Google Authenticator, Microsoft Authenticator, or Authy generate time-based one-time passwords (TOTP) that change every 30 seconds.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        Advantages
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Works offline</li>
                        <li>Not vulnerable to SIM swapping</li>
                        <li>More secure than SMS</li>
                        <li>Free to use</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-red-600" />
                        Disadvantages
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Requires smartphone</li>
                        <li>Device loss is problematic</li>
                        <li>Manual entry of codes</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-3 rounded-lg">
                    <p className="text-sm">
                      <strong>Best Practice:</strong> This is the recommended minimum for securing important accounts. Always save backup codes when setting up authenticator apps.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center justify-between">
                    <span>Hardware Security Keys</span>
                    <span className="text-sm font-normal text-blue-600 dark:text-blue-400">🔒 Maximum Security</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Physical devices like YubiKey or Google Titan that you insert into your computer's USB port or tap via NFC.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        Advantages
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Most secure 2FA method</li>
                        <li>Phishing-resistant</li>
                        <li>No batteries needed</li>
                        <li>Works across devices</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-red-600" />
                        Disadvantages
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Costs $25-70</li>
                        <li>Can be lost or stolen</li>
                        <li>Not all sites support it</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 p-3 rounded-lg">
                    <p className="text-sm">
                      <strong>For High-Value Accounts:</strong> Hardware keys provide the strongest protection for email, banking, and cryptocurrency accounts. Consider purchasing two keys—one primary and one backup.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center justify-between">
                    <span>Biometric Authentication</span>
                    <span className="text-sm font-normal text-purple-600 dark:text-purple-400">📱 Convenient</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Fingerprint scanners, facial recognition (Face ID), or iris scanning built into devices.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        Advantages
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Very convenient</li>
                        <li>Can't be forgotten</li>
                        <li>Fast authentication</li>
                        <li>Built into devices</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-red-600" />
                        Disadvantages
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Device-specific</li>
                        <li>Can't be changed if compromised</li>
                        <li>Privacy concerns</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mt-8 mb-4">Setting Up 2FA: Step-by-Step Guide</h2>

            <ol className="list-decimal list-inside space-y-4 text-muted-foreground">
              <li className="pl-2">
                <strong className="text-foreground">Choose your 2FA method:</strong> Start with an authenticator app for most accounts; use hardware keys for critical accounts
              </li>
              <li className="pl-2">
                <strong className="text-foreground">Download an authenticator app:</strong> Google Authenticator, Microsoft Authenticator, Authy, or 1Password
              </li>
              <li className="pl-2">
                <strong className="text-foreground">Enable 2FA in account settings:</strong> Look for "Security," "Two-Factor Authentication," or "Account Protection" sections
              </li>
              <li className="pl-2">
                <strong className="text-foreground">Scan the QR code:</strong> Open your authenticator app and scan the QR code displayed on screen
              </li>
              <li className="pl-2">
                <strong className="text-foreground">Save backup codes:</strong> Store these securely—they're your lifeline if you lose your phone
              </li>
              <li className="pl-2">
                <strong className="text-foreground">Test the setup:</strong> Log out and log back in to verify 2FA is working correctly
              </li>
              <li className="pl-2">
                <strong className="text-foreground">Enable on all critical accounts:</strong> Prioritize email, banking, social media, and password manager accounts
              </li>
            </ol>

            <Card className="my-8 bg-destructive/10 border-destructive/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Common 2FA Mistakes to Avoid
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-destructive font-bold mt-1">✗</span>
                    <div>
                      <strong className="text-foreground">Not saving backup codes:</strong> If you lose your phone, you'll be locked out of your accounts
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive font-bold mt-1">✗</span>
                    <div>
                      <strong className="text-foreground">Using SMS as your only 2FA method:</strong> It's vulnerable to SIM swapping and interception
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive font-bold mt-1">✗</span>
                    <div>
                      <strong className="text-foreground">Keeping 2FA codes in the same place as passwords:</strong> This defeats the "two-factor" principle
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive font-bold mt-1">✗</span>
                    <div>
                      <strong className="text-foreground">Ignoring 2FA prompts you didn't initiate:</strong> This could indicate someone is trying to access your account
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-8 mb-4">Prioritizing Your Accounts</h2>

            <p>
              Not all accounts need the same level of security. Focus on enabling 2FA for these critical services first:
            </p>

            <div className="space-y-3 my-6">
              <Card className="border-red-200 dark:border-red-900">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-red-600 dark:text-red-400 mb-2">🔴 Critical Priority (Hardware Key + Authenticator App)</h3>
                  <p className="text-sm text-muted-foreground">Email accounts, password managers, banking, cryptocurrency exchanges</p>
                </CardContent>
              </Card>

              <Card className="border-yellow-200 dark:border-yellow-900">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-yellow-600 dark:text-yellow-500 mb-2">🟡 High Priority (Authenticator App)</h3>
                  <p className="text-sm text-muted-foreground">Social media, cloud storage, work accounts, shopping sites with saved payment info</p>
                </CardContent>
              </Card>

              <Card className="border-green-200 dark:border-green-900">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-green-600 dark:text-green-500 mb-2">🟢 Medium Priority (Any 2FA Method)</h3>
                  <p className="text-sm text-muted-foreground">Forums, gaming accounts, entertainment subscriptions</p>
                </CardContent>
              </Card>
            </div>

            <Card className="my-8 bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Conclusion: Making 2FA Part of Your Security Routine</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="mb-4">
                  Two-factor authentication is no longer optional—it's essential for anyone who wants to protect their digital identity. While it adds an extra step to logging in, this minor inconvenience is insignificant compared to the devastating consequences of account compromise.
                </p>
                <p className="mb-4">
                  Start by enabling authenticator app-based 2FA on your most important accounts today. For maximum security on critical accounts like email and banking, invest in a hardware security key. Remember to save your backup codes in a secure location, and never ignore unexpected 2FA prompts—they may indicate an attempted breach.
                </p>
                <p>
                  By implementing 2FA across your online accounts, you're closing the door on 99.9% of automated account takeover attempts and making it exponentially more difficult for attackers to compromise your digital life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </article>
    </>
  );
};

export default TwoFactorAuthentication;