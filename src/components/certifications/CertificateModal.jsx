import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaEye, FaDownload, FaShieldAlt } from "react-icons/fa";

function CertificateModal({ certificate, open, onClose }) {
  if (!certificate) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-6 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-2xl rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="uppercase tracking-[0.3em] text-red-500 text-sm">
                  Workspace Credential
                </p>

                <h2 className="mt-2 text-3xl font-black">
                  {certificate.title}
                </h2>

                <p className="mt-2 text-slate-400">
                  Issued by {certificate.issuer}
                </p>
              </div>

              <button
                onClick={onClose}
                className="rounded-xl bg-white/5 p-3 transition hover:bg-red-500"
              >
                <FaTimes />
              </button>
            </div>

            <div className="mt-10 rounded-2xl border border-green-500/20 bg-green-500/10 p-6">
              <div className="flex items-center gap-3">
                <FaShieldAlt className="text-green-400 text-xl" />

                <div>
                  <h3 className="font-bold text-green-300">
                    Verified Credential
                  </h3>

                  <p className="text-sm text-green-200">
                    Verification Code
                  </p>

                  <p className="mt-1 font-mono text-lg">
                    {certificate.code}
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-8 leading-8 text-slate-300">
              {certificate.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={certificate.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl bg-red-500 px-6 py-3 font-semibold transition hover:bg-red-600"
              >
                <FaEye />
                Preview PDF
              </a>

              <a
                href={certificate.pdf}
                download
                className="flex items-center gap-3 rounded-xl border border-white/10 px-6 py-3 transition hover:bg-white/10"
              >
                <FaDownload />
                Download
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CertificateModal;