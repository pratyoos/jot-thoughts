export interface IUser {
  _id: string;                 // MongoDB ID or user ID
  name: string;                // Full name
  email: string;        // Email
  createdAt: string;           // Account creation date
  updatedAt?: string;          // Optional last updated date
  avatarUrl?: string;          // Optional profile picture URL

  // Optional profile stats
  postsCount?: number;
  followersCount?: number;
  followingCount?: number;

  // Optional for recent activity
  recentActivity?: string[];   // Array of strings describing user activity
}
