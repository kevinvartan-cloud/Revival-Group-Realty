import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/app/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Revival Group Realty",
  description:
    "How Revival Group Realty collects, uses, and protects information on revivalgrouprealty.com.",
  openGraph: {
    title: "Privacy Policy | Revival Group Realty",
    description: "How Revival Group Realty collects, uses, and protects your information.",
    url: "https://revivalgrouprealty.com/privacy",
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
    This Privacy Policy explains how Revival Group Realty (&ldquo;Revival Group
    Realty,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
    collects, uses, and discloses information when you visit{" "}
    revivalgrouprealty.com (the &ldquo;Site&rdquo;) or contact us. By using the
    Site, you agree to the practices described in this Policy.
  </>,
];

const SECTIONS: LegalSection[] = [
  {
    heading: "Information We Collect",
    body: [
      <>
        <strong className="text-forest font-normal">Information you provide.</strong>{" "}
        When you submit our contact form or otherwise reach out, we collect the
        information you choose to share — typically your name, email address,
        phone number, the type of service you&rsquo;re interested in, and the
        contents of your message.
      </>,
      <>
        <strong className="text-forest font-normal">Information collected automatically.</strong>{" "}
        Like most websites, we may automatically collect limited technical
        information such as your IP address, browser and device type, and pages
        viewed, including through cookies and similar technologies used by the
        Site and its hosting and analytics providers.
      </>,
    ],
  },
  {
    heading: "How We Use Your Information",
    body: [
      <>
        We use the information you provide to respond to your inquiries, provide
        the real estate brokerage and advisory services you request, communicate
        with you about your goals, operate and improve the Site, and comply with
        our legal obligations and protect our rights.
      </>,
    ],
  },
  {
    heading: "How We Share Your Information",
    body: [
      <>
        We do not sell your personal information. We may share information with
        trusted service providers who help us operate the Site and respond to
        inquiries (for example, our form-handling and website hosting providers),
        and when required by law, legal process, or to protect the rights,
        property, or safety of Revival Group Realty, our clients, or others.
      </>,
    ],
  },
  {
    heading: "Cookies & Analytics",
    body: [
      <>
        The Site may use cookies and similar technologies for basic functionality
        and analytics. You can usually control cookies through your browser
        settings; disabling them may affect some features of the Site.
      </>,
    ],
  },
  {
    heading: "Data Retention",
    body: [
      <>
        We retain personal information for as long as needed to respond to your
        inquiry, provide services, and meet legal, accounting, or recordkeeping
        requirements, after which we take reasonable steps to delete or
        de-identify it.
      </>,
    ],
  },
  {
    heading: "Data Security",
    body: [
      <>
        We take reasonable measures to protect the information we collect.
        However, no method of transmission over the internet or method of
        electronic storage is completely secure, and we cannot guarantee absolute
        security.
      </>,
    ],
  },
  {
    heading: "Your California Privacy Rights",
    body: [
      <>
        If you are a California resident, the California Consumer Privacy Act, as
        amended (CCPA/CPRA), may give you rights to know what personal information
        we collect, to request access to or deletion of your information, to
        correct inaccurate information, and to not be discriminated against for
        exercising these rights. We do not &ldquo;sell&rdquo; or &ldquo;share&rdquo;
        personal information as those terms are defined under California law. To
        make a request, contact us using the details below.
      </>,
    ],
  },
  {
    heading: "Third-Party Links",
    body: [
      <>
        The Site may link to third-party websites and services that we do not
        control. This Policy does not apply to those sites, and we encourage you
        to review their privacy policies before providing any information.
      </>,
    ],
  },
  {
    heading: "Children's Privacy",
    body: [
      <>
        The Site is intended for adults and is not directed to children under 16.
        We do not knowingly collect personal information from children. If you
        believe a child has provided us information, please contact us so we can
        remove it.
      </>,
    ],
  },
  {
    heading: "Changes to This Policy",
    body: [
      <>
        We may update this Privacy Policy from time to time. Changes are effective
        when posted, and the &ldquo;Last Updated&rdquo; date above reflects the
        most recent revision.
      </>,
    ],
  },
  {
    heading: "Contact Us",
    body: [
      <>
        If you have questions about this Privacy Policy or how we handle your
        information, contact Revival Group Realty at{" "}
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

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Compliance"
      title="Privacy"
      accent="Policy."
      updated={UPDATED}
      intro={INTRO}
      sections={SECTIONS}
    />
  );
}
