import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="relative flex h-12 w-24 items-center rounded-full border border-white/15 bg-white/10 p-1 backdrop-blur-xl transition-all duration-300 hover:border-red-500/40"
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 35,
        }}
        className="absolute h-10 w-10 rounded-full bg-white/20 backdrop-blur-xl"
        animate={{
          x: darkMode ? 0 : 48,
        }}
      />

      <div className="z-10 flex w-full justify-between px-2">
        <FaMoon
          className={`transition ${
            darkMode
              ? "text-white"
              : "text-slate-500"
          }`}
        />

        <FaSun
          className={`transition ${
            darkMode
              ? "text-slate-500"
              : "text-yellow-400"
          }`}
        />
      </div>
    </button>
  );
}

export default ThemeToggle;