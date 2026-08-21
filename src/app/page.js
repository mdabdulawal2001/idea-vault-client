import CallToAction from "@/components/home/CallToAction";
import HeroBanner from "@/components/home/HeroBanner";
import HowItWorks from "@/components/home/HowItWorks";
import TrendingIdeas from "@/components/home/TrendingIdeas";
import WhyIdeaVault from "@/components/home/WhyIdeaVault";
import Image from "next/image";

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
