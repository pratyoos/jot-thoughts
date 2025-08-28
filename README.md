
# jotThoughts – Frontend

A modern blogging platform frontend built with **React**, **TypeScript**, **Tailwind CSS** and **Radix UI**.  
Connects to the jotThoughts backend API for user authentication and blog management.

## Live Preview Link:
--> [jotThoughts](https://jot-thoughts.vercel.app/)

## Features

- Authentication Pages – Login, Signup
- Blog Pages – Create, View, Delete blogs
- Profile Page – View user profile & authored blogs
- Search & Filter – Search blogs by title/content
- Responsive UI – Mobile & desktop-friendly
- Dynamic Avatar Initials – For users without profile pictures

## Tech Stack

- React, TypeScript, Tailwind CSS
- Radix UI, Lucide React (Icons)
- Axios – API requests

## Installation

```bash
git clone https://github.com/pratyoos/jot-thoughts.git
cd jot-thoughts

npm install
# or
pnpm install
```

### Setup Environment Variables
Create `.env`:
```bash
BACKEND_URL=https://your-backend-url.com/api
```

### Run Development Server
```bash
npm run dev
# or
pnpm run dev
```
Frontend runs at `http://localhost:5173`.

## Project Structure

```
src/
├── api/          # API functions (blogApi, userApi)
├── components/   # Navbar, Footer, UI components
├── pages/        # Home, Blog, Profile, CreateBlog
├── types/        # TypeScript types
├── utils/        # Helper functions (getInitials)
├── App.tsx       # Router setup
└── index.tsx     # Entry point
```

## Author

Created with ❤️ by [Pratyoos](https://github.com/pratyoos)