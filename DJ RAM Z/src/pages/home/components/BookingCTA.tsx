import { Link } from 'react-router-dom';

export default function BookingCTA() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/assets/photo2.jpg"
          alt="Event Dance Floor" 
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col justify-between h-full py-20">
          <div className="ml-0 mt-12">
            <h2 className="text-8xl font-bold text-white leading-tight" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.4)' }}>
              book your<br />next event
            </h2>
          </div>

          <div className="flex items-end justify-between">
            <Link 
              to="/booking"
              className="group bg-white text-black px-8 py-5 rounded-full text-base font-bold hover:bg-red-600 hover:text-white transition-all flex items-center gap-3 whitespace-nowrap"
            >
              Launch Booking App
              <span className="w-14 h-14 flex items-center justify-center bg-black text-white rounded-full group-hover:bg-white group-hover:text-black transition-all">
                <i className="ri-calendar-line text-2xl"></i>
              </span>
            </Link>

            <div className="text-right">
              <p className="text-2xl text-white font-light leading-relaxed" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.4)' }}>
                Real-time availability & instant<br />
                confirmation in just a few clicks
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
