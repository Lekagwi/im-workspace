import {
    FiHome,
    FiGrid,
    FiFolder,
    FiBookOpen,
    FiAward,
    FiMail,
  } from "react-icons/fi";
  
  function Sidebar() {
    return (
      <aside className="sidebar">
        {/* Logo Section */}
        <div className="logo">
          <span>IM</span>
        </div>
  
        {/* Navigation */}
        <nav>
          <ul className="nav-links">
            <li className="active">
              <FiHome size={20} />
              <span>Dashboard</span>
            </li>
  
            <li>
              <FiGrid size={20} />
              <span>Zoho Ecosystem</span>
            </li>
  
            <li>
              <FiFolder size={20} />
              <span>Projects</span>
            </li>
  
            <li>
              <FiBookOpen size={20} />
              <span>Learning Journey</span>
            </li>
  
            <li>
              <FiAward size={20} />
              <span>Certifications</span>
            </li>
  
            <li>
              <FiMail size={20} />
              <span>Contact</span>
            </li>
          </ul>
        </nav>
  
        {/* Footer */}
        <div className="sidebar-footer">
          <p>Zoho Workspace</p>
          <small>Powered by Curiosity &amp; "What If?"</small>
        </div>
      </aside>
    );
  }
  
  export default Sidebar;