import AmbientGlow from "../background/AmbientGlow";
import HeroBackground from "./HeroBackground";
import ProfileCard from "./ProfileCard";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-slate-950"
    >
      {/* Background Glow */}
      <AmbientGlow />

      {/* Portrait */}
      <HeroBackground />

      {/* Hero Content */}
      <div className="relative z-20 flex min-h-screen items-end justify-center px-6 pb-16">

        <div className="w-full max-w-7xl">
          <ProfileCard />
        </div>

      </div>
    </section>
  );
}

export default Hero;