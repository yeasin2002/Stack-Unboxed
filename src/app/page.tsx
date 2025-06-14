import {
  AboutMaintainer,
  Contributors,
  Footer,
  FrequentlyAskedQuestions,
  Hero,
  Navbar,
  UserReview
} from '@/components/Homepage';

// import { ScatteredDotsBg } from '@/components/shared';
import { Particles } from '@/components/shared/particles';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <UserReview />
      <div className="relative">
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color={`#ffffff`}
          refresh
        />
        {/* <ScatteredDotsBg /> */}
        <FrequentlyAskedQuestions />
        <AboutMaintainer />
        <Contributors />
      </div>
      <Footer />
    </main>
  );
}
