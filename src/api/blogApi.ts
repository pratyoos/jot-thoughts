import axiosClient from './axiosClient';

export interface Blog {
  _id: string;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
  category: string;
  author: {
    _id: string;
    name: string;
    email?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface CreateBlogData {
  title: string;
  summary: string;
  content: string;
  imageUrl?: string;
  category?: string;
}

export interface UpdateBlogData {
  title: string;
  summary: string;
  content: string;
  imageUrl?: string;
  category?: string;
}

export const blogApi = {
  // Get all blogs
  getAll: async (): Promise<Blog[]> => {
    const response = await axiosClient.get('/blogs');
    return response.data.data;
  },

  // Get single blog
  getById: async (id: string): Promise<Blog> => {
    const response = await axiosClient.get(`/blogs/${id}`);
    return response.data.data;
  },

  // Create blog
  create: async (data: CreateBlogData): Promise<Blog> => {
    const response = await axiosClient.post('/blogs', data);
    return response.data.data;
  },

  // Update blog
  update: async (id: string, data: UpdateBlogData): Promise<Blog> => {
    const response = await axiosClient.put(`/blogs/${id}`, data);
    return response.data.data;
  },

  // Delete blog
  delete: async (id: string): Promise<void> => {
    await axiosClient.delete(`/blogs/${id}`);
  }
};