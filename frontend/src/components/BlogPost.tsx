// src/components/BlogPost.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPostProps {
  title: string;
  imageUrl: string;
  summary: string;
  link: string;
  date: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, imageUrl, summary, link, date }) => {
  return (
    <div className="bg-[#FFFFFF] dark:bg-[#2E2E2E] shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 outline-amber-50">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-[#2E2E2E] dark:text-[#F4F4F4]">{title}</h2>
        <p className="text-[#2E2E2E] dark:text-[#F4F4F4] text-sm mt-1">{date}</p>
        <p className="text-[#2E2E2E] dark:text-[#F4F4F4] mt-2 line-clamp-3">{summary}</p>
        <Link
          to={link}
          className="text-[#44B0E2] mt-4 inline-block hover:text-[#3A9CCF] transition"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;