import { Helmet } from "react-helmet";

interface SchemaMarkupProps {
  type: "website" | "article" | "faq" | "breadcrumb";
  data?: any;
}

const SchemaMarkup = ({ type, data }: SchemaMarkupProps) => {
  const getSchema = () => {
    switch (type) {
      case "website":
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "PasswordGenCheck",
          "alternateName": "Password Generator and Checker",
          "url": "https://passwordgencheck.com",
          "description": "Free online password generator and strength checker tool. Create secure, random passwords and test password strength instantly.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://passwordgencheck.com/?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          "publisher": {
            "@type": "Organization",
            "name": "PasswordGenCheck",
            "logo": {
              "@type": "ImageObject",
              "url": "https://passwordgencheck.com/logo.png"
            }
          }
        };

      case "article":
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data?.headline || "How to Create a Strong Password and Keep It Safe",
          "description": data?.description || "A comprehensive guide to password security in the digital age. Learn how to create strong passwords and store them securely.",
          "image": data?.image || "https://passwordgencheck.com/password-security.jpg",
          "author": {
            "@type": "Organization",
            "name": "PasswordGenCheck Security Team"
          },
          "publisher": {
            "@type": "Organization",
            "name": "PasswordGenCheck",
            "logo": {
              "@type": "ImageObject",
              "url": "https://passwordgencheck.com/logo.png"
            }
          },
          "datePublished": data?.datePublished || "2025-10-04",
          "dateModified": data?.dateModified || "2025-10-04",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data?.url || "https://passwordgencheck.com/password-guide"
          }
        };

      case "faq":
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What makes a password strong?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A strong password has at least 12-16 characters, includes a mix of uppercase and lowercase letters, numbers, and symbols, is unique for each account, and doesn't contain dictionary words or personal information."
              }
            },
            {
              "@type": "Question",
              "name": "How often should I change my passwords?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Change your passwords immediately if you suspect a security breach. Otherwise, update important passwords every 3-6 months. Focus on using unique, strong passwords rather than frequent changes."
              }
            },
            {
              "@type": "Question",
              "name": "Is a password manager safe?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, reputable password managers use military-grade encryption (AES-256) to protect your data. They are much safer than reusing passwords or writing them down, as they generate and store unique, complex passwords for all your accounts."
              }
            },
            {
              "@type": "Question",
              "name": "What is two-factor authentication (2FA)?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Two-factor authentication (2FA) adds an extra layer of security by requiring two forms of verification: something you know (password) and something you have (phone, security key) or something you are (fingerprint, face ID)."
              }
            },
            {
              "@type": "Question",
              "name": "Can password generators be trusted?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Client-side password generators that run in your browser (like ours) are safe because passwords are generated locally on your device and never transmitted over the internet. Always use reputable, open-source tools."
              }
            }
          ]
        };

      case "breadcrumb":
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data?.items?.map((item: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          })) || []
        };

      default:
        return null;
    }
  };

  const schema = getSchema();

  if (!schema) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup;
