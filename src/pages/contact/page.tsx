import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
      });

      const response = await fetch('https://formspree.io/f/mwvlpygj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  const socialLinks = [
    {
      icon: 'ri-instagram-line',
      name: 'Instagram',
      handle: '@djramzindamix',
      url: 'https://www.instagram.com/p/DInCR--xR96/',
      color: 'from-pink-500 to-purple-500'
    },
    {
      icon: 'ri-facebook-fill',
      name: 'Facebook',
      handle: 'DJ Ram-Z Mobile Music',
      url: 'https://www.facebook.com/djramzindamix',
      color: 'from-blue-600 to-blue-500'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-red-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block border-2 border-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold uppercase tracking-wide">Get In Touch</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-6">
            Let's Talk About<br />
            Your Event
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Have questions? Ready to book? We're here to help make your event unforgettable.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-red-600 rounded-full mx-auto mb-4">
                  <i className={`${info.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="text-base text-gray-600 hover:text-red-600 transition-colors">
                    {info.content}
                  </a>
                ) : (
                  <p className="text-base text-gray-600">{info.content}</p>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form and we'll get back to you as soon as possible. Usually within 24 hours!
              </p>

              <form id="contact-form" data-readdy-form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors text-sm"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors text-sm"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors text-sm"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors text-sm cursor-pointer"
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="services">Services Question</option>
                    <option value="equipment">Equipment Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    maxLength={500}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors text-sm resize-none"
                    placeholder="Tell us about your event or ask us anything..."
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500 characters</p>
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border-2 border-green-500 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <i className="ri-check-line text-green-600 text-xl"></i>
                      </div>
                      <p className="text-sm font-semibold text-green-700">
                        Message sent successfully! We'll get back to you soon.
                      </p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border-2 border-red-500 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <i className="ri-error-warning-line text-red-600 text-xl"></i>
                      </div>
                      <p className="text-sm font-semibold text-red-700">
                        Something went wrong. Please try again.
                      </p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 text-white px-8 py-4 rounded-full text-base font-bold hover:bg-red-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Connect With Us</h2>
              <p className="text-lg text-gray-600 mb-8">
                Follow us on social media for event highlights, music updates, and special offers!
              </p>

              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 flex items-center justify-center bg-gradient-to-br ${social.color} rounded-xl`}>
                        <i className={`${social.icon} text-2xl text-white`}></i>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                          {social.name}
                        </h3>
                        <p className="text-sm text-gray-600">{social.handle}</p>
                      </div>
                      <div className="w-8 h-8 flex items-center justify-center">
                        <i className="ri-arrow-right-line text-xl text-gray-400 group-hover:text-red-600 transition-colors"></i>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              <div>
                <p className="text-sm text-gray-400 mt-6">
                  * Event hours are flexible based on your needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
