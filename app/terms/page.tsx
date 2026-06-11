import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/app/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use | Revival Group Realty",
  description:
    "The terms that govern your access to and use of the Revival Group Realty website.",
  openGraph: {
    title: "Terms of Use | Revival Group Realty",
    description: "The terms that govern your use of the Revival Group Realty website.",
    url: "https://revivalgrouprealty.com/terms",
    siteName: "Revival Group Realty",
    locale: "en_US",
    type: "website",
  },
};

// TODO(legal): This is a general template. Have it reviewed and customized by a
// qualified attorney before relying on it, and confirm the "Last Updated" date.
const UPDATED = "June 2026";

const INTRO: React.ReactNode[] = [
  <>
    These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and use of{" "}
    revivalgrouprealty.com (the &ldquo;Site&rdquo;), operated by Revival Group
    Realty, a licensed California real estate broker (CA DRE #02222010). By
    accessing or using the Site, you agree to these Terms. If you do not agree,
    please do not use the Site.
  </>,
];

const SECTIONS: LegalSection[] = [
  {
    heading: "Informational Purposes Only",
    body: [
      <>
        The content on this Site is provided for general informational purposes
        only. It is not legal, tax, financial, investment, accounting,
        engineering, or other professional advice, and should not be relied upon
        as such. You should consult qualified professionals regarding your
        specific circumstances.
      </>,
    ],
  },
  {
    heading: "No Agency Relationship",
    body: [
      <>
        Using the Site or submitting an inquiry does not create a real estate
        agency, brokerage, fiduciary, or other professional relationship between
        you and Revival Group Realty. Any such relationship is established only
        through a separate, signed written agreement.
      </>,
    ],
  },
  {
    heading: "Property & Market Information",
    body: [
      <>
        Any property, neighborhood, or market information on the Site is provided
        for general reference, is subject to change, and is deemed reliable but
        not guaranteed. The Site does not currently display live MLS listings;
        if and when listing data is added, applicable MLS/IDX terms and
        disclaimers will govern that content.
      </>,
    ],
  },
  {
    heading: "Fair Housing",
    body: [
      <>
        Revival Group Realty supports and complies with the federal Fair Housing
        Act and all applicable fair housing laws. We do not discriminate on the
        basis of race, color, religion, sex, disability, familial status,
        national origin, or any other characteristic protected by law. Equal
        Housing Opportunity.
      </>,
    ],
  },
  {
    heading: "Intellectual Property",
    body: [
      <>
        Unless otherwise noted, the Site and its content — including text, design,
        graphics, photography, and logos — are owned by or licensed to Revival
        Group Realty and are protected by applicable intellectual property laws.
        You may not copy, reproduce, distribute, or create derivative works from
        Site content without our prior written permission.
      </>,
    ],
  },
  {
    heading: "Your Submissions",
    body: [
      <>
        You are responsible for the accuracy of information you submit through the
        Site. By submitting an inquiry, you consent to be contacted by Revival
        Group Realty regarding your request. Please do not submit confidential or
        sensitive information you do not wish to share.
      </>,
    ],
  },
  {
    heading: "Third-Party Links & Services",
    body: [
      <>
        The Site may link to or rely on third-party websites and services that we
        do not control. We are not responsible for their content, availability,
        or practices, and your use of them is at your own risk and subject to
        their terms.
      </>,
    ],
  },
  {
    heading: "Disclaimer of Warranties",
    body: [
      <>
        The Site is provided on an &ldquo;as is&rdquo; and &ldquo;as
        available&rdquo; basis, without warranties of any kind, whether express or
        implied, including warranties of merchantability, fitness for a particular
        purpose, accuracy, and non-infringement. We do not warrant that the Site
        will be uninterrupted, error-free, or secure.
      </>,
    ],
  },
  {
    heading: "Limitation of Liability",
    body: [
      <>
        To the fullest extent permitted by law, Revival Group Realty and its
        principals, members, and agents will not be liable for any indirect,
        incidental, consequential, special, or punitive damages arising out of or
        relating to your use of, or inability to use, the Site.
      </>,
    ],
  },
  {
    heading: "Governing Law",
    body: [
      <>
        These Terms are governed by the laws of the State of California, without
        regard to its conflict-of-laws principles. Any dispute relating to the
        Site will be subject to the exclusive jurisdiction of the state and
        federal courts located in San Diego County, California.
      </>,
    ],
  },
  {
    heading: "Changes to These Terms",
    body: [
      <>
        We may update these Terms from time to time. Changes are effective when
        posted, and the &ldquo;Last Updated&rdquo; date above reflects the most
        recent revision. Your continued use of the Site after changes are posted
        means you accept the updated Terms.
      </>,
    ],
  },
  {
    heading: "Contact",
    body: [
      <>
        Questions about these Terms? Contact Revival Group Realty at{" "}
        <a
          href="mailto:kevinvartan@revivalgrouprealty.com"
          className="text-forest underline underline-offset-2 hover:text-sage transition-colors"
        >
          kevinvartan@revivalgrouprealty.com
        </a>{" "}
        or{" "}
        <a
          href="tel:+13107792038"
          className="text-forest underline underline-offset-2 hover:text-sage transition-colors"
        >
          310-779-2038
        </a>
        . Revival Group Realty, San Diego, California · CA DRE #02222010.
      </>,
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Compliance"
      title="Terms"
      accent="of Use."
      updated={UPDATED}
      intro={INTRO}
      sections={SECTIONS}
    />
  );
}
