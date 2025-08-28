import { useState, useEffect, useMemo } from "react";
import { Search, Filter, Calendar, User, Tag } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { blogApi } from "../api/blogApi";
import type { Blog as BlogType } from "../api/blogApi";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await blogApi.getAll();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Dynamically get unique categories from backend
  const categories = useMemo(() => {
    const cats = Array.from(new Set(blogs.map((b) => b.category)));
    return ["all", ...cats];
  }, [blogs]);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.summary.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || blog.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [blogs, searchTerm, selectedCategory]);

  const sortedBlogs = useMemo(() => {
    return filteredBlogs.slice().sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }, [filteredBlogs]);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-background py-12 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Explore Our <span className="text-primary">Blog</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
          Discover insights, ideas, and inspiration from our community of thinkers and creators
        </p>

        <div className="max-w-3xl mx-auto relative mt-2 mb-6">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 text-base md:text-lg rounded-full border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 placeholder-gray-400 hover:shadow-md transition-all duration-200"
          />
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-6">
        <div className="flex flex-wrap gap-3 justify-center max-w-6xl mx-auto mb-8">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              onClick={() => setSelectedCategory(cat)}
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              {cat}
            </Button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {loading ? (
            <div className="text-center py-12 col-span-full">
              <p className="text-muted-foreground text-lg">Loading blogs...</p>
            </div>
          ) : sortedBlogs.length > 0 ? (
            sortedBlogs.map((blog) => (
              <Link
                key={blog._id}
                to={`/blog/${blog._id}`}
                className="block border-blue-500/20 hover:shadow-xl transition-shadow duration-300 overflow-hidden rounded-lg"
              >
                <Card className="group">
                  <div className="aspect-video overflow-hidden bg-gray-100">
                    {blog.imageUrl ? (
                      <img
                        src={blog.imageUrl}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="text-gray-400 text-6xl flex items-center justify-center h-full">
                        📝
                      </div>
                    )}
                  </div>
                  <CardHeader className="pb-3 px-4 pt-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />{" "}
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" /> {blog.author.name}
                      </div>
                    </div>
                    <CardTitle className="text-xl line-clamp-2 group-hover:text-blue-500 transition-colors">
                      {blog.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Tag className="h-3 w-3" />
                      <span className="capitalize">{blog.category}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="px-4">
                    <p className="text-muted-foreground line-clamp-3 mb-4">
                      {blog.summary}
                    </p>
                    <div className="text-blue-500">Read full article →</div>
                  </CardContent>
                </Card>
              </Link>
            ))
          ) : (
            <div className="text-center py-12 col-span-full">
              <p className="text-muted-foreground text-lg">
                No posts found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;