import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from './DarkModeContext';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { name: 'Blog', href: '/blog', isAnchor: false },
    { name: 'Staking', href: '#staking', isAnchor: true },
    { name: 'Statistics', href: '#statistics', isAnchor: true },
    { name: 'Contact', href: '#contact', isAnchor: true },
  ];

  const [isHomePage, setIsHomePage] = useState(window.location.pathname === '/');

  useEffect(() => {
    const handleRouteChange = () => {
      setIsHomePage(window.location.pathname === '/');
    };

    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);
    
    // Also check on initial load and after navigation
    handleRouteChange();

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const handleAnchorClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    
    // If not already on home page, navigate there first
    if (!isHomePage) {
      window.location.href = `/${href}`;
      return;
    }

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? darkMode 
            ? 'bg-gray-900/95 backdrop-blur-md shadow-lg'
            : 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <Shield className="h-8 w-8 text-emerald-500" />
                <span className="ml-2 text-xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                  Lovali
                </span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => {
                  if (link.isAnchor && !isHomePage) return null;
                  return link.isAnchor ? (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleAnchorClick(e, link.href)}
                      className={`px-3 py-2 rounded-md text-sm font-medium ${
                      darkMode 
                        ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' 
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                    } transition-all`}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all"
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button
                onClick={toggleDarkMode}
                className={`p-1 rounded-full ${
                  darkMode 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-gray-700 hover:text-gray-900'
                } focus:outline-none`}
              >
                {darkMode ? (
                  <Sun className="h-6 w-6" />
                ) : (
                  <Moon className="h-6 w-6" />
                )}
              </button>
              <a
                href="#contact"
                onClick={(e) => handleAnchorClick(e, '#contact')}
                className="ml-6 px-4 py-2 rounded-md bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-medium hover:from-emerald-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-emerald-500/20"
              >
                Start Staking
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${
                darkMode 
                  ? 'bg-gray-800/30 text-gray-400 hover:text-white hover:bg-gray-700'
                  : 'bg-gray-100/30 text-gray-600 hover:text-gray-900 hover:bg-gray-200'
              } inline-flex items-center justify-center p-2 rounded-md focus:outline-none`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
          darkMode ? 'bg-gray-900/95' : 'bg-white/95'
        } backdrop-blur-md`}>
          {navLinks.map((link) => {
            if (link.isAnchor && !isHomePage) return null;
            return link.isAnchor ? (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  handleAnchorClick(e, link.href);
                  setIsOpen(false);
                }}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      darkMode 
                        ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                    }`}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="flex items-center justify-between pt-4 pb-2">
            <button
              onClick={toggleDarkMode}
                className={`p-2 rounded-full ${
                  darkMode 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-gray-700 hover:text-gray-900'
                } focus:outline-none`}
            >
              {darkMode ? (
                <Sun className="h-6 w-6" />
              ) : (
                <Moon className="h-6 w-6" />
              )}
              <span className="ml-2">Toggle Theme</span>
            </button>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              handleAnchorClick(e, '#contact');
              setIsOpen(false);
            }}
            className="block w-full text-center px-4 py-2 rounded-md bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-medium hover:from-emerald-600 hover:to-blue-700 transition-all shadow-lg"
          >
            Start Staking
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
