function StatsCard({ title, value, icon }) {
    return (
      <div className="stats-card">
        <div className="stats-icon">
          {icon}
        </div>
  
        <h3>{title}</h3>
  
        <h1>{value}</h1>
      </div>
    );
  }
  
  export default StatsCard;