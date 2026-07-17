import { motion } from "framer-motion";

function StatCard({ number, title, subtitle }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      whileHover={{
        y: -10,
        scale: 1.04,
      }}
      transition={{
        duration: 0.45,
      }}
      className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300"
    >
      <h2 className="text-5xl font-black text-red-500 transition duration-300 group-hover:scale-110">
        {number}
      </h2>

      <h3 className="mt-4 text-2xl font-semibold transition duration-300 group-hover:text-red-400">
        {title}
      </h3>

      <p className="mt-2 leading-7 text-slate-400">
        {subtitle}
      </p>
    </motion.div>
  );
}

export default StatCard;