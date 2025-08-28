import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { blogApi } from "../api/blogApi";
import type { Blog } from "../api/blogApi";
import { Button } from "../components/ui/button";
import { getInitials } from "../utils/getInitials";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!slug) return;

      try {
        const data = await blogApi.getById(slug);
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4">Loading...</h2>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !blog) {
    return (
      <>
        <Navbar />
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-6">
          <h2 className="text-2xl font-bold mb-4">Post Not Found</h2>
          <Link to="/blog" onClick={scrollToTop}>
            <Button>Go Back to Blog</Button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[50vh] md:h-[60vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: blog.imageUrl
            ? `url(${blog.imageUrl})`
            : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {blog.title}
          </h1>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-gray-200">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />{" "}
              {new Date(blog.createdAt).toLocaleDateString()}
            </div>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" /> {blog.author.name}
            </div>
            <div className="flex items-center gap-1 capitalize">
              <Tag className="h-4 w-4" /> {blog.category}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto py-16 px-6 space-y-12">
        {/* Back Button */}
        <Link
          to="/blog"
          onClick={scrollToTop}
          className="inline-block mb-6"
        >
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Button>
        </Link>

        {/* Blog Article */}
        <article className="prose prose-lg max-w-none">
          {blog.imageUrl && (
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full rounded-xl mb-6 shadow-lg"
            />
          )}
          {!blog.imageUrl && (
            <div className="w-full h-64 bg-gray-100 rounded-xl mb-6 flex items-center justify-center">
              <div className="text-gray-400 text-6xl">📝</div>
            </div>
          )}

          <p className="text-gray-600 text-lg mb-6 font-medium">
            {blog.summary}
          </p>

          <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
            {blog.content}
          </div>
        </article>

        {/* Author Info */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-200 pt-6 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-semibold text-lg">
              {getInitials(blog.author.name)}
            </div>
            <div>
              <p className="font-semibold text-gray-800">{blog.author.name}</p>
              <p className="text-sm text-gray-500">Author</p>
            </div>
          </div>

          <div className="mt-4 md:mt-0 text-sm text-gray-400">
            Published on {new Date(blog.createdAt).toLocaleDateString()}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogPostPage;