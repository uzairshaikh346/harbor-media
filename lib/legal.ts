/* ----------------------------------------------------------------------------
   Long form legal copy for /privacy-policy and /terms-of-service.

   IMPORTANT: these documents should be reviewed by an attorney before going
   live, particularly if the site monetizes, sells advertising, or collects
   user data.

   Sections are built from ordered blocks so a single heading can mix
   paragraphs and lists in any order.
---------------------------------------------------------------------------- */

export type LegalBlock =
  | { type: "text"; content: string }
  | { type: "list"; items: string[] }
  | { type: "terms"; items: { term: string; definition: string }[] };

export type LegalSection = {
  heading: string;
  blocks: LegalBlock[];
};

export type LegalDoc = {
  title: string;
  description: string;
  effective: string;
  intro: string[];
  sections: LegalSection[];
};

const text = (content: string): LegalBlock => ({ type: "text", content });
const list = (items: string[]): LegalBlock => ({ type: "list", items });
const terms = (items: { term: string; definition: string }[]): LegalBlock => ({
  type: "terms",
  items,
});

export const cookiePolicy: LegalDoc = {
  title: "Cookie Policy",
  description:
    "How HarborMedia.ai uses cookies and similar technologies, the types of cookies we set, and how to manage them in your browser.",
  effective: "July 28, 2026",
  intro: [
    "HarborMedia.ai (HarborMedia, we, our, or us) uses cookies and similar technologies to improve your browsing experience, understand how visitors use our website, remember preferences, and help us create better content.",
  ],
  sections: [
    {
      heading: "What Are Cookies?",
      blocks: [
        text(
          "Cookies are small text files stored on your device when you visit a website. They help websites function efficiently and provide information about user activity."
        ),
      ],
    },
    {
      heading: "Types of Cookies We Use",
      blocks: [
        terms([
          {
            term: "Essential Cookies",
            definition: "These cookies are necessary for the website to function properly.",
          },
          {
            term: "Performance and Analytics Cookies",
            definition:
              "These cookies help us understand how visitors interact with our website through anonymous analytics, allowing us to improve user experience.",
          },
          {
            term: "Functionality Cookies",
            definition:
              "These cookies remember preferences such as language, region, and display settings.",
          },
          {
            term: "Advertising Cookies",
            definition:
              "If applicable, advertising partners such as Google or Meta may use cookies to deliver relevant advertising and measure campaign effectiveness.",
          },
        ]),
      ],
    },
    {
      heading: "Managing Cookies",
      blocks: [
        text(
          "Most browsers allow you to disable or manage cookies through browser settings. Disabling cookies may affect certain website features."
        ),
      ],
    },
    {
      heading: "Contact",
      blocks: [
        text("Questions regarding this Cookie Policy may be directed to:"),
        text("info@harbormedia.ai"),
      ],
    },
  ],
};

export const termsOfService: LegalDoc = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of the HarborMedia.ai website, social media channels, videos and digital services.",
  effective: "July 28, 2026",
  intro: [
    "Welcome to HarborMedia.ai (HarborMedia, we, our, or us).",
    "By accessing our website, social media channels, videos, or digital services, you agree to these Terms of Service. If you do not agree, please discontinue use.",
  ],
  sections: [
    {
      heading: "Our Mission",
      blocks: [
        text(
          "HarborMedia.ai is an AI-powered media company that captures, produces, and publishes authentic visual storytelling featuring waterfront destinations, communities, businesses, travel, weather, nature, and local culture."
        ),
        text("Our flagship brand includes:"),
        list(["Sunrises in the Hamptons™"]),
        text("Additional brands may be introduced over time."),
      ],
    },
    {
      heading: "Intellectual Property",
      blocks: [
        text("Unless otherwise stated, all content is owned by HarborMedia.ai, including:"),
        list([
          "Videos",
          "Photography",
          "Drone footage",
          "Time-lapse footage",
          "Graphics",
          "Logos",
          "Branding",
          "AI-generated enhancements",
          "Website design",
          "Written articles",
        ]),
        text(
          "Content may not be copied, redistributed, sold, or republished without written permission."
        ),
      ],
    },
    {
      heading: "User Conduct",
      blocks: [
        text("You agree not to:"),
        list([
          "Copy our content without permission",
          "Misrepresent HarborMedia.ai",
          "Attempt unauthorized access to our systems",
          "Upload malicious software",
          "Violate applicable laws",
        ]),
      ],
    },
    {
      heading: "Social Media",
      blocks: [
        text("Comments are welcome."),
        text("We reserve the right to remove content that is:"),
        list(["abusive", "defamatory", "threatening", "spam", "misleading", "unlawful"]),
      ],
    },
    {
      heading: "AI Disclosure",
      blocks: [
        text(
          "Some graphics, editing, narration, captions, or creative assets may be enhanced using artificial intelligence."
        ),
        text(
          "Whenever possible, our photography and video depict authentic real-world locations."
        ),
      ],
    },
    {
      heading: "Third-Party Links",
      blocks: [
        text("Our website may link to:"),
        list([
          "YouTube",
          "Instagram",
          "Facebook",
          "Local businesses",
          "Tourism organizations",
          "Sponsors",
        ]),
        text("We are not responsible for third-party content."),
      ],
    },
    {
      heading: "No Professional Advice",
      blocks: [
        text("Content is provided for informational and entertainment purposes only."),
        text(
          "Nothing on HarborMedia.ai constitutes legal, financial, investment, engineering, weather, navigation, or professional advice."
        ),
      ],
    },
    {
      heading: "Limitation of Liability",
      blocks: [
        text("HarborMedia.ai is not liable for:"),
        list([
          "indirect damages",
          "lost profits",
          "business interruption",
          "data loss",
          "reliance on published information",
        ]),
        text("Use of our services is at your own risk."),
      ],
    },
    {
      heading: "Changes",
      blocks: [
        text("We may update these Terms periodically."),
        text("Continued use constitutes acceptance of revised Terms."),
      ],
    },
    {
      heading: "Governing Law",
      blocks: [
        text("These Terms shall be governed by the laws of the State of New York."),
      ],
    },
    {
      heading: "Contact",
      blocks: [
        text("HarborMedia.ai"),
        text("Website: www.harbormedia.ai"),
        text("Email: info@harbormedia.ai"),
      ],
    },
  ],
};

export const privacyPolicy: LegalDoc = {
  title: "Privacy Policy",
  description:
    "How HarborMedia.ai collects, uses, and protects your information when you visit our website or contact us.",
  effective: "July 28, 2026",
  intro: [
    "HarborMedia.ai values your privacy.",
    "This Privacy Policy explains how we collect, use, and protect your information.",
  ],
  sections: [
    {
      heading: "Information We Collect",
      blocks: [
        text("You may voluntarily provide:"),
        list([
          "Name",
          "Email address",
          "Phone number",
          "Business information",
          "Messages submitted through contact forms",
        ]),
        text("Automatically collected information may include:"),
        list([
          "IP address",
          "Browser type",
          "Device type",
          "Operating system",
          "Pages viewed",
          "Time spent on the website",
          "Referral sources",
          "Cookie data",
        ]),
      ],
    },
    {
      heading: "Cookies",
      blocks: [
        text("Our website may use cookies to:"),
        list([
          "improve performance",
          "analyze traffic",
          "remember preferences",
          "measure marketing effectiveness",
        ]),
        text("You may disable cookies within your browser."),
      ],
    },
    {
      heading: "Analytics",
      blocks: [
        text("We may use services such as:"),
        list(["Google Analytics", "Meta Pixel", "YouTube Analytics"]),
        text(
          "These services may collect anonymous usage information to help improve our content and website."
        ),
      ],
    },
    {
      heading: "How We Use Information",
      blocks: [
        text("Information may be used to:"),
        list([
          "respond to inquiries",
          "improve our services",
          "publish newsletters",
          "send updates (if subscribed)",
          "monitor website performance",
          "prevent fraud",
          "comply with legal obligations",
        ]),
      ],
    },
    {
      heading: "Sharing Information",
      blocks: [
        text("We do not sell your personal information."),
        text(
          "Information may be shared only with trusted service providers that help us operate our website or when required by law."
        ),
      ],
    },
    {
      heading: "Data Security",
      blocks: [
        text(
          "We use commercially reasonable security measures to protect personal information."
        ),
        text("However, no Internet transmission is completely secure."),
      ],
    },
    {
      heading: "Children's Privacy",
      blocks: [
        text("HarborMedia.ai is not intended for children under 13."),
        text("We do not knowingly collect personal information from children."),
      ],
    },
    {
      heading: "Your Rights",
      blocks: [
        text("Depending on your location, you may have rights to:"),
        list([
          "access your information",
          "request corrections",
          "request deletion",
          "opt out of marketing communications",
          "request a copy of your personal data",
        ]),
      ],
    },
    {
      heading: "Third-Party Websites",
      blocks: [
        text(
          "Links to external websites are governed by those websites' own privacy policies."
        ),
      ],
    },
    {
      heading: "Policy Updates",
      blocks: [
        text("We may update this Privacy Policy periodically."),
        text("The Effective Date at the top will reflect the latest version."),
      ],
    },
    {
      heading: "Contact",
      blocks: [
        text("HarborMedia.ai"),
        text("Email: info@harbormedia.ai"),
        text("Website: www.harbormedia.ai"),
      ],
    },
  ],
};
