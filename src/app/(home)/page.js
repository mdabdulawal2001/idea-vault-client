import CallToAction from "@/components/home/CallToAction";
import HeroBanner from "@/components/home/HeroBanner";
import HowItWorks from "@/components/home/HowItWorks";
import TrendingIdeas from "@/components/home/TrendingIdeas";
import WhyIdeaVault from "@/components/home/WhyIdeaVault";
import Image from "next/image";

export const metadata = {
  title: "Home | Share, Discover & Innovate",
  description:
    "IdeaVault is a platform to share creative ideas, discover innovative concepts, and connect with people who turn ideas into possibilities.",
  keywords: [
    "IdeaVault",
    "idea sharing platform",
    "share ideas",
    "discover ideas",
    "creative ideas",
    "innovation",
  ],
  openGraph: {
    title: "IdeaVault | Share, Discover & Innovate",
    description:
      "Share your ideas, discover innovative concepts, and inspire others with IdeaVault.",
    type: "website",
    siteName: "IdeaVault",
  },
};

export default function Home() {
  return (
    <div>
      <main>
        {/* Hero Banner */}
        <HeroBanner />
        <TrendingIdeas />
        <HowItWorks />
        <WhyIdeaVault />
        <CallToAction />
      </main>
    </div>
  );
}
