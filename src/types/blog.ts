export interface IBlog {
  id: string;
  title: string;
  summary: string;
  content: string;
  imageUrl?: string;      // optional if some blogs have no image
  category: string;
  createdAt: string;
  updatedAt?: string;     // optional if not always present
  author: {
    id: string;
    name: string;
    email?: string;
  };
  link?: string;          // optional, can generate if needed
}