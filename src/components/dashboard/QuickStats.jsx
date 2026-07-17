import StatCard from "./StatCard";

function QuickStats() {
  return (
    <section className="bg-slate-950 px-8 pb-24">

      <div className="mx-auto max-w-7xl">

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          <StatCard
            number="IKA360"
            title="Experience"
            subtitle="Business Solutions & Automation"
          />

          <StatCard
            number="02"
            title="Zoho Chatbots"
            subtitle="Built with zoho SalesIQ"
          />

          <StatCard
            number="02"
            title="Zoho Credentials"
            subtitle="Marketing Launchpad & MEA Workshop"
          />

          <StatCard
            number="08+"
            title="Zoho Products"
            subtitle="CRM • Inventory • Desk • SalesIQ"
          />

        </div>

      </div>

    </section>
  );
}

export default QuickStats;