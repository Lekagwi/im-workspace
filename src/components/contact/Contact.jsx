import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 px-8 py-28"
    >
      <div className="mx-auto max-w-6xl">

        <div className="rounded-[40px] border border-white/10 bg-white/5 p-12 backdrop-blur-2xl">

          {/* Heading */}

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[0.35em] text-red-500">
              MISSION BRIEF
            </p>

            <h2 className="mt-6 text-5xl font-black">
              Ready To Build Something Smarter?
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              Whether it's business systems, customer engagement,
              automation or modern web experiences,
              I'm always excited to collaborate,
              learn and create meaningful digital solutions.
            </p>

          </div>

          {/* Contact Cards */}

          <div className="mt-20 grid gap-8 md:grid-cols-2">

            <a
              href="mailto:ianmuema00@gmail.com"
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-red-500/40 hover:bg-white/10"
            >
              <FaEnvelope className="text-4xl text-red-500" />

              <h3 className="mt-6 text-2xl font-bold">
                Email
              </h3>

              <p className="mt-4 text-slate-400">
                Let's start a conversation.
              </p>

            </a>

            <a
              href="https://www.linkedin.com/in/ian-muema-09962940b/"
              target="_blank"
              rel="noreferrer"
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-white/10"
            >
              <FaLinkedin className="text-4xl text-blue-500" />

              <h3 className="mt-6 text-2xl font-bold">
                LinkedIn
              </h3>

              <p className="mt-4 text-slate-400">
                Let's connect professionally.
              </p>

            </a>

            <a
              href="https://github.com/Lekagwi"
              target="_blank"
              rel="noreferrer"
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-white/40 hover:bg-white/10"
            >
              <FaGithub className="text-4xl" />

              <h3 className="mt-6 text-2xl font-bold">
                GitHub
              </h3>

              <p className="mt-4 text-slate-400">
                Explore my projects and code.
              </p>

            </a>

            <a
              href="/Ian_Muema_CV.pdf"
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-green-500/40 hover:bg-white/10"
            >
              <FaDownload className="text-4xl text-green-500" />

              <h3 className="mt-6 text-2xl font-bold">
                Download CV
              </h3>

              <p className="mt-4 text-slate-400">
                View my experience and journey.
              </p>

            </a>

          </div>

          {/* Status */}

          <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-green-500/20 bg-green-500/10 p-8 md:flex-row">

            <div>

              <h3 className="text-2xl font-bold">
                Workspace Status
              </h3>

              <p className="mt-2 text-slate-400">
                Available for internships, graduate opportunities,
                collaborations and exciting projects.
              </p>

            </div>

            <div className="flex items-center gap-3 rounded-full bg-black/30 px-6 py-3">

              <span className="h-3 w-3 animate-pulse rounded-full bg-green-400"></span>

              <span className="font-semibold text-green-400">
                ONLINE
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;