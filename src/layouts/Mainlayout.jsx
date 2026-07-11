import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatsGrid from "../components/dashboard/StatsGrid";

function MainLayout() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <Topbar />

        <main className="workspace">
          <h1>Welcome back, Ian 👋</h1>

          <p>
            Building smarter businesses through the Zoho ecosystem.
          </p>

        <StatsGrid />  
        </main>
      </div>
    </div>
  );
}

export default MainLayout;