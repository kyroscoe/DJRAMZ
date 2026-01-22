import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: 'Weddings',
      description: 'Create magical moments with romantic ambiance, elegant music selections, and seamless transitions throughout your special day.',
      image: '/assets/wedding.jpg',
      gradient: 'from-pink-100 to-amber-100'
    },
    {
      title: 'Corporate Events',
      description: 'Professional entertainment for conferences, product launches, and company celebrations with sophisticated sound and lighting.',
      image: '/assets/corporate.jpg',
      gradient: 'from-slate-100 to-blue-100'
    },
    {
      title: 'Private Parties',
      description: 'Turn your celebration into an epic party with high-energy music, dynamic lighting, and an unforgettable atmosphere.',
      image: '/assets/pparty.jpg',
      gradient: 'from-purple-100 to-pink-100'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block border-2 border-red-500 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold text-gray-900 uppercase tracking-wide">What We Offer</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight mb-4">
            Unforgettable Experiences<br />
            For Every Celebration<br />
            You Can Imagine
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:row-span-2">
            <div className="group relative h-full min-h-[680px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <img 
                src={services[0].image} 
                alt={services[0].title}
                className="w-full h-full object-cover object-top"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${services[0].gradient} opacity-20`}></div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-8">
                <h3 className="text-3xl font-bold text-white mb-3">{services[0].title}</h3>
                <p className="text-base text-gray-200 leading-relaxed">{services[0].description}</p>
              </div>
            </div>
          </div>

          <div className="group relative h-[320px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
            <img 
              src={services[1].image} 
              alt={services[1].title}
              className="w-full h-full object-cover object-top"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${services[1].gradient} opacity-20`}></div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-8">
              <h3 className="text-3xl font-bold text-white mb-3">{services[1].title}</h3>
              <p className="text-base text-gray-200 leading-relaxed">{services[1].description}</p>
            </div>
          </div>

          <div className="group relative h-[320px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
            <img 
              src={services[2].image} 
              alt={services[2].title}
              className="w-full h-full object-cover object-top"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${services[2].gradient} opacity-20`}></div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-8">
              <h3 className="text-3xl font-bold text-white mb-3">{services[2].title}</h3>
              <p className="text-base text-gray-200 leading-relaxed">{services[2].description}</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-full text-base font-bold hover:bg-red-700 transition-all whitespace-nowrap"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
