import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { getUserProfile } from "../api/user";
import type { IUser } from "../types/user";
import { getInitials } from "../utils/getInitials";

const Navbar = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const data = await getUserProfile();
        setUser(data);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    window.location.href = "/login";
  };

  const NavLinks = () => (
    <>
      <Link className="block text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md" to="/">Home</Link>
      <Link className="block text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md" to="/about">About</Link>
      <Link className="block text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md" to="/blog">Blogs</Link>
    </>
  );

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight">
          <Link to="/" className="text-gray-900 hover:text-blue-500 transition-colors">jotThoughts</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex space-x-6"><NavLinks /></div>

          {!loading && !user && (
            <div className="flex space-x-3">
              <Button variant="outline" asChild><Link to="/login">Login</Link></Button>
              <Button asChild><Link to="/signup">Signup</Link></Button>
            </div>
          )}

          {!loading && user && (
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button className="focus:outline-none cursor-pointer">
                  <Avatar className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center">
                    <AvatarFallback className="text-sm font-semibold">
                      {getInitials(user.name)}
                    </AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenu.Trigger>

              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  side="bottom"
                  align="end"
                  sideOffset={5}
                  className="min-w-[150px] bg-white shadow-md rounded-md p-1 z-50"
                >
                  <DropdownMenu.Item asChild>
                    <Link
                      to="/profile"
                      className="block w-full px-3 py-2 hover:bg-gray-100 rounded-md"
                    >
                      {user.name}
                    </Link>
                  </DropdownMenu.Item>

                  <DropdownMenu.Item asChild>
                    <Link
                      to="/create-blog"
                      className="block w-full px-3 py-2 hover:bg-gray-100 rounded-md"
                    >
                      Create Blog
                    </Link>
                  </DropdownMenu.Item>

                  <DropdownMenu.Item
                    className="px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="outline" size="default" onClick={() => setMobileOpen(!mobileOpen)}>☰</Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 p-4 space-y-4">
          <div className="flex flex-col gap-2"><NavLinks /></div>

          {!loading && !user && (
            <div className="flex flex-col gap-2 mt-2">
              <Button variant="outline" asChild><Link to="/login">Login</Link></Button>
              <Button asChild><Link to="/signup">Signup</Link></Button>
            </div>
          )}

          {!loading && user && (
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button className="focus:outline-none flex items-center justify-start">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/default-avatar.png" />
                    <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                  </Avatar>
                  <span className="ml-2">{user.name}</span>
                </button>
              </DropdownMenu.Trigger>

              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  side="bottom"
                  align="start"
                  sideOffset={5}
                  className="min-w-[150px] bg-white shadow-md rounded-md p-1 z-50"
                >
                  <DropdownMenu.Item asChild>
                    <Link
                      to="/profile"
                      className="block w-full px-3 py-2 hover:bg-gray-100 rounded-md"
                    >
                      {user.name}
                    </Link>
                  </DropdownMenu.Item>

                  <DropdownMenu.Item asChild>
                    <Link
                      to="/create-blog"
                      className="block w-full px-3 py-2 hover:bg-gray-100 rounded-md"
                    >
                      Create Blog
                    </Link>
                  </DropdownMenu.Item>

                  <DropdownMenu.Item
                    className="px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;