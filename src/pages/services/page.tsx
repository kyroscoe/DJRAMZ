import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const services = [
    {
      icon: 'ri-heart-3-line',
      title: 'Wedding Receptions',
      description: 'Make your special day unforgettable with romantic music selections, elegant lighting, and seamless transitions from ceremony to reception. We work closely with you to create the perfect soundtrack for your love story.',
      features: ['Custom playlist creation', 'Ceremony & reception music', 'First dance coordination', 'Guest requests management'],
      image: 'https://readdy.ai/api/search-image?query=Elegant%20wedding%20reception%20with%20professional%20DJ%20booth%2C%20romantic%20soft%20lighting%20in%20warm%20tones%2C%20beautiful%20decorated%20venue%20with%20dancing%20bride%20and%20groom%2C%20sophisticated%20celebration%20atmosphere%2C%20luxury%20wedding%20photography%20style%2C%20joyful%20guests%20celebrating&width=800&height=600&seq=wedding-service-detail-001&orientation=landscape',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: 'ri-briefcase-line',
      title: 'Corporate Events',
      description: 'Elevate your business gatherings with professional entertainment. From product launches to annual galas, we provide sophisticated sound systems and ambient lighting that enhance your corporate image.',
      features: ['Professional sound systems', 'Ambient background music', 'Microphone & PA setup', 'Brand-aligned playlists'],
      image: 'https://readdy.ai/api/search-image?query=Modern%20corporate%20event%20with%20professional%20DJ%20setup%2C%20sleek%20business%20venue%20with%20contemporary%20lighting%2C%20executives%20and%20professionals%20networking%2C%20sophisticated%20atmosphere%2C%20high-end%20corporate%20party%20with%20elegant%20decor%2C%20professional%20event%20photography&width=800&height=600&seq=corporate-service-detail-001&orientation=landscape',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'ri-cake-3-line',
      title: 'Birthday Parties',
      description: 'Turn your birthday celebration into an epic party! Whether it\'s a milestone birthday or an intimate gathering, we bring the energy with high-quality sound, dynamic lighting, and music that keeps everyone dancing.',
      features: ['Age-appropriate playlists', 'Interactive entertainment', 'Party games coordination', 'Special moment announcements'],
      image: 'https://readdy.ai/api/search-image?query=Vibrant%20birthday%20party%20celebration%20with%20DJ%20entertainment%2C%20colorful%20party%20lighting%20and%20decorations%2C%20excited%20guests%20dancing%20and%20celebrating%2C%20festive%20balloons%20and%20decor%2C%20energetic%20party%20atmosphere%2C%20professional%20event%20photography%20style&width=800&height=600&seq=birthday-service-detail-001&orientation=landscape',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'ri-building-line',
      title: 'School Events',
      description: 'Create memorable experiences for proms, homecomings, and school dances. We provide age-appropriate music, professional lighting effects, and a safe, fun environment for students to celebrate.',
      features: ['Age-appropriate content', 'School-approved playlists', 'Chaperoned events', 'Interactive dance activities'],
      image: 'https://readdy.ai/api/search-image?query=High%20school%20prom%20or%20homecoming%20dance%20with%20DJ%20entertainment%2C%20teenagers%20dancing%20in%20formal%20attire%2C%20colorful%20party%20lighting%20effects%2C%20decorated%20gymnasium%20or%20ballroom%2C%20festive%20celebration%20atmosphere%2C%20professional%20school%20event%20photography&width=800&height=600&seq=school-service-detail-001&orientation=landscape',
      color: 'from-teal-500 to-emerald-500'
    },
    {
      icon: 'ri-community-line',
      title: 'Community Events',
      description: 'Bring your community together with professional entertainment for festivals, fundraisers, and neighborhood gatherings. We provide powerful sound systems and engaging music for crowds of all sizes.',
      features: ['Large venue sound systems', 'Diverse music selection', 'Crowd engagement', 'Outdoor event expertise'],
      image: 'https://readdy.ai/api/search-image?query=Outdoor%20community%20festival%20with%20DJ%20stage%20setup%2C%20diverse%20crowd%20of%20people%20enjoying%20music%20and%20dancing%2C%20sunny%20day%20celebration%2C%20colorful%20event%20tents%20and%20decorations%2C%20family-friendly%20atmosphere%2C%20professional%20event%20photography%20style&width=800&height=600&seq=community-service-detail-001&orientation=landscape',
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: 'ri-music-2-line',
      title: 'Private Parties',
      description: 'Whether it\'s a house party, anniversary, or just a reason to celebrate, we transform your venue into a nightclub experience with premium sound, stunning lighting, and non-stop entertainment.',
      features: ['Customized music mixes', 'Professional lighting setup', 'Fog & special effects', 'Karaoke options available'],
      image: 'https://readdy.ai/api/search-image?query=Energetic%20private%20house%20party%20with%20professional%20DJ%20setup%2C%20friends%20dancing%20and%20celebrating%20in%20modern%20home%2C%20vibrant%20colorful%20lighting%20effects%2C%20intimate%20party%20atmosphere%2C%20contemporary%20interior%2C%20fun%20celebration%20photography%20style&width=800&height=600&seq=private-service-detail-001&orientation=landscape',
      color: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block border-2 border-red-500 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold uppercase tracking-wide">Our Services</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-6">
            Professional DJ Services<br />
            <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">For Every Occasion</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From intimate gatherings to large-scale events, we deliver exceptional entertainment experiences with state-of-the-art equipment and personalized service.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-6`}>
                    <i className={`${service.icon} text-3xl text-white`}></i>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-6 h-6 flex items-center justify-center bg-green-100 rounded-full">
                          <i className="ri-check-line text-green-600 text-sm"></i>
                        </div>
                        <span className="text-base text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to="/booking" 
                    className="inline-block bg-red-600 text-white px-8 py-3 rounded-full text-base font-bold hover:bg-red-700 transition-all whitespace-nowrap"
                  >
                    Book This Service
                  </Link>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px]">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-red-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Book Your Event?</h2>
          <p className="text-xl mb-8 text-white/90">
            Let's create an unforgettable experience together. Check our availability and secure your date today.
          </p>
          <Link 
            to="/booking" 
            className="inline-block bg-white text-red-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all whitespace-nowrap"
          >
            Check Availability
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
