import { FaArrowRight, FaDownload } from "react-icons/fa";

function HeroButtons() {
  return (
    <div className="mt-4 flex flex-wrap gap-5">

      <button className="group flex items-center gap-3 rounded-full bg-red-500 px-8 py-4 font-semibold shadow-lg shadow-red-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-red-600">

        Explore Workspace

        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />

      </button>

      <button className="group flex items-center gap-3 rounded-full border border-red/10 bg-red/5 px-8 py-4 font-semibold backdrop-blur-xl transition-all duration-300 hover:border-red-500 hover:bg-white/10:tranlate-x-2">

        <FaDownload />

        Download CV

      </button>

    </div>
  );
}

export default HeroButtons;