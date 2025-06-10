// src/components/Post.tsx
import React from 'react';

type PostProps = {
  title: string;
  content: string;
};

const Post: React.FC<PostProps> = ({ title, content }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default Post;
