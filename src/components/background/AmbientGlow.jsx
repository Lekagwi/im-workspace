import { motion } from "framer-motion";

function AmbientGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* Red */}
      <motion.div
        animate={{
          x: [-80, 80, -80],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-red-500/25 blur-[140px]"
      />

      {/* Blue */}
      <motion.div
        animate={{
          x: [80, -60, 80],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-150px] top-[120px] h-[380px] w-[380px] rounded-full bg-blue-500/20 blur-[140px]"
      />

      {/* Green */}
      <motion.div
        animate={{
          x: [-40, 70, -40],
          y: [40, -60, 40],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-140px] left-[18%] h-[350px] w-[350px] rounded-full bg-green-500/20 blur-[140px]"
      />

      {/* Yellow */}
      <motion.div
        animate={{
          x: [0, -90, 0],
          y: [-30, 40, -30],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-120px] right-[15%] h-[320px] w-[320px] rounded-full bg-yellow-400/20 blur-[140px]"
      />

    </div>
  );
}

export default AmbientGlow;