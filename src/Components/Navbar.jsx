import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Palette, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="fixed w-full bg-transparent text-white backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl text-white font-serif font-bold text-primary">
          <Palette className="text-accent text-orange-800" />
          <span className='text-orange-800'>ArtistAnnu</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden text-orange-800 md:flex space-x-8 font-medium">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="hover:text-accent transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-orange-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden text-orange-800 bg-transparent border-t p-4 space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block hover:text-accent font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;