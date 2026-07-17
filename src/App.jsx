import { useEffect, useState } from "react";

import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import QuickStats from "./components/dashboard/QuickStats";
import Profile from "./components/profile/Profile";
import ZohoEcosystem from "./components/zoho/ZohoEcosystem";
import ZohoWorkspace from "./components/zoho/ZohoWorkspace";
import Projects from "./components/workspace/Projects";
import Journey from "./components/journey/Journey";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import TechStack from "./components/tech/TechStack";
import Certifications from "./components/certifications/Certifications";
import Resume from "./components/resume/Resume";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main>
        <Hero />
        <QuickStats />
        <Profile />
        <ZohoEcosystem />
        <TechStack />
        <ZohoWorkspace />
        <Projects />
        <Journey />
        <Certifications />
        <Resume/>
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;