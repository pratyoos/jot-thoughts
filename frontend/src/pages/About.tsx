// src/pages/About.tsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Navbar />
     
      <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#2E2E2E] flex flex-col items-center justify-center p-6">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-[#2E2E2E] dark:text-[#F4F4F4] mb-6">
          About JotThoughts
        </h1>

        {/* Introduction Section */}
        <div className="max-w-2xl text-center">
          <p className="text-lg text-[#2E2E2E] dark:text-[#F4F4F4] mb-4">
            Welcome to JotThoughts, a platform where ideas come to life. We believe in the power of sharing thoughts and sparking creativity. JotThoughts encourage brainstorming and collaboration, JotThoughts provide a space to jot down your ideas, reflect, and connect with others. Whether you're here to read, write, or inspire, we're excited to have you on this journey!
          </p>

          {/* Call to Action */}
          <Link
            to="/blog"
            className="inline-block mt-4 px-6 py-3 bg-[#44B0E2] text-[#FFFFFF] rounded-md hover:bg-[#3A9CCF] transition"
          >
            Explore the Blog
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;