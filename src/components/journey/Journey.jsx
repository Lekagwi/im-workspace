import {
  FaGraduationCap,
  FaBriefcase,
  FaRobot,
  FaUsers,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";

function Journey() {
  const journey = [
    {
      icon: <FaGraduationCap className="text-3xl text-blue-400" />,
      title: "ICT Foundation",
      badge: "Education",
      description:
        "Began my journey in Information Communication Technology, building a foundation in programming, networking and problem solving.",
    },
    {
      icon: <FaBriefcase className="text-3xl text-red-500" />,
      title: "Joined IKA360",
      badge: "Internship",
      description:
        "Started gaining practical experience by working with business systems and the Zoho ecosystem in real business environments.",
    },
    {
      icon: <FaRobot className="text-3xl text-green-400" />,
      title: "Customer Engagement Solutions",
      badge: "Zoho SalesIQ",
      description:
        "Built the Paragon Perfumes chatbot and developed the IG Sacco FAQ Bot to improve customer engagement through automation.",
    },
    {
      icon: <FaUsers className="text-3xl text-yellow-400" />,
      title: "Professional Growth",
      badge: "Workshops",
      description:
        "Expanded my knowledge by participating in the Zoho MEA Partner Technical Workshop and the Zoho Marketing Launchpad.",
    },
    {
      icon: <FaRocket className="text-3xl text-red-400" />,
      title: "Next Destination",
      badge: "Future",
      description:
        "Continuing to grow in business systems, automation and modern software development while creating digital solutions that solve real-world problems.",
    },
  ];

  return (
    <section
      id="journey"
      className="bg-slate-950 px-8 py-28"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.35em] text-red-500">
            MY JOURNEY
          </p>

          <h2 className="mt-6 text-5xl font-black">
            Every Step Built The Next.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            My journey has been driven by curiosity, continuous learning and
            practical experience. Every milestone has helped shape my passion
            for building business systems and digital solutions.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Vertical Line */}

          <div className="absolute left-7 top-0 h-full w-[2px] bg-gradient-to-b from-red-500 via-red-400 to-transparent"></div>

          <div className="space-y-16">

            {journey.map((item) => (

              <div
                key={item.title}
                className="relative flex gap-8"
              >

                {/* Icon */}

                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-red-500/30 bg-slate-900 shadow-lg">
                  {item.icon}
                </div>

                {/* Card */}

                <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-red-500/40 hover:bg-white/10">

                  <span className="rounded-full bg-red-500/10 px-4 py-2 text-sm text-red-400">
                    {item.badge}
                  </span>

                  <h3 className="mt-5 text-3xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-400">
                    {item.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Ending */}

        <div className="mt-24 rounded-3xl border border-red-500/20 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10 p-12 text-center">

          <h3 className="text-4xl font-black">
            Powered by Curiosity and "What If?"
          </h3>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-slate-400">
            Every project, every challenge and every new technology is another
            opportunity to learn, improve and create meaningful digital
            experiences.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Journey;