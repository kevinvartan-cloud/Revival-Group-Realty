import type { Metadata } from "next";
import Navigation from "@/app/components/Navigation";
import SectionHeader from "@/app/components/SectionHeader";
import ContactForm from "@/app/components/ContactForm";
import DisclaimerBlock from "@/app/components/DisclaimerBlock";
import Footer from "@/app/components/Footer";
import { GRAIN } from "@/app/lib/grain";

export const metadata: Metadata = {
  title: "Work With Us | Revival Group Realty",
  description:
    "Begin a private consultation with Revival Group Realty — strategic real estate representation for buyers, sellers, investors, and development-minded clients across San Diego.",
  openGraph: {
    title: "Work With Us | Revival Group Realty",
    description: "Begin a private consultation with Revival Group Realty in San Diego.",
    url: "https://revivalgrouprealty.com/contact",
    siteName: "Revival Group Realty",
    locale: "en_US",
    type: "website",
  },
};

const AREAS = [
  "Uptown San Diego",
  "Central San Diego",
  "Coastal San Diego",
  "Coastal North County",
];

export default function ContactPage() {
  return (
    <>
      <Navigation />

      {/* Hero + form together on forest, so the dark form sits on a dark field */}
      <section className="relative bg-forest px-8 pt-40 pb-20 lg:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: GRAIN, backgroundRepeat: "repeat", backgroundSize: "128px 128px" }}
        />
        <div className="relative mx-auto max-w-7xl">
          {/* Heading */}
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-cream/20" />
              <span className="font-sans text-[9px] tracking-[0.5em] uppercase text-gold/60">
                Private Consultation
              </span>
            </div>
            <h1 className="font-serif text-cream text-[clamp(3rem,7vw,6rem)] leading-[0.95] tracking-[-0.02em] mb-8">
              Work<br />
              <span className="italic text-gold">With Us.</span>
            </h1>
            <p className="font-sans text-cream/45 text-base leading-relaxed max-w-xl">
              Strategic representation for buying, selling, investing, and
              development-minded real estate decisions across San Diego. Tell us
              a little about your goals and we&rsquo;ll reach out to arrange a
              private consultation.
            </p>
          </div>

          {/* Two columns: details + form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left — details */}
            <div className="lg:col-span-4">
              <SectionHeader label="Areas Served" tone="dark" className="mb-6" />
              <ul className="space-y-2.5 mb-12">
                {AREAS.map((a) => (
                  <li key={a} className="font-serif text-cream text-lg">{a}</li>
                ))}
              </ul>

              <SectionHeader label="Direct" tone="dark" className="mb-6" />
              <div className="space-y-4">
                <div>
                  <div className="font-sans text-[8px] tracking-[0.4em] uppercase text-cream/30 mb-1.5">
                    Email
                  </div>
                  <a
                    href="mailto:kevinvartan@revivalgrouprealty.com"
                    className="font-serif text-cream text-lg hover:text-gold transition-colors duration-200 break-all"
                  >
                    kevinvartan@revivalgrouprealty.com
                  </a>
                </div>
                <div>
                  <div className="font-sans text-[8px] tracking-[0.4em] uppercase text-cream/30 mb-1.5">
                    Phone
                  </div>
                  <a
                    href="tel:+13107792038"
                    className="font-serif text-cream text-lg hover:text-gold transition-colors duration-200"
                  >
                    310-779-2038
                  </a>
                </div>
                <div>
                  <div className="font-sans text-[8px] tracking-[0.4em] uppercase text-cream/30 mb-1.5">
                    License
                  </div>
                  <span className="font-serif text-cream text-lg">CA DRE #02222010</span>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-8 lg:pt-2">
              <ContactForm />
              <DisclaimerBlock tone="dark" className="mt-10">
                By submitting this form you consent to be contacted by Revival Group Realty
                regarding your inquiry. Revival Group Realty is a licensed California real estate
                broker (CA DRE #02222010). This form does not create an agency relationship, and the
                information provided is not legal, tax, or financial advice. Equal Housing
                Opportunity.
              </DisclaimerBlock>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
