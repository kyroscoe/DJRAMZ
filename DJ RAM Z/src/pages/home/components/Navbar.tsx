import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className={`text-sm font-medium transition-colors ${scrolled ? 'text-gray-900 hover:text-red-600' : 'text-white hover:text-red-400'}`}>
              Home
            </Link>
            <Link to="/services" className={`text-sm font-medium transition-colors ${scrolled ? 'text-gray-900 hover:text-red-600' : 'text-white hover:text-red-400'}`}>
              Services
            </Link>
            <Link to="/booking" className={`text-sm font-medium transition-colors ${scrolled ? 'text-gray-900 hover:text-red-600' : 'text-white hover:text-red-400'}`}>
              Booking
            </Link>
            <Link to="/contact" className={`text-sm font-medium transition-colors ${scrolled ? 'text-gray-900 hover:text-red-600' : 'text-white hover:text-red-400'}`}>
              Contact
            </Link>
            <Link 
              to="/booking" 
              className="bg-red-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-red-700 transition-all whitespace-nowrap"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
