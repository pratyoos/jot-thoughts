import { Link } from 'react-router-dom';
import { Github, Linkedin, X } from 'lucide-react';
import { handleFooterClick } from '../utils/handleFooterClick';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section - always visible */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold ">
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-gray-900 hover:text-blue-500 transition-colors"
              >
                jotThoughts
              </Link>
            </h3>
            <p className="text-gray-600">
              A space where your thoughts matter. Share ideas, reflect deeply, and connect through creativity.
            </p>
          </div>

          {/* Quick Links - always visible */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" onClick={() => handleFooterClick('/about')} className="text-md text-gray-600 hover:text-blue-500 transition-colors">About</Link></li>
              <li><Link to="/blog" onClick={() => handleFooterClick('/blog')} className="text-md text-gray-600 hover:text-blue-500 transition-colors">Blogs</Link></li>
              <li><Link to="/profile" onClick={() => handleFooterClick('/profile')} className="text-md text-gray-600 hover:text-blue-500 transition-colors">Profile</Link></li>
            </ul>
          </div>

          {/* Socials - hidden on small screens */}
          <div className="space-y-4 hidden md:block">
            <h4 className="font-semibold text-gray-900">Socials</h4>
            <ul className="space-y-2">
              <li><a href="https://github.com/pratyoos" target="_blank" rel="noopener noreferrer" className="text-md text-gray-600 hover:text-blue-500 transition-colors">GitHub</a></li>
              <li><a href="https://linkedin.com/in/pratyoos" target="_blank" rel="noopener noreferrer" className="text-md text-gray-600 hover:text-blue-500 transition-colors">LinkedIn</a></li>
              <li><a href="https://twitter.com/PratyoosPanta" target="_blank" rel="noopener noreferrer" className="text-md text-gray-600 hover:text-blue-500 transition-colors">X (Twitter)</a></li>
            </ul>
          </div>

          {/* Resources - hidden on small screens */}
          <div className="space-y-4 hidden md:block">
            <h4 className="font-semibold text-gray-900">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/help" onClick={() => handleFooterClick('/help')} className="text-md text-gray-600 hover:text-blue-500 transition-colors">Help Center</Link></li>
              <li><Link to="/privacy" onClick={() => handleFooterClick('/privacy')} className="text-md text-gray-600 hover:text-blue-500 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

        </div>


        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright - visible only on medium screens and above */}
          <p className="text-gray-600 text-sm hidden md:block">
            &copy; {new Date().getFullYear()} JotThoughts. All rights reserved.
          </p>

          {/* Made with ❤️ - always visible */}
          <p className="text-gray-600 text-md flex items-center gap-1">
            Made with <span className="text-red-500">❤️</span> by{' '}
            <a
              href="https://github.com/pratyoos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Pratyoos
            </a>
          </p>

          {/* Social Icons - visible only on medium screens and above */}
          <p className="text-gray-600 items-center gap-2 hidden md:flex">
            <span>Follow us on:</span>
            <a href="https://github.com/pratyoos" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/pratyoos" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://twitter.com/PratyoosPanta" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
              <X className="h-5 w-5" />
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;