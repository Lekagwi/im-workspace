import {
    FaReact,
    FaPython,
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaGitAlt,
    FaGithub,
    FaFigma,
    FaCode,
  } from "react-icons/fa";
  
  import { SiTailwindcss } from "react-icons/si";
  import { MdDesignServices } from "react-icons/md";
  
  function TechStack() {
    const sections = [
      {
        title: "Frontend Development",
        color: "text-cyan-400",
        tools: [
          [
            "React",
            "Current Focus",
            <FaReact className="text-cyan-400 text-2xl" />,
          ],
          [
            "JavaScript",
            "Interactive Applications",
            <FaJsSquare className="text-yellow-300 text-2xl" />,
          ],
          [
            "HTML5",
            "Semantic Structure",
            <FaHtml5 className="text-orange-500 text-2xl" />,
          ],
          [
            "CSS3",
            "Responsive Design",
            <FaCss3Alt className="text-blue-500 text-2xl" />,
          ],
          [
            "Tailwind CSS",
            "Modern Styling",
            <SiTailwindcss className="text-sky-400 text-2xl" />,
          ],
        ],
      },
  
      {
        title: "Automation",
        color: "text-green-400",
        tools: [
          [
            "Python",
            "Hands-on Automation",
            <FaPython className="text-yellow-400 text-2xl" />,
          ],
          [
            "Deluge",
            "Currently Learning",
            <span className="text-2xl">⚙️</span>,
          ],
        ],
      },
  
      {
        title: "Development Tools",
        color: "text-purple-400",
        tools: [
          [
            "VS Code",
            "Primary Editor",
            <FaCode className="text-blue-400 text-2xl" />,
          ],
          [
            "Git",
            "Version Control",
            <FaGitAlt className="text-orange-500 text-2xl" />,
          ],
          [
            "GitHub",
            "Code Hosting",
            <FaGithub className="text-2xl" />,
          ],
          [
            "Canva",
            "Design",
            <span className="text-2xl">🎨</span>,
          ],
          [
            "Figma",
            "UI Design",
            <FaFigma className="text-blue-400 text-2xl" />,
          ],
          [
            "Adobe Illustrator",
            "Graphics",
            <span className="text-2xl">🎨</span>,
          ],
        ],
      },
    ];
  
    return (
      <section
        id="tech"
        className="bg-slate-950 px-8 py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-[0.35em] text-red-500">
              TECH STACK
            </p>
  
            <h2 className="mt-6 text-5xl font-black">
              Technologies I Build With
            </h2>
  
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              Every technology in my toolkit plays a role in building digital
              solutions, improving business workflows and creating responsive user
              experiences.
            </p>
          </div>
  
          <div className="mt-20 grid gap-8 lg:grid-cols-3">
            {sections.map((section) => (
              <div
                key={section.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-red-500/40 hover:bg-white/10"
              >
                <h3 className={`text-2xl font-bold ${section.color}`}>
                  {section.title}
                </h3>
  
                <div className="mt-8 space-y-6">
                  {section.tools.map(([name, desc, icon]) => (
                    <div
                      key={name}
                      className="flex items-center gap-4"
                    >
                      {icon}
  
                      <div>
                        <h4 className="font-semibold">{name}</h4>
  
                        <p className="text-sm text-slate-400">
                          {desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
  
          <div className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10 p-10 text-center">
            <h3 className="text-3xl font-bold">
              Always Learning.
            </h3>
  
            <p className="mx-auto mt-6 max-w-3xl leading-8 text-slate-400">
              I enjoy learning technologies that solve real business problems,
              whether it's building modern web applications, improving customer
              experiences or automating everyday business processes.
            </p>
          </div>
        </div>
      </section>
    );
  }
  
  export default TechStack;