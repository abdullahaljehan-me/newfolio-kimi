import { useEffect } from "react";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Guestbook } from "@/components/portfolio/Guestbook";
import { Hero } from "@/components/portfolio/Hero";
import { Journey } from "@/components/portfolio/Journey";
import { Navbar } from "@/components/portfolio/Navbar";
import { Projects } from "@/components/portfolio/Projects";
import {
  Interests,
  Recognition,
} from "@/components/portfolio/Recognition";
import { Research, Writing } from "@/components/portfolio/Research";
import { Stack } from "@/components/portfolio/Stack";
import { StatusBar } from "@/components/portfolio/StatusBar";
import { useRevealRoot } from "@/hooks/usePortfolio";
import { trpc } from "@/providers/trpc";

export default function Home() {
  const rootRef = useRevealRoot<HTMLDivElement>();
  const track = trpc.portfolio.stats.track.useMutation();

  useEffect(() => {
    track.mutate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={rootRef} className="bg-blueprint min-h-screen">
      <StatusBar />
      <Navbar />
      <main className="pt-[88px]">
        <Hero />
        <About />
        <Stack />
        <Journey />
        <Projects />
        <Research />
        <Writing />
        <Recognition />
        <Interests />
        <Contact />
        <Guestbook />
      </main>
      <Footer />
    </div>
  );
}
