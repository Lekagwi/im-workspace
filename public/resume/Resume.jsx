import { FaFilePdf, FaEye, FaDownload } from "react-icons/fa";

function Resume() {
  return (
    <section
      id="resume"
      className="bg-slate-950 px-8 py-28"
    >
      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.35em] text-red-500">
            WORKSPACE FILE
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Resume
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            A detailed overview of my professional experience,
            technical skills, Zoho ecosystem knowledge and
            software development journey.
          </p>

        </div>

        <div className="mx-auto mt-20 max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            <div className="flex items-center gap-6">

              <div className="rounded-2xl bg-red-500/20 p-5">
                <FaFilePdf className="text-5xl text-red-500" />
              </div>

              <div>

                <h3 className="text-2xl font-bold text-white">
                  Ian_Muema_CV.pdf
                </h3>

                <p className="mt-2 text-slate-400">
                  Resume • Updated July 2026
                </p>

              </div>

            </div>

            <div className="flex gap-4">

              <a
                href="/resume/Ian_Muema_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600"
              >
                <FaEye />
                Preview
              </a>

              <a
                href="/resume/Ian_Muema_CV.pdf"
                download
                className="flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-white transition hover:bg-white/10"
              >
                <FaDownload />
                Download
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Resume;