import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  // Use state to track the dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check localStorage for saved dark mode preference on initial load
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setIsDarkMode(savedMode === "true");
    }
  }, []);

  // Toggle the dark mode and save to localStorage
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode.toString());
      return newMode;
    });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
      <h1>this is a home page</h1>
      </div>
      <Footer />
    </>
  );
};

export default Home;