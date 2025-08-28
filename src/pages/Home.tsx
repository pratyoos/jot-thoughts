import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { blogApi } from "../api/blogApi";
import type { Blog } from "../api/blogApi";

const Home = () => {
  const [latestPosts, setLatestPosts] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        const allBlogs = await blogApi.getAll();
        // Get the 3 most recent posts
        const sortedBlogs = allBlogs
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
          .slice(0, 3);
        setLatestPosts(sortedBlogs);
      } catch (error) {
        console.error('Error fetching latest posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestPosts();
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-[80vh] bg-white flex flex-col items-center justify-center text-center px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">
            Welcome to <span className="text-blue-500">jotThoughts</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            A space where your thoughts matter. Jot down ideas, reflect deeply, and connect through creativity.
          </p>

          {/* Hero Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <a
                href="/create-blog"
                className="inline-flex items-center justify-center px-6 py-3"
                onClick={(e) => {
                  const token = localStorage.getItem("token");
                  if (!token) {
                    e.preventDefault(); // prevent navigation
                    window.location.href = "/login"; // redirect to login if not logged in
                  }
                }}
              >
                Create Blog
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-6 py-3"
              >
                Learn More
              </Link>
            </Button>
          </div>


        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest from the Blog
          </h2>
          <p className="text-gray-600 text-lg">
            Discover insights, ideas, and inspiration from our community
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          {loading ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600">Loading latest posts...</p>
            </div>
          ) : latestPosts.length > 0 ? (
            latestPosts.map((post) => (
              <Card
                key={post._id}
                className="hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <Link to={`/blog/${post._id}`} className="group block">
                  {post.imageUrl ? (
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-100 rounded-t-lg flex items-center justify-center">
                      <div className="text-gray-400 text-4xl">📝</div>
                    </div>
                  )}
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {new Date(post.createdAt).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" /> {post.author.name}
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-500 transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{post.summary}</p>
                    <Button variant="ghost" className="p-0 h-auto text-blue-500 hover:underline">
                      Read more <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Link>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600">No blog posts available yet.</p>
            </div>
          )}
        </div>

        {/* View All Posts Button */}
        <div className="text-center">
          <Button size="lg" asChild>
            <Link
              to="/blog"
              className="inline-flex items-center justify-center px-6 py-3"
            >
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;