// src/routes.ts
import { JSX } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog"; // <- now Blog handles both /blog and /blog/:id
import NotFound from "./pages/NotFound";

interface RouteType {
  path: string;
  element: JSX.Element;
}

const routes: RouteType[] = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/blog", element: <Blog /> },
  { path: "/blog/:id", element: <Blog /> }, // same Blog component for blog posts
  { path: "*", element: <NotFound /> },
];

export default routes;