import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import WorkspaceMenu from "./WorkspaceMenu";
import ThemeToggle from "../theme/ThemeToggle";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 z-[100] w-full">
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={`mx-auto mt-5 flex w-[92%] max-w-6xl items-center justify-between rounded-2xl px-8 py-4 transition-all duration-500 ${
            scrolled
              ? "border border-white/10 bg-slate-900/70 shadow-2xl backdrop-blur-2xl"
              : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <h1 className="text-2xl font-bold tracking-wide">
            <span className="text-red-500">IM</span> Workspace
          </h1>

          {/* Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl p-3 text-2xl transition-all duration-300 hover:bg-white/10 hover:text-red-500"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </motion.nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <WorkspaceMenu
            onClose={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;