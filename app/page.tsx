import Navigation from "@/app/components/Navigation";
import Hero from "@/app/components/Hero";
import Approach from "@/app/components/Approach";
import ClientPaths from "@/app/components/ClientPaths";
import WhyRevival from "@/app/components/WhyRevival";
import NeighborhoodsTeaser from "@/app/components/NeighborhoodsTeaser";
import FutureListings from "@/app/components/FutureListings";
import InsightsTeaser from "@/app/components/InsightsTeaser";
import CTASection from "@/app/components/CTASection";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Approach />
      <ClientPaths />
      <WhyRevival />
      <NeighborhoodsTeaser />
      <FutureListings />
      <InsightsTeaser />
      <CTASection
        eyebrow="Get Started"
        title="Begin with"
        accent="a private consultation."
        body="Tell us about your goals in San Diego — buying, selling, investing, or building — and we'll take it from there."
        primary={{ label: "Work With Us", href: "/contact" }}
      />
      <Footer />
    </>
  );
}
