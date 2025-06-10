import React from 'react';
import BlogPost from './BlogPost'; // Reuse BlogPost component

const FeaturedPosts = () => {
  const posts = [
    {
      id: 1,
      title: 'How to Learn React',
      imageUrl: 'https://via.placeholder.com/400x200', // Added imageUrl
      summary: 'A beginner’s guide to learning React.', // Renamed description to summary
      date: 'April 23, 2025', // Added date
      link: `/blog/1`, // Match BlogPost.tsx link format
    },
    {
      id: 2,
      title: 'Understanding Tailwind CSS',
      imageUrl: 'https://via.placeholder.com/400x200',
      summary: 'Why Tailwind CSS is the go-to choice for modern web design.',
      date: 'April 22, 2025',
      link: `/blog/2`,
    },
    {
      id: 3,
      title: 'Building a Blog with Next.js',
      imageUrl: 'https://via.placeholder.com/400x200',
      summary: 'Step-by-step guide to building a fast blog with Next.js.',
      date: 'April 21, 2025',
      link: `/blog/3`,
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map(post => (
            <BlogPost
              key={post.id}
              title={post.title}
              imageUrl={post.imageUrl}
              summary={post.summary}
              link={post.link}
              date={post.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;