import Greeting from "./Greeting";
import HeroButtons from "./HeroButtons";

function HeroContent() {
  return (
    <div className="flex flex-col justify-center">

      <Greeting />

      <h1 className="mt-2 text-5xl font-black leading-tight md:text-7xl">
        Building
        <br />
        <span className="text-red-500">
          Smarter Digital
        </span>
        <br />
        Experiences.
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
        I build business systems, automation workflows,
        modern web applications and digital solutions that
        solve real-world problems.
      </p>

      <div className="mt-8 inline-flex w-fit items-center gap-3 rounded-full border border-green-500/30 bg-green-500/10 px-5 py-3">

        <div className="h-3 w-3 rounded-full bg-green-400"></div>

        <span className="text-green-300">
          Available for Opportunities
        </span>

      </div>

      <HeroButtons />

    </div>
  );
}

export default HeroContent;