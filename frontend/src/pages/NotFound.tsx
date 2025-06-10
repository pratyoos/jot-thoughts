// src/pages/NotFound.tsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import notFoundImage from '../assets/notFound.png';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#F5F2F5] flex flex-col items-center justify-center p-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#2E2E2E] dark:text-[#000000] mb-6">
          Page Not Found
        </h2>

        {/* Graphics Image */}
        <img
          src={notFoundImage}
          alt="404 Not Found Illustration"
          className="w-102 h-81 mb-6"
        />

        {/* Call to Action */}
        <Link
          to="/"
          className="inline-block mt-4 px-6 py-3 bg-[#44B0E2] text-[#FFFFFF] rounded-md hover:bg-[#3A9CCF] transition"
        >
          Back to Home
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;