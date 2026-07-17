import { motion } from "framer-motion";
import Greeting from "./Greeting";
import HeroButtons from "./HeroButtons";
import useScrollProgress from "../../hooks/useScrollProgress";

function ProfileCard() {
  const progress = useScrollProgress();

  return (
    <motion.div
      style={{
        y: 280 - progress * 280,
        opacity: 0.5 + progress * 0.5,
        scale: 0.93 + progress * 0.07,
      }}
      className="grid items-center gap-16 lg:grid-cols-2"
    >
      {/* ================= LEFT ================= */}

      <div className="flex flex-col items-center lg:items-start">

        <h1 className="mt-14 text-center text-4xl font-black leading-tight sm:text-5xl md:text-6xl lg:mt-24 lg:text-left lg:text-7xl">
          Building
          <br />
          <span className="text-red-500">
            Smarter Digital
          </span>
          <br />
          Experiences.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-center text-base leading-8 text-slate-400 md:text-lg lg:mx-0 lg:text-left">
          Automation • Zoho • React • APIs • Business Systems •
          Digital Solutions.
        </p>

        <p className="mt-3 text-sm italic text-slate-500">
          Powered by Curiosity &amp; "What If?"
        </p>

        <div className="mt-6 flex justify-center lg:justify-start">
          <Greeting />
        </div>

        <div className="mt-4 flex justify-center lg:justify-start">
          <HeroButtons />
        </div>

      </div>

      {/* ================= RIGHT ================= */}

      <motion.div
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        transition={{
          duration: 0.3,
        }}
        className="relative mt-20 flex justify-center lg:mt-36"
      >
        <div className="w-full max-w-sm rounded-[34px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-2xl md:max-w-md lg:max-w-lg">

          <div className="flex items-center gap-4">

            <img
              src="/profile.jpeg"
              alt="Ian Muema"
              className="h-20 w-20 rounded-2xl object-cover"
            />

            <div>
              <h2 className="text-2xl font-bold">
                Ian Muema
              </h2>

              <p className="text-slate-400">
                Digital Solutions Builder
              </p>
            </div>

          </div>

          <div className="mt-6 space-y-4">

            {[
              ["Zoho Projects", "12+", "text-red-400"],
              ["APIs Built", "3+", "text-blue-400"],
              ["Automation Workflows", "7+", "text-green-400"],
              ["Current Focus", "Zoho + Deluge", "text-yellow-400"],
            ].map(([title, value, color]) => (
              <div
                key={title}
                className="flex items-center justify-between rounded-2xl bg-white/5 p-4 transition duration-300 hover:bg-white/10"
              >
                <span>{title}</span>

                <strong className={color}>
                  {value}
                </strong>
              </div>
            ))}

          </div>

          <div className="mt-8 flex items-center justify-between rounded-2xl border border-green-500/20 bg-green-500/10 p-4">

            <span>Status</span>

            <div className="flex items-center gap-2">

              <div className="h-3 w-3 animate-pulse rounded-full bg-green-400"></div>

              <span className="text-green-300">
                Available
              </span>

            </div>

          </div>

        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProfileCard;