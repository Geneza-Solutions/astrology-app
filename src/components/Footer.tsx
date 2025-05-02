import React from 'react';
import { Moon, Facebook, Twitter, Instagram, Mail, MapPin, Phone, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-indigo-950 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Moon className="h-8 w-8 mr-3 text-yellow-400" />
              <span className="text-xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">
                AstralVision
              </span>
            </div>
            <p className="text-purple-200/70 mb-6">
              Guiding your path through the wisdom of the stars since 2010. Our mission is to help you align with your cosmic purpose.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-indigo-800/50 flex items-center justify-center hover:bg-indigo-700/70 transition-colors">
                <Facebook className="w-5 h-5 text-purple-100" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-indigo-800/50 flex items-center justify-center hover:bg-indigo-700/70 transition-colors">
                <Twitter className="w-5 h-5 text-purple-100" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-indigo-800/50 flex items-center justify-center hover:bg-indigo-700/70 transition-colors">
                <Instagram className="w-5 h-5 text-purple-100" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-purple-200/70 hover:text-yellow-300 transition-colors">Home</a></li>
              <li><a href="#features" className="text-purple-200/70 hover:text-yellow-300 transition-colors">Services</a></li>
              <li><a href="#testimonials" className="text-purple-200/70 hover:text-yellow-300 transition-colors">Testimonials</a></li>
              <li><a href="#offer" className="text-purple-200/70 hover:text-yellow-300 transition-colors">Special Offer</a></li>
              <li><a href="#" className="text-purple-200/70 hover:text-yellow-300 transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-purple-200/70 hover:text-yellow-300 transition-colors">Birth Chart Analysis</a></li>
              <li><a href="#" className="text-purple-200/70 hover:text-yellow-300 transition-colors">Compatibility Reports</a></li>
              <li><a href="#" className="text-purple-200/70 hover:text-yellow-300 transition-colors">Transit Forecasts</a></li>
              <li><a href="#" className="text-purple-200/70 hover:text-yellow-300 transition-colors">Career Guidance</a></li>
              <li><a href="#" className="text-purple-200/70 hover:text-yellow-300 transition-colors">Solar Return Reading</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-purple-200/70">123 Cosmic Lane, Stardust City, Universe 12345</span>
              </li>
              <li className="flex">
                <Phone className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                <span className="text-purple-200/70">(555) 123-4567</span>
              </li>
              <li className="flex">
                <Mail className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                <span className="text-purple-200/70">hello@astralvision.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-indigo-800/50 pt-8 text-center">
          <p className="text-purple-200/70 flex items-center justify-center">
            <span>© 2025 AstralVision. All rights reserved. Made with</span>
            <Heart className="w-4 h-4 text-red-400 mx-1" fill="#f87171" />
            <span>under the stars</span>
          </p>
        </div>
      </div>
    </footer>
  );
};