import {
    FaArrowRight,
    FaReact,
    FaPython,
  } from "react-icons/fa";
  
  import {
    SiZoho,
  } from "react-icons/si";
  
  function Projects() {
  
    const projects = [
      {
        title: "Zoho SalesIQ Chatbot",
        icon: <SiZoho className="text-4xl text-red-500" />,
        description:
          "Designed and implemented intelligent chatbot flows for customer engagement using Zoho SalesIQ.",
        tags: ["SalesIQ", "Deluge", "Automation"],
      },
      {
        title: "Zoho Books API",
        icon: <SiZoho className="text-4xl text-green-500" />,
        description:
          "Integrated Zoho Books APIs to automate business workflows and data synchronization.",
        tags: ["Books", "API", "JSON"],
      },
      {
        title: "React Portfolio",
        icon: <FaReact className="text-4xl text-cyan-400" />,
        description:
          "Built a modern portfolio with React, Tailwind CSS and Framer Motion.",
        tags: ["React", "Tailwind", "UI"],
      },
      {
        title: "Python Automation",
        icon: <FaPython className="text-4xl text-yellow-400" />,
        description:
          "Automated repetitive business tasks using Python scripts and Excel processing.",
        tags: ["Python", "Automation", "Excel"],
      },
    ];
  
    return (
      <section className="bg-slate-950 px-8 py-28">
  
        <div className="mx-auto max-w-7xl">
  
          <div className="mb-16">
  
            <p className="font-semibold uppercase tracking-[0.3em] text-red-500">
              Workspace
            </p>
  
            <h2 className="mt-4 text-5xl font-black">
              Featured Projects
            </h2>
  
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              A collection of projects focused on automation,
              business systems and modern web development.
            </p>
  
          </div>
  
          <div className="grid gap-8 lg:grid-cols-2">
  
            {projects.map((project) => (
  
              <div
                key={project.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-red-500/40"
              >
  
                <div className="flex items-center justify-between">
  
                  {project.icon}
  
                  <FaArrowRight className="text-slate-500 transition group-hover:translate-x-2 group-hover:text-red-500" />
  
                </div>
  
                <h3 className="mt-8 text-3xl font-bold">
  
                  {project.title}
  
                </h3>
  
                <p className="mt-6 leading-8 text-slate-400">
  
                  {project.description}
  
                </p>
  
                <div className="mt-8 flex flex-wrap gap-3">
  
                  {project.tags.map((tag) => (
  
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm"
                    >
  
                      {tag}
  
                    </span>
  
                  ))}
  
                </div>
  
              </div>
  
            ))}
  
          </div>
  
        </div>
  
      </section>
    );
  }
  
  export default Projects;