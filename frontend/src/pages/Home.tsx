import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogPost from "../components/BlogPost";
import bookImage from "../assets/bookImage.png";
import thoughtImage from "../assets/thoughtImage.png";
import ideaImage from "../assets/ideaImage.png";

const Home = () => {
  const blogPosts = [
    {
      title: "The Power of Brainstorming",
      imageUrl: bookImage,
      summary: "Discover how brainstorming can unlock your creativity and lead to innovative ideas.",
      link: "/blog/the-power-of-brainstorming",
      date: "April 25, 2025",
    },
    {
      title: "Reflecting on Your Thoughts",
      imageUrl: thoughtImage,
      summary: "Reflection is key to personal growth. Jotting down your thoughts brings clarity.",
      link: "/blog/reflecting-on-your-thoughts",
      date: "April 20, 2025",
    },
    {
      title: "Connecting Through Ideas",
      imageUrl: ideaImage,
      summary: "Ideas can bring people together. Learn how to share and build connections.",
      link: "/blog/connecting-through-ideas",
      date: "April 15, 2025",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="min-h-[80vh] bg-[#FFFFFF] dark:bg-[#2E2E2E] flex flex-col items-center justify-center text-center px-6 py-12">
        <h1 className="text-5xl font-bold text-[#2E2E2E] dark:text-[#F4F4F4] mb-4">
          Welcome to JotThoughts
        </h1>
        <p className="text-lg text-[#555555] dark:text-[#CCCCCC] max-w-2xl mb-6">
          A space where your thoughts matter. Jot down ideas, reflect deeply, and connect through creativity.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            to="/blog"
            className="px-6 py-3 bg-[#44B0E2] text-white rounded-md hover:bg-[#3A9CCF] transition"
          >
            Explore Blog
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 border border-[#44B0E2] text-[#44B0E2] dark:text-[#44B0E2] rounded-md hover:bg-[#E6F5FC] dark:hover:bg-[#1B3C4F] transition"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Blog Preview Section */}
      <div className="bg-[#F9FAFB] dark:bg-[#1E1E1E] py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-[#2E2E2E] dark:text-[#F4F4F4] mb-8">
          Latest from the Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              imageUrl={post.imageUrl}
              summary={post.summary}
              link={post.link}
              date={post.date}
            />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/blog"
            className="inline-block px-6 py-3 bg-[#44B0E2] text-white rounded-md hover:bg-[#3A9CCF] transition"
          >
            View All Posts
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;