// src/pages/Blog.tsx

import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogPost from '../components/BlogPost';
import NotFound from './NotFound';
import bookImage from '../assets/bookImage.png';
import thoughtImage from '../assets/thoughtImage.png';
import ideaImage from '../assets/ideaImage.png';

const Blog = () => {
  const { id } = useParams<{ id: string }>();

  // Sample blog posts data
  const blogPosts = [
    {
      title: "The Power of Brainstorming",
      imageUrl: bookImage,
      summary: "Discover how brainstorming can unlock your creativity and lead to innovative ideas. Learn tips and techniques to make your sessions more effective.",
      content: "Brainstorming is a powerful technique to unlock creativity and foster innovation...",
      date: "April 25, 2025",
    },
    {
      title: "The Power of Brainstorming",
      imageUrl: bookImage,
      summary: "Discover how brainstorming can unlock your creativity and lead to innovative ideas. Learn tips and techniques to make your sessions more effective.",
      content: "Brainstorming is a powerful technique to unlock creativity and foster innovation...",
      date: "April 25, 2025",
    },
    {
      title: "The Power of Brainstorming",
      imageUrl: bookImage,
      summary: "Discover how brainstorming can unlock your creativity and lead to innovative ideas. Learn tips and techniques to make your sessions more effective.",
      content: "Brainstorming is a powerful technique to unlock creativity and foster innovation...",
      date: "April 25, 2025",
    },
    {
      title: "Reflecting on Your Thoughts",
      imageUrl: thoughtImage,
      summary: "Reflection is key to personal growth. Explore how jotting down your thoughts can help you gain clarity and perspective.",
      content: "Reflection is a cornerstone of personal growth...",
      date: "April 20, 2025",
    },
    {
      title: "Connecting Through Ideas",
      imageUrl: ideaImage,
      summary: "Ideas have the power to connect people. Learn how to share your thoughts and build meaningful connections on JotThoughts.",
      content: "Ideas have the power to bring people together...",
      date: "April 15, 2025",
    },
  ];

  const post = blogPosts.find((p) => p.title.toLowerCase().replace(/\s+/g, '-') === id);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#2E2E2E] flex flex-col items-center p-6">

        {!id ? (
          // No ID → Show blog posts list
          <>
            <h1 className="text-4xl font-bold text-[#2E2E2E] dark:text-[#F4F4F4] mb-8">
              JotThoughts Blog
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
              {blogPosts.map((post, index) => (
                <BlogPost
                  key={index}
                  title={post.title}
                  imageUrl={post.imageUrl}
                  summary={post.summary}
                  link={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                  date={post.date}
                />
              ))}
            </div>
          </>
        ) : post ? (
          // ID exists & post found → Show single post
          <div className="max-w-3xl w-full">
            <h1 className="text-4xl font-bold text-[#2E2E2E] dark:text-[#F4F4F4] mb-4">
              {post.title}
            </h1>
            <p className="text-[#2E2E2E] dark:text-[#F4F4F4] text-sm mb-4">{post.date}</p>
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
              onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/400x200')}
            />
            <p className="text-[#2E2E2E] dark:text-[#F4F4F4] text-lg leading-relaxed">
              {post.content}
            </p>
          </div>
        ) : (
          // ID exists but no post found → Not Found
          <NotFound />
        )}

      </div>
      <Footer />
    </>
  );
};

export default Blog;