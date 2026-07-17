import {
    SiZoho,
  } from "react-icons/si";
  
  function ZohoEcosystem() {
  
    const products = [
      {
        name: "Zoho SalesIQ",
        status: "Practical Experience",
        color: "bg-green-500",
        points: [
          "Built Paragon Perfumes chatbot (Live)",
          "Built IG Sacco FAQ Bot",
          "Designed visitor journeys",
          "FAQ automation",
        ],
      },
      {
        name: "Zoho Inventory",
        status: "Practical Experience",
        color: "bg-green-500",
        points: [
          "Product Management",
          "Pricing Updates",
          "Inventory Organization",
          "Item Management",
        ],
      },
      {
        name: "Zoho Commerce",
        status: "Practical Experience",
        color: "bg-green-500",
        points: [
          "Website Product Updates",
          "Store Management",
          "Product Listings",
        ],
      },
      {
        name: "Zoho Creator",
        status: "Practical Experience",
        color: "bg-green-500",
        points: [
          "Property Management",
          "Water Bill Updates",
          "Business Applications",
        ],
      },
      {
        name: "Zoho CRM",
        status: "Currently Learning",
        color: "bg-yellow-500",
        points: [
          "Leads",
          "Contacts",
          "Modules",
          "Business Processes",
        ],
      },
      {
        name: "Zoho Books",
        status: "Currently Learning",
        color: "bg-yellow-500",
        points: [
          "Deluge",
          "Tags",
          "Organization Settings",
        ],
      },
      {
        name: "Zoho Desk",
        status: "Exposure",
        color: "bg-blue-500",
        points: [
          "WhatsApp Support",
          "CSAT",
          "Ticket Management",
        ],
      },
      {
        name: "Zoho Campaigns",
        status: "Exposure",
        color: "bg-blue-500",
        points: [
          "Marketing Campaigns",
          "Customer Engagement",
        ],
      },
    ];
  
    return (
      <section
        id="zoho"
        className="bg-slate-950 px-8 py-28"
      >
        <div className="mx-auto max-w-7xl">
  
          <div className="text-center">
  
            <p className="font-semibold uppercase tracking-[0.35em] text-red-500">
              ZOHO ECOSYSTEM
            </p>
  
            <h2 className="mt-6 text-5xl font-black">
              Real Experience.
              <br />
              Continuous Learning.
            </h2>
  
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              During my internship at IKA360, I gained hands-on experience
              working with multiple Zoho applications while building chatbot
              solutions, managing products and learning how businesses use
              technology to improve their daily operations.
            </p>
  
          </div>
  
          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
  
            {products.map((product) => (
  
              <div
                key={product.name}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-red-500/40 hover:bg-white/10"
              >
  
                <SiZoho className="text-5xl text-red-500" />
  
                <h3 className="mt-6 text-2xl font-bold">
                  {product.name}
                </h3>
  
                <div className="mt-5 flex items-center gap-3">
  
                  <div className={`h-3 w-3 rounded-full ${product.color}`}></div>
  
                  <span className="text-sm font-semibold text-slate-300">
                    {product.status}
                  </span>
  
                </div>
  
                <ul className="mt-6 space-y-3 text-slate-400">
  
                  {product.points.map((point) => (
  
                    <li key={point}>
                      ✓ {point}
                    </li>
  
                  ))}
  
                </ul>
  
              </div>
  
            ))}
  
          </div>
  
          {/* Current Learning */}
  
          <div className="mt-24 rounded-3xl border border-red-500/20 bg-black/40 p-10">
  
            <p className="font-semibold uppercase tracking-[0.3em] text-red-500">
              CURRENT LEARNING
            </p>
  
            <div className="mt-8 font-mono text-green-400 space-y-2">
  
              <p>&gt; Advanced Zoho CRM</p>
  
              <p>&gt; Deluge Scripting</p>
  
              <p>&gt; Zoho APIs</p>
  
              <p>&gt; Zoho Flow</p>
  
              <p>&gt; Zoho Analytics</p>
  
              <p className="mt-6 text-red-400">
                Status: Learning Every Day 🚀
              </p>
  
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }
  
  export default ZohoEcosystem;