import { motion } from "framer-motion";
import useScrollProgress from "../../hooks/useScrollProgress";

function ProfileImage() {
  const progress = useScrollProgress();

  const size = 520 - progress * 420;
  const radius = progress * 999;

  return (
    <motion.div
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        y: -80 - progress * 180,
        scale: 1 - progress * 0.08,
        opacity: 1,
      }}
      className="absolute left-1/2 top-0 z-30 -translate-x-1/2 overflow-hidden border border-white/10 shadow-[0_0_120px_rgba(255,255,255,0.12)]"
    >
      <img
        src="/profile.jpeg"
        alt="Ian Muema"
        className="h-full w-full object-cover object-top"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
    </motion.div>
  );
}

export default ProfileImage;