import { createFileRoute } from "@tanstack/react-router";
import { Hero, Nav } from "@/components/site/Hero";
import { Proof } from "@/components/site/Proof";
import { Ugc, ViralWork } from "@/components/site/Work";
import { Process } from "@/components/site/Process";
import { Organic } from "@/components/site/Organic";
import { AdCreatives, AdResults } from "@/components/site/Ads";
import { FinalCta, Footer, Services, Testimonials } from "@/components/site/Closing";

const title = "IT-TrendCo — Social Media Marketing Agency";
const description =
  "IT-TrendCo creates, manages and scales your social media: content production, organic growth, community management and performance advertising.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <Nav />
      <main>
        <Hero />
        <Proof />
        <ViralWork />
        <Ugc />
        <Process />
        <Organic />
        <AdCreatives />
        <AdResults />
        <Services />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
