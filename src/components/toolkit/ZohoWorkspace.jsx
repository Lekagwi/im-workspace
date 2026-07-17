import {
    FaReact,
    FaPython,
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaGitAlt,
  } from "react-icons/fa";
  
  import { SiZoho, SiTailwindcss } from "react-icons/si";
  
  function Toolkit() {
    const tools = [
      {
        icon: <SiZoho className="text-5xl text-red-500" />,
        name: "Zoho",
        description: "CRM • SalesIQ • Books • Desk • Creator",
      },
      {
        icon: <FaReact className="text-5xl text-cyan-400" />,
        name: "React",
        description: "Modern Frontend Development",
      },
      {
        icon: <FaPython className="text-5xl text-yellow-400" />,
        name: "Python",
        description: "Automation & APIs",
      },
      {
        icon: <FaJsSquare className="text-5xl text-yellow-300" />,
        name: "JavaScript",
        description: "Interactive Applications",
      },
      {
        icon: <FaHtml5 className="text-5xl text-orange-500" />,
        name: "HTML5",
        description: "Semantic Structure",
      },
      {
        icon: <FaCss3Alt className="text-5xl text-blue-500" />,
        name: "CSS3",
        description: "Responsive Interfaces",
      },
      {
        icon: <SiTailwindcss className="text-5xl text-sky-400" />,
        name: "Tailwind CSS",
        description: "Modern Styling",
      },
      {
        icon: <FaGitAlt className="text-5xl text-orange-600" />,
        name: "Git",
        description: "Version Control",
      },
    ];
  
    return (
      <section className="bg-slate-950 px-8 py-28">
  
        <div className="mx-auto max-w-7xl">
  
          <div className="mb-16 text-center">
  
            <p className="font-semibold uppercase tracking-[0.3em] text-red-500">
              Toolkit
            </p>
  
            <h2 className="mt-4 text-5xl font-black">
              Technologies I Build With
            </h2>
  
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Every tool plays a role in helping me build scalable,
              reliable and user-focused digital solutions.
            </p>
  
          </div>
  
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
  
            {tools.map((tool) => (
  
              <div
                key={tool.name}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-red-500/40"
              >
  
                {tool.icon}
  
                <h3 className="mt-6 text-2xl font-bold">
                  {tool.name}
                </h3>
  
                <p className="mt-4 leading-7 text-slate-400">
                  {tool.description}
                </p>
  
              </div>
  
            ))}
  
          </div>
  
        </div>
  
      </section>
    );
  }
  
  export default Toolkit;