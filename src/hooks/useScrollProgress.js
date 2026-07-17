import { useEffect, useState } from "react";

function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const max = window.innerHeight * 0.8;
      const value = Math.min(window.scrollY / max, 1);

      setProgress(value);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
}

export default useScrollProgress;