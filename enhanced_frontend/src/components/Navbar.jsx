import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Home, Utensils, Calendar, Info, Phone, ShoppingBag } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isUpsideDown, toggleUpsideDown } = useTheme();
  const { totalItems, setCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Menu', href: '#menu', icon: Utensils },
    { name: 'Reserve', href: '#reserve', icon: Calendar },
    { name: 'About', href: '#about', icon: Info },
    { name: 'Contact', href: '#contact', icon: Phone },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-xl shadow-lg shadow-red-900/10 border-b border-red-900/20' 
        : 'bg-gradient-to-b from-black/80 to-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-1 sm:space-x-2 group flex-shrink-0">
            <span className="text-xl sm:text-2xl md:text-3xl font-horror text-red-600 group-hover:text-red-500 transition-colors animate-flicker">
              THE
            </span>
            <span className="hidden sm:inline text-lg sm:text-xl md:text-2xl font-horror text-red-500 group-hover:text-red-400 transition-colors animate-flicker">
              UPSIDE DOWN
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-gray-300 hover:text-red-500 transition-all duration-300 text-sm uppercase tracking-wider hover:bg-red-900/10 rounded-lg font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Cart Button */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2 sm:p-3 rounded-lg bg-gray-900/50 hover:bg-gray-800 border border-gray-800 hover:border-red-900/50 transition-all duration-300 group"
              title="View Cart"
              aria-label="Shopping cart"
            >
              <ShoppingBag className="w-5 h-5 text-red-500 group-hover:text-red-400 transition-colors" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-r from-red-600 to-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse shadow-lg shadow-red-600/50">
                  {totalItems > 9 ? '9+' : totalItems}
                </span>
              )}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleUpsideDown}
              className="p-2 sm:p-3 rounded-lg bg-gray-900/50 hover:bg-gray-800 border border-gray-800 hover:border-red-900/50 transition-all duration-300"
              title={isUpsideDown ? "Return to Normal" : "Enter the Upside Down"}
              aria-label="Toggle theme"
            >
              {isUpsideDown ? (
                <Sun className="w-5 h-5 text-red-400" />
              ) : (
                <Moon className="w-5 h-5 text-red-500" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 sm:p-3 rounded-lg bg-gray-900/50 hover:bg-gray-800 border border-gray-800 transition-all duration-300"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-red-500" />
              ) : (
                <Menu className="w-6 h-6 text-red-500" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-red-900/20 rounded-b-xl overflow-hidden">
            <div className="px-4 py-4 space-y-2 max-h-[calc(100vh-80px)] overflow-y-auto">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-gray-900/50 hover:bg-red-900/20 border border-gray-800 hover:border-red-900/30 transition-all duration-300 font-medium text-gray-300 hover:text-red-400"
                >
                  <link.icon className="w-5 h-5 text-red-500" />
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
