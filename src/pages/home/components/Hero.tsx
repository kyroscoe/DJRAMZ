import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden bg-black bg-no-repeat bg-contain bg-center min-h-[500px] md:h-[70vh] py-16 md:py-24"
      style={{ backgroundImage: "url('/assets/djramz.jpg')" }}
    >
      {/* Dark overlay so text is readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center w-full">
        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
          Elevate your event with professional DJ services, customized playlists, and
          state-of-the-art lighting. From weddings to corporate events and private
          parties, we create unforgettable experiences.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            to="/booking"
            className="group bg-white text-black px-8 py-4 rounded-full text-base font-bold hover:bg-red-600 hover:text-white transition-all flex items-center gap-3 whitespace-nowrap"
          >
            Book Your Event
            <span className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full group-hover:bg-white group-hover:text-black transition-all">
              <i className="ri-arrow-right-line text-xl"></i>
            </span>
          </Link>

          <Link
            to="/services"
            className="border-2 border-white text-white px-8 py-4 rounded-full text-base font-bold hover:bg-white hover:text-black transition-all whitespace-nowrap"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
