cd// src/components/RecentPosts.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const RecentPosts = () => {
  const posts = [
    { id: 4, title: 'Advanced JavaScript Concepts', description: 'Dive deeper into JavaScript with these advanced concepts.' },
    { id: 5, title: 'CSS Grid vs Flexbox', description: 'Which layout system is better for your next project?' },
    { id: 6, title: 'Setting Up Tailwind CSS with React', description: 'A guide to setting up Tailwind CSS in a React app.' },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-8">Recent Posts</h2>
      <div className="space-y-6">
        {posts.map(post => (
          <div key={post.id} className="bg-white shadow-lg p-6 rounded-md">
            <h3 className="text-xl font-bold mb-4">{post.title}</h3>
            <p className="mb-4">{post.description}</p>
            <Link to={`/blog/${post.id}`} className="text-blue-600 hover:text-blue-800">Read More</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
