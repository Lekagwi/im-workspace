import {
    SiZoho,
  } from "react-icons/si";
  
  function ZohoWorkspace() {
    const apps = [
      {
        name: "Zoho CRM",
        color: "bg-blue-500",
        description: "Customer relationship management and automation."
      },
      {
        name: "Zoho SalesIQ",
        color: "bg-red-500",
        description: "Live chat, visitor tracking and chatbot development."
      },
      {
        name: "Zoho Books",
        color: "bg-green-500",
        description: "Accounting workflows and API integrations."
      },
      {
        name: "Zoho Desk",
        color: "bg-yellow-500",
        description: "Customer support and ticket management."
      },
      {
        name: "Zoho Inventory",
        color: "bg-purple-500",
        description: "Inventory management and stock automation."
      },
      {
        name: "Zoho Creator",
        color: "bg-cyan-500",
        description: "Low-code applications and business systems."
      },
      {
        name: "Zoho Campaigns",
        color: "bg-pink-500",
        description: "Email marketing and customer engagement."
      },
      {
        name: "Zoho Commerce",
        color: "bg-orange-500",
        description: "E-commerce websites and product management."
      },
    ];
  
    return (
      <section className="bg-slate-950 px-8 py-28">
  
        <div className="mx-auto max-w-7xl">
  
          <div className="mb-16 text-center">
  
            <p className="uppercase tracking-[0.3em] text-red-500 font-semibold">
              Zoho Workspace
            </p>
  
            <h2 className="mt-4 text-5xl font-black">
              My Zoho Ecosystem
            </h2>
  
            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400 leading-8">
              The platforms I've used to build automations,
              improve customer experiences and streamline business
              operations.
            </p>
  
          </div>
  
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
  
            {apps.map((app) => (
  
              <div
                key={app.name}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-red-500/40"
              >
  
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${app.color}`}>
  
                  <SiZoho className="text-3xl text-white" />
  
                </div>
  
                <h3 className="mt-6 text-2xl font-bold">
                  {app.name}
                </h3>
  
                <p className="mt-4 leading-7 text-slate-400">
                  {app.description}
                </p>
  
              </div>
  
            ))}
  
          </div>
  
        </div>
  
      </section>
    );
  }
  
  export default ZohoWorkspace;