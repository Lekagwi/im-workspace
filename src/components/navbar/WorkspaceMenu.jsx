import { motion } from "framer-motion";
import {
  FaUser,
  FaLaptopCode,
  FaBriefcase,
  FaRoute,
  FaEnvelope,
} from "react-icons/fa";

const menuItems = [
  { icon: <FaUser />, label: "About", href: "#about" },
  { icon: <FaLaptopCode />, label: "Zoho Workspace", href: "#zoho" },
  { icon: <FaBriefcase />, label: "Projects", href: "#projects" },
  { icon: <FaRoute />, label: "Journey", href: "#journey" },
  { icon: <FaEnvelope />, label: "Contact", href: "#contact" },
];

function WorkspaceMenu({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.35 }}
      className="fixed left-0 top-24 z-[90] w-full"
    >
      <div className="mx-auto w-[95%] max-w-7xl rounded-3xl border border-white/10 bg-slate-900/80 p-8 backdrop-blur-3xl shadow-2xl">

        <div className="grid gap-4 md:grid-cols-2">

          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="group flex items-center justify-between rounded-2xl border border-transparent bg-white/5 p-5 transition-all duration-300 hover:border-red-500/40 hover:bg-white/10"
            >
              <div className="flex items-center gap-4">
                <span className="text-xl text-red-400">
                  {item.icon}
                </span>

                <span className="text-lg">
                  {item.label}
                </span>
              </div>

              <span className="translate-x-0 text-slate-500 transition group-hover:translate-x-2 group-hover:text-red-400">
                →
              </span>
            </a>
          ))}

        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Powered by Curiosity &amp; "What If?"
        </p>

      </div>
    </motion.div>
  );
}

export default WorkspaceMenu;