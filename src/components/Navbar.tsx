import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-indigo-950/90 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Moon className="h-8 w-8 mr-3 text-yellow-400" />
            <span className="text-xl md:text-2xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">
              AstralVision
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-yellow-300 transition-colors">Services</a>
            <a href="#testimonials" className="hover:text-yellow-300 transition-colors">Testimonials</a>
            <a href="#offer" className="hover:text-yellow-300 transition-colors">Special Offer</a>
            <a href="#contact" className="hover:text-yellow-300 transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 flex flex-col items-center">
            <a 
              href="#features" 
              className="w-full text-center py-2 hover:bg-indigo-900 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#testimonials" 
              className="w-full text-center py-2 hover:bg-indigo-900 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#offer" 
              className="w-full text-center py-2 hover:bg-indigo-900 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Special Offer
            </a>
            <a 
              href="#contact" 
              className="w-full text-center py-2 hover:bg-indigo-900 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};