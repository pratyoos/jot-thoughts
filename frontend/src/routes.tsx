// src/routes.ts
import { JSX } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

interface RouteType {
  path: string;
  element: JSX.Element;
}

const routes: RouteType[] = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/blog", element: <Blog /> },
  { path: "/blog/:id", element: <Blog /> },
  { path: "login", element: <Login />},
  { path: "/signup", element: <Signup /> }, // Assuming signup uses the same component
  { path: "*", element: <NotFound /> },
];

export default routes;