import { motion } from "framer-motion";
import useScrollProgress from "../../hooks/useScrollProgress";

function HeroBackground() {
  const progress = useScrollProgress();

  return (
    <motion.div
      style={{
        scale: 1 - progress * 0.12,
        y: -progress * 120,
        opacity: 1 - progress * 0.35,
      }}
      className="absolute inset-0 z-10 flex items-start justify-center pt-10"
    >
      <div className="relative">

        <img
          src="/profile.jpeg"
          alt="Ian Muema"
          className="h-auto max-h-[70vh] w-auto max-w-full object-contain"
        />

        {/* Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>

      </div>
    </motion.div>
  );
}

export default HeroBackground;