export default function Features() {
  const features = [
    {
      icon: 'ri-music-2-line',
      title: 'Premium Sound System',
      description: 'Crystal-clear audio with professional-grade speakers and equipment',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      icon: 'ri-lightbulb-flash-line',
      title: 'Dynamic Lighting',
      description: 'State-of-the-art LED lighting systems to set the perfect mood',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    {
      icon: 'ri-playlist-line',
      title: 'Custom Playlists',
      description: 'Personalized music selections tailored to your event and preferences',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: 'ri-calendar-check-line',
      title: 'Event Coordination',
      description: 'Professional planning and seamless execution from start to finish',
      bgColor: 'bg-amber-50',
      iconColor: 'text-amber-600'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-purple-50/30 to-orange-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-gray-900 leading-tight">
            <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">State-of-the-Art</span> Equipment &<br />
            <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">Customized</span> Playlists
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden h-[420px]"
            >
              <div className={`${feature.bgColor} h-3/4 flex items-center justify-center`}>
                <div className={`w-24 h-24 flex items-center justify-center ${feature.iconColor}`}>
                  <i className={`${feature.icon} text-7xl`}></i>
                </div>
              </div>
              <div className="p-6 h-1/4 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
