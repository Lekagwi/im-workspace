import { motion } from "framer-motion";
import { FaAward, FaArrowRight } from "react-icons/fa";

function CertificateCard({ certificate, onOpen }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      <div className="flex items-center gap-4">

        <div className="rounded-2xl bg-red-500/15 p-4">
          <FaAward className="text-3xl text-red-500" />
        </div>

        <div>
          <h3 className="text-2xl font-bold">
            {certificate.title}
          </h3>

          <p className="text-slate-400">
            {certificate.issuer}
          </p>
        </div>

      </div>

      <p className="mt-8 leading-7 text-slate-400">
        {certificate.description}
      </p>

      <div className="mt-8 flex items-center justify-between">

        <span className="rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-400">
          ✓ Verified
        </span>

        <button
          onClick={() => onOpen(certificate)}
          className="flex items-center gap-2 rounded-xl bg-red-500 px-5 py-3 font-semibold transition hover:bg-red-600"
        >
          View Credential

          <FaArrowRight />
        </button>

      </div>

    </motion.div>
  );
}

export default CertificateCard;