import { Link } from "react-router-dom";
import { ArrowRight, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { getUserProfile } from "../api/user";
import { blogApi } from "../api/blogApi";
import type { IUser } from "../types/user";
import type { IBlog } from "../types/blog";
import { getInitials } from "../utils/getInitials";

const Profile = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [loadingUser, setLoadingUser] = useState(true);
  const [loadingBlogs, setLoadingBlogs] = useState(true);

  // Fetch user profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile();
        if (data) setUser(data);
      } catch (err) {
        console.error("Failed to fetch profile", err);
      } finally {
        setLoadingUser(false);
      }
    };
    fetchProfile();
  }, []);

  // Fetch user's blogs
  useEffect(() => {
    const fetchUserBlogs = async () => {
      if (!user) return;
      try {
        const allBlogs: any[] = await blogApi.getAll();

        const userBlogs: IBlog[] = allBlogs
          .filter((b) => b.author._id === user._id || b.author.email === user.email)
          .map((b) => ({
            id: b._id,
            title: b.title,
            summary: b.summary,
            content: b.content,
            imageUrl: b.imageUrl || "",
            category: b.category,
            createdAt: b.createdAt,
            updatedAt: b.updatedAt,
            author: {
              id: b.author._id,
              name: b.author.name,
              email: b.author.email,
            },
            link: `/blog/${b._id}`,
          }));

        userBlogs.sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );

        setBlogs(userBlogs);
      } catch (err) {
        console.error("Failed to fetch user's blogs", err);
      } finally {
        setLoadingBlogs(false);
      }
    };

    fetchUserBlogs();
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  if (loadingUser)
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (!user)
    return <div className="min-h-screen flex items-center justify-center">User not logged in.</div>;

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-[40vh] bg-white flex flex-col items-center justify-center text-center px-6 py-12">
        <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-3xl font-bold text-gray-700 mb-4">
          {getInitials(user.name)}
        </div>
        <h1 className="text-4xl font-bold text-gray-900">{user.name}</h1>
        <p className="text-gray-600">{user.email}</p>
        <p className="text-gray-500 mt-1 text-sm">
          Joined: {new Date(user.createdAt).toLocaleDateString()}
        </p>

        <Button
          variant="ghost"
          className="mt-6 text-red-500 flex items-center gap-2"
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4" /> Logout
        </Button>
      </section>

      {/* User Blogs */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Blogs</h2>
          <p className="text-gray-600 text-lg">Check out all the posts you have authored</p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          {loadingBlogs ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600">Loading your blogs...</p>
            </div>
          ) : blogs.length > 0 ? (
            blogs.map((blog) => (
              <Card
                key={blog.id}
                className="hover:shadow-lg transition-all duration-300 relative"
              >
                <Link to={`/blog/${blog.id}`} className="group block">
                  {blog.imageUrl ? (
                    <img
                      src={blog.imageUrl}
                      alt={blog.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-100 rounded-t-lg flex items-center justify-center text-4xl font-bold text-gray-400">
                      {getInitials(user.name)}
                    </div>
                  )}
                  <CardHeader className="pb-3 px-4 pt-3">
                    <CardTitle className="text-xl group-hover:text-blue-500 transition-colors">
                      {blog.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-4 pb-4">
                    <p className="text-gray-600 mb-4">{blog.summary}</p>
                    <div className="flex items-center justify-between gap-2">
                      <Button
                        variant="ghost"
                        className="p-0 h-auto text-blue-500 hover:underline flex items-center gap-1"
                      >
                        Read more <ArrowRight className="h-3 w-3" />
                      </Button>

                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-500 hover:bg-red-50"
                        onClick={async (e) => {
                          e.preventDefault(); // prevent Link navigation
                          if (!confirm("Are you sure you want to delete this blog?")) return;

                          try {
                            await blogApi.delete(blog.id);
                            setBlogs((prev) => prev.filter((b) => b.id !== blog.id));
                          } catch (err) {
                            console.error("Failed to delete blog", err);
                            alert("Failed to delete blog. Please try again.");
                          }
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600">You haven't written any blogs yet.</p>
              <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
                <Link to="/create-blog">
                  <Button className="bg-blue-500 text-white hover:bg-blue-600 px-6 py-3">
                    Create Blog
                  </Button>
                </Link>
                <Link to="/blog">
                  <Button
                    variant="outline"
                    className="bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 px-6 py-3"
                  >
                    Explore Blogs
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Profile;