import StatsCard from "./StatsCard";
import { stats } from "../../data/stats";

function StatsGrid() {
  return (
    <section className="stats-grid">
      {stats.map((item) => (
        <StatsCard
          key={item.title}
          title={item.title}
          value={item.value}
          icon={item.icon}
        />
      ))}
    </section>
  );
}

export default StatsGrid;