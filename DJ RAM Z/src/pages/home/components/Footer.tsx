import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white mx-10 mb-10 rounded-[48px] overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 text-center opacity-[0.03] pointer-events-none">
        <div className="text-[280px] font-black tracking-tighter">RR Mobile Music Entertainment </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          <div className="md:col-span-4">
            <h3 className="text-5xl font-bold leading-tight mb-8">
              Let's Create<br />
              Your Perfect<br />
              <span className="italic">Soundtrack</span>
            </h3>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-base font-semibold uppercase tracking-wide mb-6">Navigate</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-sm text-gray-400 hover:text-red-500 transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-sm text-gray-400 hover:text-red-500 transition-colors">Services</Link></li>
              <li><Link to="/booking" className="text-sm text-gray-400 hover:text-red-500 transition-colors">Booking</Link></li>
              <li><Link to="/about" className="text-sm text-gray-400 hover:text-red-500 transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-400 hover:text-red-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-base font-semibold uppercase tracking-wide mb-6">Connect</h4>
            <ul className="space-y-5">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-gray-400 hover:text-red-500 transition-colors group">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-instagram-line text-2xl text-red-500 group-hover:text-red-400"></i>
                  </div>
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-gray-400 hover:text-red-500 transition-colors group">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-facebook-fill text-2xl text-blue-500 group-hover:text-blue-400"></i>
                  </div>
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-gray-400 hover:text-red-500 transition-colors group">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-youtube-fill text-2xl text-red-600 group-hover:text-red-500"></i>
                  </div>
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Stay updated on exclusive offers<br />
              and event inspiration
            </p>
            <form onSubmit={handleSubmit} className="relative">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address" 
                className="w-full bg-white/10 border border-white/20 rounded-full px-6 py-4 pr-16 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                required
              />
              <button 
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-red-500 transition-all group cursor-pointer"
              >
                <i className="ri-arrow-right-line text-xl text-black group-hover:text-white"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">© 2025 RR Mobile Music Entertainment. All rights reserved.</p>
            <a 
              href="https://kyroscoe.com"
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-gray-500 hover:text-red-500 transition-colors"
            >
              Powered by Kyroscoe
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
