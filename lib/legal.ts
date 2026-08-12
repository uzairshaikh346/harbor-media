/* ----------------------------------------------------------------------------
   Long form legal copy for the HarborMedia.ai policy pages.

   Source: "HarborMedia.ai Website Policies & Compliance Draft" (New York
   focused), dated August 10, 2026.

   IMPORTANT: this copy is adapted from a business draft, not a legal opinion.
   New York counsel should review the final policies, camera configuration,
   signage, privacy/data flows, advertising stack, contributor workflow, and
   corporate details before publication.

   Internal drafting guidance from the source document (Appendix A compliance
   checklist, Appendix B research sources, Appendix C open questions, and the
   "HarborMedia.ai should..." instructions) is deliberately NOT published here.
   Statements of practice below must match how the site and cameras are
   actually configured -- see the launch checklist handed off with this work.

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
  lastUpdated: string;
  intro: string[];
  sections: LegalSection[];
};

const text = (content: string): LegalBlock => ({ type: "text", content });
const list = (items: string[]): LegalBlock => ({ type: "list", items });
const terms = (items: { term: string; definition: string }[]): LegalBlock => ({
  type: "terms",
  items,
});

/* Shared contact details -- change these in one place. */
const CONTACT_EMAIL = "creator@harbormedia.ai";
const MAILING_ADDRESS = "BBC, 9 Canoe Place Rd., Hampton Bays, NY 11946";
const LAST_UPDATED = "August 10, 2026";

/* -------------------------------------------------------------------------- */
/* 1. Copyright & DMCA Policy                                                 */
/* -------------------------------------------------------------------------- */

export const copyrightPolicy: LegalDoc = {
  title: "Copyright & DMCA Policy",
  description:
    "How HarborMedia.ai handles ownership of its media, third-party content, and DMCA copyright infringement notices and counter-notices.",
  lastUpdated: LAST_UPDATED,
  intro: [
    "HarborMedia.ai respects the intellectual property rights of photographers, videographers, creators, businesses, publishers, and other rights holders.",
    "This policy explains ownership of HarborMedia.ai content and the process for reporting alleged copyright infringement.",
  ],
  sections: [
    {
      heading: "Ownership of HarborMedia.ai Content",
      blocks: [
        text(
          "Unless otherwise stated, original photographs, video footage, live-camera imagery, graphics, branding, written content, compilations, metadata, and other media created or owned by HarborMedia.ai are protected by United States and other applicable copyright and intellectual property laws."
        ),
        text(
          "HarborMedia.ai content may not be copied, reproduced, republished, distributed, sold, sublicensed, modified, publicly displayed, or commercially exploited except as authorized by HarborMedia.ai, the applicable rights holder, applicable platform functionality, or law."
        ),
      ],
    },
    {
      heading: "Third-Party and Submitted Content",
      blocks: [
        text(
          "Content supplied by contributors, licensors, partners, platforms, or other third parties may remain owned by those parties and is used subject to the rights granted to HarborMedia.ai. A credit, link, or appearance on HarborMedia.ai does not transfer ownership."
        ),
      ],
    },
    {
      heading: "DMCA Notices",
      blocks: [
        text(
          "If you believe material available through HarborMedia.ai infringes a copyright you own or are authorized to enforce, send a written notice to HarborMedia.ai's designated copyright agent containing the information required by 17 U.S.C. § 512(c)(3), including:"
        ),
        list([
          "A physical or electronic signature of the copyright owner or authorized agent.",
          "Identification of the copyrighted work claimed to have been infringed, or a representative list if multiple works are covered.",
          "Identification of the allegedly infringing material and information reasonably sufficient to locate it, preferably including the exact URL.",
          "Your name, mailing address, telephone number, and email address.",
          "A statement of good-faith belief that the disputed use is not authorized by the copyright owner, its agent, or law.",
          "A statement that the notice is accurate and, under penalty of perjury, that you are authorized to act on behalf of the copyright owner.",
        ]),
      ],
    },
    {
      heading: "Counter-Notices",
      blocks: [
        text(
          "If material you submitted was removed or disabled because of a DMCA notice and you believe the removal was a mistake or misidentification, you may submit a counter-notification meeting the requirements of 17 U.S.C. § 512(g). HarborMedia.ai may restore material as permitted by law."
        ),
      ],
    },
    {
      heading: "Repeat Infringers",
      blocks: [
        text(
          "HarborMedia.ai may terminate or restrict contributor or account access in appropriate circumstances involving repeat infringement."
        ),
      ],
    },
    {
      heading: "DMCA Designated Agent",
      blocks: [
        text("HarborMedia.ai"),
        text("Attn: DMCA Designated Agent"),
        text(`Email: ${CONTACT_EMAIL}`),
        text(`Mailing Address: ${MAILING_ADDRESS}`),
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* 2. AI Content & Editorial Standards                                        */
/* -------------------------------------------------------------------------- */

export const aiEditorialStandards: LegalDoc = {
  title: "AI Content & Editorial Standards",
  description:
    "How HarborMedia.ai uses artificial intelligence to describe and distribute authentic media, and the accuracy, labeling, and review standards that apply.",
  lastUpdated: LAST_UPDATED,
  intro: [
    "HarborMedia.ai combines authentic visual media with artificial intelligence and automated technology to capture, organize, enhance, describe, distribute, and present stories about real places and environments.",
    "Our guiding principle is: AI should help tell the story, not manufacture the story.",
  ],
  sections: [
    {
      heading: "Authenticity",
      blocks: [
        text(
          "HarborMedia.ai prioritizes authentic photography, video, live-camera imagery, and environmental observations captured from real-world locations."
        ),
        text("AI and automated systems may assist with:"),
        list([
          "Video and image analysis",
          "Titles, descriptions, tags, and metadata",
          "Search optimization",
          "Captioning and transcription",
          "Content classification and moderation",
          "Editing assistance and formatting",
          "Weather or geographic context from trusted data sources",
          "Publishing, syndication, and distribution",
          "Accessibility features",
        ]),
      ],
    },
    {
      heading: "Accuracy and Location Metadata",
      blocks: [
        text(
          "AI-generated descriptions are intended to accurately represent the source content. HarborMedia.ai does not intentionally invent people, events, businesses, wildlife, weather, locations, or activities that are not visible, verified, or supported by trusted metadata."
        ),
        text(
          "When a camera location is verified, HarborMedia.ai may use that verified location information even when a specific landmark cannot be identified from the frames alone."
        ),
      ],
    },
    {
      heading: "Human Review and Corrections",
      blocks: [
        text(
          "Automated content may be reviewed, corrected, updated, relabeled, or removed when errors are identified. Material factual errors are handled under the Corrections Policy."
        ),
      ],
    },
    {
      heading: "Synthetic or Materially Altered Media",
      blocks: [
        text(
          "If HarborMedia.ai publishes materially AI-generated or synthetic visual media that a reasonable viewer could mistake for authentic footage, HarborMedia.ai provides clear labeling or disclosure where appropriate."
        ),
        text(
          "Routine edits such as cropping, stabilization, color correction, noise reduction, compression, captioning, or sequencing generally do not require a synthetic-media label unless they materially change the meaning of the scene."
        ),
      ],
    },
    {
      heading: "No Deceptive Manipulation",
      blocks: [
        text(
          "HarborMedia.ai does not use AI to fabricate events, falsely depict a person as doing or saying something, or falsely suggest affiliation, sponsorship, location, or endorsement."
        ),
      ],
    },
    {
      heading: "Contact",
      blocks: [
        text("Editorial questions may be directed to:"),
        text(CONTACT_EMAIL),
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* 3. Licensing & Media Usage Policy                                          */
/* -------------------------------------------------------------------------- */

export const licensingPolicy: LegalDoc = {
  title: "Licensing & Media Usage Policy",
  description:
    "How to license HarborMedia.ai photography, video, and live-camera footage for editorial, broadcast, commercial, and marketing use.",
  lastUpdated: LAST_UPDATED,
  intro: [
    "HarborMedia.ai creates and distributes visual media featuring waterfront destinations, landscapes, weather, marine activity, communities, businesses, events, and other real-world environments.",
    "Selected HarborMedia.ai photographs and footage may be available for editorial or commercial licensing.",
  ],
  sections: [
    {
      heading: "Potential Uses",
      blocks: [
        text("Licensed content may be suitable for:"),
        list([
          "Television and broadcast",
          "News and editorial coverage",
          "Websites and digital publications",
          "Tourism and destination marketing",
          "Hospitality and marina marketing",
          "Social media campaigns",
          "Advertising",
          "Documentary productions",
          "Real estate and development presentations",
          "Weather and marine coverage",
          "Corporate presentations",
        ]),
      ],
    },
    {
      heading: "Permission Required",
      blocks: [
        text(
          "Unless expressly authorized, HarborMedia.ai content may not be downloaded, copied, reproduced, republished, redistributed, sold, sublicensed, or commercially exploited. Sharing through official social-platform sharing tools may be permitted subject to the applicable platform terms."
        ),
      ],
    },
    {
      heading: "Licensing Requests",
      blocks: [
        text(
          "For licensing, commercial usage, broadcast-quality footage, partnerships, or media requests, contact:"
        ),
        text("HarborMedia.ai"),
        text(`Email: ${CONTACT_EMAIL}`),
        text(
          "Please identify the content, intended use, media/platform, territory, duration, and whether the request is editorial, commercial, advertising, or promotional."
        ),
      ],
    },
    {
      heading: "People, Private Property, Trademarks, and Releases",
      blocks: [
        text(
          "A HarborMedia.ai license covers only rights HarborMedia.ai actually controls. Unless specifically stated in a written license, it does not automatically include model releases, property releases, trademark permissions, music rights, publicity rights, or other third-party permissions that may be required for a licensee's particular use."
        ),
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* 4. Drone Operations & FAA Compliance                                       */
/* -------------------------------------------------------------------------- */

export const droneOperations: LegalDoc = {
  title: "Drone Operations & FAA Compliance",
  description:
    "HarborMedia.ai's approach to safe, FAA Part 107 compliant drone photography, including property rules and third-party contributor footage.",
  lastUpdated: LAST_UPDATED,
  intro: [
    "HarborMedia.ai may use unmanned aircraft systems, commonly known as drones, for aerial photography and cinematography.",
    "Safety, privacy, responsible operation, and regulatory compliance are priorities.",
  ],
  sections: [
    {
      heading: "Commercial Operations",
      blocks: [
        text(
          "Non-recreational small-drone flights performed by or for HarborMedia.ai comply with applicable Federal Aviation Administration requirements, including 14 CFR Part 107 when applicable."
        ),
        text("Depending on the operation, requirements may include:"),
        list([
          "A current FAA Remote Pilot Certificate",
          "Aircraft registration",
          "Remote Identification compliance",
          "Airspace authorization where required",
          "Compliance with operating limitations",
          "Night-operation requirements",
          "Visibility and weather requirements",
          "Rules concerning operations over people and moving vehicles",
          "Temporary Flight Restrictions and other airspace restrictions",
          "Any required FAA waiver or authorization for operations outside ordinary Part 107 limits",
        ]),
      ],
    },
    {
      heading: "Property, Launch, and Local Rules",
      blocks: [
        text(
          "FAA authority over airspace does not eliminate separate obligations involving where a drone may launch, land, or be operated from, nor does it eliminate applicable property, privacy, trespass, park, municipal, state, or site-specific rules."
        ),
        text("Operators must confirm applicable restrictions for each location."),
      ],
    },
    {
      heading: "Safety",
      blocks: [
        text("No image or footage is worth compromising aviation safety."),
        text(
          "Operators evaluate weather, visibility, people, structures, vessels, wildlife, emergency activity, air traffic, and site conditions before and during flight."
        ),
      ],
    },
    {
      heading: "Third-Party Drone Footage",
      blocks: [
        text(
          "A contributor who submits drone footage represents that the contributor has authority to submit it and is responsible for the legality of the underlying flight."
        ),
        text(
          "Publication by HarborMedia.ai is not a representation that HarborMedia.ai independently verified every aspect of the flight."
        ),
      ],
    },
    {
      heading: "Contact",
      blocks: [
        text("Aerial production inquiries may be directed to:"),
        text(CONTACT_EMAIL),
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* 5. Photo & Video Submission Policy                                         */
/* -------------------------------------------------------------------------- */

export const submissionPolicy: LegalDoc = {
  title: "Photo & Video Submission Policy",
  description:
    "What you may submit to HarborMedia.ai, the license you grant when you submit, and how submissions involving minors and removal requests are handled.",
  lastUpdated: LAST_UPDATED,
  intro: [
    "HarborMedia.ai welcomes compelling photographs and videos capturing authentic places, waterfront activity, weather, nature, travel, marine life, events, and noteworthy visual moments.",
  ],
  sections: [
    {
      heading: "What You May Submit",
      blocks: [
        text("You should submit only material that:"),
        list([
          "You created or are authorized to submit",
          "Was obtained lawfully",
          "Does not knowingly violate copyright, privacy, publicity, trademark, contractual, or other rights",
          "Does not contain intentionally deceptive information or manipulated content presented as authentic",
          "You have authority to license to HarborMedia.ai",
        ]),
      ],
    },
    {
      heading: "License Granted by Submission",
      blocks: [
        text(
          "Unless a separate written agreement applies, by voluntarily submitting content for possible publication you grant HarborMedia.ai a non-exclusive, worldwide, royalty-free, sublicensable license to host, reproduce, edit, crop, resize, transcode, caption, describe, display, publicly perform, distribute, promote, archive, and publish the submitted content in connection with HarborMedia.ai, its websites, apps, social channels, streaming channels, promotional materials, and syndication partners."
        ),
        text(
          "You retain ownership of any copyright you own in the original submission. HarborMedia.ai does not acquire exclusive ownership merely because you submit content."
        ),
      ],
    },
    {
      heading: "Your Representations",
      blocks: [
        text("By submitting content, you represent that:"),
        list([
          "You are at least 18 years old or have the authorization of a parent or legal guardian",
          "You have the rights necessary to grant the license above",
          "Your submission and HarborMedia.ai's authorized use will not knowingly violate another person's rights",
          "Any location, event, authorship, or factual information you provide is accurate to the best of your knowledge",
        ]),
      ],
    },
    {
      heading: "Minors",
      blocks: [
        text(
          "Do not submit close-up or personally identifying content focused on a minor unless you are the parent or legal guardian or have appropriate authorization."
        ),
        text(
          "HarborMedia.ai may reject or remove submissions involving minors at its discretion."
        ),
      ],
    },
    {
      heading: "AI Processing",
      blocks: [
        text(
          "Submitted content may be processed with automated or AI systems for moderation, classification, captioning, transcription, metadata creation, search optimization, editing assistance, and distribution."
        ),
      ],
    },
    {
      heading: "Credit",
      blocks: [
        text(
          "HarborMedia.ai may provide creator credit when appropriate, but credit placement and format may vary by platform unless agreed in writing."
        ),
      ],
    },
    {
      heading: "Removal Requests",
      blocks: [
        text(`Requests may be sent to ${CONTACT_EMAIL}.`),
        text(
          "HarborMedia.ai will evaluate removal requests based on rights, safety, privacy, contractual obligations, editorial considerations, and applicable law."
        ),
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* 6. Accessibility Statement                                                 */
/* -------------------------------------------------------------------------- */

export const accessibilityStatement: LegalDoc = {
  title: "Accessibility Statement",
  description:
    "HarborMedia.ai's commitment to accessible digital content, the standards we work toward, and how to request assistance or report a barrier.",
  lastUpdated: LAST_UPDATED,
  intro: [
    "HarborMedia.ai is committed to making its digital content accessible to as broad an audience as reasonably possible, including people with disabilities.",
  ],
  sections: [
    {
      heading: "Our Approach",
      blocks: [
        text(
          "HarborMedia.ai aims to improve accessibility and usability across its website, videos, images, forms, and interactive experiences. Depending on the content and technology, efforts may include:"
        ),
        list([
          "Alternative text for meaningful images",
          "Captions or transcripts for prerecorded video where appropriate and practicable",
          "Keyboard-accessible navigation and controls",
          "Clear page structure and descriptive headings",
          "Readable typography and sufficient contrast",
          "Descriptive links, labels, and form controls",
          "Responsive layouts across devices",
          "Compatibility improvements for assistive technologies",
          "Avoiding unnecessary flashing or motion that could create accessibility barriers",
        ]),
        text(
          "HarborMedia.ai uses the Web Content Accessibility Guidelines as an important technical reference and will continue to evaluate accessibility as the service evolves."
        ),
      ],
    },
    {
      heading: "Live Video",
      blocks: [
        text(
          "Real-time live-camera streams present unique accessibility limitations. Where practicable, HarborMedia.ai provides descriptive location information, titles, captions, summaries, or alternative content that communicates the purpose and context of a live view."
        ),
      ],
    },
    {
      heading: "Feedback and Assistance",
      blocks: [
        text(
          "If you experience difficulty accessing HarborMedia.ai or need information in an alternative format, contact:"
        ),
        text("HarborMedia.ai Accessibility"),
        text(`Email: ${CONTACT_EMAIL}`),
        text(
          "Please identify the page, feature, or content and describe the accessibility issue so we can investigate."
        ),
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* 7. Advertiser & Sponsor Disclosure                                         */
/* -------------------------------------------------------------------------- */

export const advertiserDisclosure: LegalDoc = {
  title: "Advertiser & Sponsor Disclosure",
  description:
    "How HarborMedia.ai discloses sponsorships, affiliate links, and other material connections, and why a business appearing on camera is not an endorsement.",
  lastUpdated: LAST_UPDATED,
  intro: [
    "HarborMedia.ai may work with advertisers, sponsors, tourism organizations, hospitality businesses, restaurants, marinas, marine brands, destinations, real estate organizations, and other commercial partners.",
  ],
  sections: [
    {
      heading: "Sponsored Content and Material Connections",
      blocks: [
        text(
          "When content is created or distributed as part of a paid sponsorship, affiliate relationship, free-product arrangement, compensated placement, or other material connection that could affect how a viewer evaluates the content, HarborMedia.ai makes a clear and conspicuous disclosure appropriate to the medium."
        ),
        text("Disclosures may include:"),
        list([
          "Sponsored",
          "Paid Partnership",
          "Presented By",
          "In Partnership With",
          "Advertisement",
          "Affiliate link / HarborMedia.ai may earn a commission",
        ]),
        text(
          "A disclosure is placed where viewers are likely to notice and understand it, rather than being hidden in unrelated text or a distant page."
        ),
      ],
    },
    {
      heading: "Camera Locations and Nearby Businesses",
      blocks: [
        text(
          "HarborMedia.ai cameras may capture views from or near restaurants, marinas, hotels, private properties, public spaces, landmarks, vessels, and other recognizable locations."
        ),
        text(
          "The appearance or mention of a business, property, vessel, product, landmark, or organization does not by itself mean that the entity sponsors, endorses, or is affiliated with HarborMedia.ai."
        ),
        text(
          "Geographic references to nearby businesses may be used to help viewers understand where footage was captured. Such references are not sponsorship claims unless a sponsorship relationship is expressly disclosed."
        ),
      ],
    },
    {
      heading: "Editorial Independence",
      blocks: [
        text(
          "Payment or sponsorship does not automatically guarantee favorable editorial treatment. HarborMedia.ai seeks to distinguish authentic visual documentation from paid promotional relationships."
        ),
      ],
    },
    {
      heading: "Advertising Claims",
      blocks: [
        text(
          "Advertising and promotional claims should be truthful, not misleading, and supported where substantiation is required."
        ),
      ],
    },
    {
      heading: "Partnership Inquiries",
      blocks: [text(`Email: ${CONTACT_EMAIL}`)],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* 8. Privacy Policy                                                          */
/* -------------------------------------------------------------------------- */

export const privacyPolicy: LegalDoc = {
  title: "Privacy Policy",
  description:
    "How HarborMedia.ai collects, uses, discloses, and protects information when you visit our website, submit content, or contact us.",
  lastUpdated: LAST_UPDATED,
  intro: [
    "This Privacy Policy explains how HarborMedia.ai may collect, use, disclose, and protect information when you visit or interact with HarborMedia.ai websites, forms, media channels, and related services.",
  ],
  sections: [
    {
      heading: "Information We May Collect",
      blocks: [
        text("Depending on the features used, HarborMedia.ai may collect:"),
        list([
          "Contact information you voluntarily provide, such as name, email address, company, and message contents",
          "Submission information, including photos, videos, captions, location information, creator details, and rights information",
          "Technical data such as IP address, browser and device type, operating system, referring pages, approximate location derived from IP, and timestamps",
          "Usage information such as pages viewed, video interactions, clicks, session activity, and referral sources",
          "Cookie and similar-technology identifiers used for site operation, analytics, security, preferences, or advertising, if deployed",
          "Business inquiry information for licensing, sponsorship, advertising, or partnerships",
        ]),
      ],
    },
    {
      heading: "How We May Use Information",
      blocks: [
        text("HarborMedia.ai may use information to:"),
        list([
          "Operate, secure, maintain, and improve the service",
          "Respond to messages and requests",
          "Process contributor submissions and licensing inquiries",
          "Publish, categorize, moderate, and distribute content",
          "Understand site performance and audience engagement",
          "Detect abuse, fraud, infringement, or security incidents",
          "Maintain records and enforce agreements",
          "Comply with law and protect legal rights",
          "Conduct advertising or marketing only as described in this policy and subject to applicable law",
        ]),
      ],
    },
    {
      heading: "Cookies, Analytics, and Advertising Technologies",
      blocks: [
        text(
          "HarborMedia.ai may use cookies or similar technologies for necessary site functions, preferences, analytics, security, and, if enabled, advertising. Further detail is available in the Cookie Policy."
        ),
        text(
          "Where third-party advertising, analytics, embedded video, social widgets, or pixels are deployed, the categories of providers involved may include website hosting and content delivery providers, website analytics providers, embedded video platforms, social media platforms, and email or form service providers."
        ),
        text(
          "HarborMedia.ai works to keep this policy and its cookie and preference controls consistent with the technology actually deployed on the site."
        ),
      ],
    },
    {
      heading: "Children and Teen Users",
      blocks: [
        text(
          "HarborMedia.ai is a general-audience service and is not intended to be directed to children under 13."
        ),
        text(
          "HarborMedia.ai does not knowingly collect personal information online from a child under 13 in a manner subject to COPPA without complying with applicable parental notice and consent requirements."
        ),
        text(
          "New York's Child Data Protection Act provides additional protections for personal data of users under 18. HarborMedia.ai minimizes data collection from known minors and does not use, share, or sell a known minor's personal data for advertising or other non-necessary purposes except as permitted by applicable law and with required consent."
        ),
        text(
          "Contributor forms require submitters to be 18 or older unless a parent or legal guardian is handling the submission."
        ),
      ],
    },
    {
      heading: "Disclosure of Information",
      blocks: [
        text("HarborMedia.ai may disclose information:"),
        list([
          "To vendors and service providers that support hosting, security, analytics, communications, content processing, or other operations",
          "To platforms and syndication partners when needed to publish authorized content",
          "In connection with a business transaction such as a merger, acquisition, financing, or asset transfer, subject to applicable law",
          "When required by law, legal process, or a valid governmental request",
          "To protect rights, safety, property, systems, users, or the public",
          "With consent or at the direction of the individual",
        ]),
        text(
          "HarborMedia.ai does not sell personal information. Service providers, analytics tools, and embedded platforms may receive data as described above in order to operate the service."
        ),
      ],
    },
    {
      heading: "Data Security",
      blocks: [
        text(
          "HarborMedia.ai uses reasonable administrative, technical, and physical safeguards appropriate to the nature of the information it maintains. New York's SHIELD Act requires covered businesses that own or license New York residents' private information to develop, implement, and maintain reasonable safeguards."
        ),
        text(
          "No method of transmission or storage can be guaranteed to be completely secure."
        ),
      ],
    },
    {
      heading: "Data Retention",
      blocks: [
        text(
          "HarborMedia.ai retains personal information only for as long as reasonably necessary for the purposes described in this policy, legal obligations, disputes, security, licensing records, or legitimate business needs."
        ),
      ],
    },
    {
      heading: "Your Choices and Requests",
      blocks: [
        text(
          "Depending on the context and applicable law, you may contact HarborMedia.ai to request access, correction, or deletion of information you voluntarily submitted, or to opt out of promotional communications."
        ),
        text(`Privacy requests: ${CONTACT_EMAIL}`),
        text(
          "HarborMedia.ai may need to verify the request and may retain information where required or permitted by law."
        ),
      ],
    },
    {
      heading: "Third-Party Services and Links",
      blocks: [
        text(
          "HarborMedia.ai may link to or embed third-party services such as video platforms, maps, social media, advertisers, or partner sites. Their privacy practices are governed by their own policies."
        ),
      ],
    },
    {
      heading: "Changes to This Policy",
      blocks: [
        text(
          "HarborMedia.ai may update this Privacy Policy as technology, operations, or legal requirements change. The Last Updated date identifies the current version. Material changes will be communicated in an appropriate manner."
        ),
      ],
    },
    {
      heading: "Contact",
      blocks: [
        text("HarborMedia.ai"),
        text(`Privacy Contact: ${CONTACT_EMAIL}`),
        text(`Mailing Address: ${MAILING_ADDRESS}`),
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* 9. Terms of Use                                                            */
/* -------------------------------------------------------------------------- */

export const termsOfService: LegalDoc = {
  title: "Terms of Use",
  description:
    "The terms that govern your access to and use of HarborMedia.ai websites, live-camera views, media, and submission features.",
  lastUpdated: LAST_UPDATED,
  intro: [
    "These Terms of Use govern access to and use of HarborMedia.ai websites, live-camera views, media, submission features, and related services.",
    "By using the service, you agree to these Terms. If you do not agree, do not use the service.",
  ],
  sections: [
    {
      heading: "Informational and Media Service",
      blocks: [
        text(
          "HarborMedia.ai provides visual, editorial, environmental, travel, marine, weather-related, and entertainment content."
        ),
        text(
          "Camera views and descriptions are not emergency, navigation, maritime-safety, aviation, weather-warning, security, or professional advisory services."
        ),
        text(
          "Do not rely on HarborMedia.ai to make safety-critical boating, aviation, weather, emergency, or navigation decisions. Use official and professionally appropriate sources."
        ),
      ],
    },
    {
      heading: "Changes and Availability",
      blocks: [
        text(
          "Streams, cameras, pages, and features may be delayed, interrupted, unavailable, repositioned, edited, replaced, or discontinued without notice."
        ),
        text(
          "Weather, lighting, internet connectivity, maintenance, third-party platforms, or equipment failures may affect availability."
        ),
      ],
    },
    {
      heading: "Permitted Use",
      blocks: [
        text(
          "You may access HarborMedia.ai for lawful personal or authorized business purposes consistent with these Terms. Unless expressly permitted, you may not:"
        ),
        list([
          "Copy, scrape, bulk-download, rebroadcast, resell, or commercially exploit HarborMedia.ai content",
          "Circumvent access controls or security features",
          "Interfere with the site, servers, cameras, accounts, or network",
          "Upload malicious code or unlawful content",
          "Misrepresent affiliation with HarborMedia.ai",
          "Use content to stalk, harass, identify, profile, or target individuals appearing incidentally in camera footage",
          "Use automated systems in a manner that imposes unreasonable load or violates posted technical restrictions",
        ]),
      ],
    },
    {
      heading: "Intellectual Property",
      blocks: [
        text(
          "HarborMedia.ai and its licensors retain their rights in content, trademarks, branding, software, and media. No implied license is granted except the limited right to access the service in accordance with these Terms."
        ),
      ],
    },
    {
      heading: "User Submissions",
      blocks: [
        text(
          "Submissions are governed by the Photo & Video Submission Policy, which is incorporated into these Terms."
        ),
      ],
    },
    {
      heading: "Third-Party Content",
      blocks: [
        text(
          "The service may display third-party links, maps, embeds, advertisements, or content. HarborMedia.ai does not control and is not responsible for third-party services, terms, availability, accuracy, or privacy practices."
        ),
      ],
    },
    {
      heading: "Disclaimer of Warranties",
      blocks: [
        text(
          "To the fullest extent permitted by law, the service is provided on an as is and as available basis. HarborMedia.ai does not warrant uninterrupted availability, complete accuracy, error-free operation, or fitness for a particular purpose."
        ),
        text(
          "Nothing in these Terms limits rights or warranties that cannot lawfully be waived."
        ),
      ],
    },
    {
      heading: "Limitation of Liability",
      blocks: [
        text(
          "To the fullest extent permitted by applicable law, HarborMedia.ai and its owners, affiliates, officers, contractors, licensors, and service providers will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages arising from use of or inability to use the service."
        ),
        text(
          "Any limitation of liability is subject to rights that cannot legally be excluded or limited."
        ),
      ],
    },
    {
      heading: "Indemnity",
      blocks: [
        text(
          "To the extent permitted by law, a user who submits content or materially violates these Terms agrees to indemnify HarborMedia.ai from third-party claims arising from that user's unlawful submission, infringement, misrepresentation, or misuse of the service."
        ),
      ],
    },
    {
      heading: "Governing Law",
      blocks: [
        text(
          "These Terms are governed by the laws of the State of New York, without regard to conflict-of-laws principles, except where federal law or another mandatory law applies."
        ),
        text(
          "Subject to any non-waivable consumer rights, disputes not otherwise resolved should be brought in a court of competent jurisdiction in New York."
        ),
      ],
    },
    {
      heading: "Severability and Entire Agreement",
      blocks: [
        text(
          "If a provision is found unenforceable, the remaining provisions remain in effect to the extent allowed by law."
        ),
        text(
          "These Terms, together with incorporated policies and any specific written agreement, form the applicable agreement concerning use of the service."
        ),
      ],
    },
    {
      heading: "Contact",
      blocks: [
        text(`Email: ${CONTACT_EMAIL}`),
        text(`Mailing Address: ${MAILING_ADDRESS}`),
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* 10. Live Camera & Privacy Policy                                           */
/* -------------------------------------------------------------------------- */

export const liveCameraPolicy: LegalDoc = {
  title: "Live Camera & Privacy Policy",
  description:
    "How HarborMedia.ai operates its fixed scenic cameras, including framing, audio, biometrics, and how to raise a privacy or footage concern.",
  lastUpdated: LAST_UPDATED,
  intro: [
    "HarborMedia.ai operates or distributes fixed scenic cameras intended to show waterfronts, weather, landscapes, marine activity, destination conditions, and other public-facing environmental views.",
    "The current Hampton Bays camera is located on the T-Dock at Mariner's Cove Marine, 9 Canoe Place Rd., Hampton Bays, NY 11946.",
  ],
  sections: [
    {
      heading: "Purpose and Camera Framing",
      blocks: [
        text(
          "HarborMedia.ai cameras are intended to document places and conditions, not to conduct personal surveillance. Cameras are positioned and configured to emphasize scenic, environmental, marine, weather, and destination views."
        ),
        text(
          "HarborMedia.ai avoids intentionally aiming into residences, enclosed private spaces, bathrooms, changing areas, or other places where people would reasonably expect heightened privacy."
        ),
        text(
          "Where technically practical, HarborMedia.ai may use camera angle, zoom restrictions, privacy masking, crop zones, delay, or other measures to reduce unnecessary capture of sensitive or private areas."
        ),
      ],
    },
    {
      heading: "Incidental Appearance of People and Property",
      blocks: [
        text(
          "People, vessels, vehicles, homes, businesses, docks, and other property may appear incidentally in a wide scenic view. HarborMedia.ai does not represent that incidental appearance in a scenic feed means a person or business endorses or is affiliated with HarborMedia.ai."
        ),
        text(
          "HarborMedia.ai does not extract an identifiable person's incidental appearance from a scenic feed and use that person's name, portrait, picture, likeness, or voice as advertising or promotional creative without appropriate written consent, particularly in light of New York Civil Rights Law §§ 50 and 51."
        ),
      ],
    },
    {
      heading: "Audio",
      blocks: [
        text(
          "Ambient microphone and audio recording is disabled on HarborMedia.ai's unattended fixed cameras."
        ),
        text(
          "New York law regulates mechanical overhearing or recording of conversations without consent of at least one party. A fixed scenic camera operator normally is not a party to nearby private conversations, so ambient audio is not captured."
        ),
        text(
          "If HarborMedia.ai later enables audio at a camera location, this policy and the applicable on-site notices will be revised before activation."
        ),
      ],
    },
    {
      heading: "Facial Recognition and Biometrics",
      blocks: [
        text(
          "HarborMedia.ai does not use fixed-camera footage for facial recognition, biometric identification, identity matching, or person-specific behavioral advertising."
        ),
      ],
    },
    {
      heading: "Children",
      blocks: [
        text("HarborMedia.ai does not intentionally focus live cameras on children."),
        text(
          "If a camera routinely captures an area primarily used by children or produces repeated close-up images of minors, the camera placement and publication practices are re-evaluated."
        ),
      ],
    },
    {
      heading: "Commercial Use of Camera Footage",
      blocks: [
        text(
          "Scenic camera footage may be monetized, licensed, sponsored, or distributed. Commercial monetization of the overall scenic feed does not mean HarborMedia.ai is authorized to use an identifiable person's likeness as an endorsement or advertisement."
        ),
        text("Separate permissions may be required for person-focused promotional uses."),
      ],
    },
    {
      heading: "Requests Concerning Camera Footage",
      blocks: [
        text(
          `A person with a legitimate privacy, safety, or rights concern may contact HarborMedia.ai at ${CONTACT_EMAIL}. Please include the camera, approximate date and time, URL or screenshot if available, and the nature of the concern.`
        ),
        text(
          "HarborMedia.ai reviews requests involving masking, removal of archived clips, correction, or other action. Live feeds cannot always be retroactively altered after third-party distribution or platform publication."
        ),
      ],
    },
    {
      heading: "Security and Law Enforcement",
      blocks: [
        text(
          "HarborMedia.ai may preserve or disclose footage when reasonably necessary to protect rights or safety, comply with law, respond to valid legal process, or investigate security incidents."
        ),
        text(
          "HarborMedia.ai does not promise continuous recording or historical availability."
        ),
      ],
    },
    {
      heading: "Signage and Property Permission",
      blocks: [
        text(
          "HarborMedia.ai maintains property-owner or operator permission for fixed camera installation and uses reasonable on-site notice identifying the presence and purpose of a live scenic camera."
        ),
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* 11. Corrections Policy                                                     */
/* -------------------------------------------------------------------------- */

export const correctionsPolicy: LegalDoc = {
  title: "Corrections Policy",
  description:
    "What HarborMedia.ai corrects, how corrections are made across platforms, and how to submit a correction request.",
  lastUpdated: LAST_UPDATED,
  intro: [
    "HarborMedia.ai values accuracy, transparency, and trust.",
    "Because content may be generated, enhanced, tagged, summarized, or distributed with automated tools, errors can occur.",
  ],
  sections: [
    {
      heading: "What We Correct",
      blocks: [
        text("HarborMedia.ai may correct:"),
        list([
          "Incorrect location names",
          "Wrong dates or times",
          "Incorrect identification of weather, vessels, wildlife, events, businesses, or landmarks",
          "AI-generated metadata that overstates what is visible",
          "Incorrect captions, transcripts, descriptions, or credits",
          "Material errors in sponsored-content disclosure",
          "Licensing or ownership attribution errors",
        ]),
      ],
    },
    {
      heading: "Correction Process",
      blocks: [
        text("When a material error is confirmed, HarborMedia.ai may:"),
        list([
          "Update the title, description, caption, tags, or page text",
          "Add a correction or clarification",
          "Replace or remove content",
          "Correct the information on platforms HarborMedia.ai controls",
          "Notify a syndication or distribution partner when appropriate",
        ]),
        text(
          "Minor spelling, grammar, formatting, or non-substantive metadata edits may be made without a correction note."
        ),
      ],
    },
    {
      heading: "AI-Generated Errors",
      blocks: [
        text(
          "AI output is not treated as automatically authoritative. If automated analysis conflicts with verified location data, direct source information, or reliable evidence, HarborMedia.ai favors the verified information."
        ),
      ],
    },
    {
      heading: "Submitting a Correction",
      blocks: [
        text(`Email: ${CONTACT_EMAIL}`),
        text("Please include:"),
        list([
          "The URL or content title",
          "The information believed to be incorrect",
          "The proposed correction",
          "Supporting source or evidence, if available",
          "Your contact information",
        ]),
        text(
          "HarborMedia.ai will review good-faith correction requests and determine the appropriate editorial response."
        ),
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* Cookie Policy                                                              */
/* -------------------------------------------------------------------------- */

export const cookiePolicy: LegalDoc = {
  title: "Cookie Policy",
  description:
    "How HarborMedia.ai uses cookies and similar technologies, the types of cookies we set, and how to manage them in your browser.",
  lastUpdated: LAST_UPDATED,
  intro: [
    "HarborMedia.ai uses cookies and similar technologies to improve your browsing experience, understand how visitors use our website, remember preferences, and help us create better content.",
    "This policy supplements the Privacy Policy, which describes how HarborMedia.ai handles personal information more generally.",
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
              "If advertising is enabled, advertising partners may use cookies to deliver relevant advertising and measure campaign effectiveness.",
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
        text(CONTACT_EMAIL),
      ],
    },
  ],
};
