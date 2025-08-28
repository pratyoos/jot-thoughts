import type { JSX } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HelpCenter from "./pages/HelpCenter";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import BlogPostPage from "./pages/BlogPostPage";
import Profile from "./pages/Profile";
import CreateBlog from "./pages/CreateBlog";


interface RouteType {
  path: string;
  element: JSX.Element;
  protected?: boolean;
}

const routes: RouteType[] = [
  { path: "/", element: <Home />},
  { path: "/about", element: <About />},
  { path: "/blog", element: <Blog /> },
  { path: "/blog/:slug", element: <BlogPostPage /> },
  { path: "login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/profile", element: <Profile />, protected: true },
  { path: "/create-blog", element: <CreateBlog />, protected: true },
  { path: "/privacy", element: <PrivacyPolicy /> },
  { path: "/help", element: <HelpCenter /> },
  { path: "*", element: <NotFound />, },
];

export default routes;