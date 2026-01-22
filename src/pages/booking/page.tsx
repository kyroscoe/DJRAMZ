import type React from 'react';
import { useState } from 'react';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    eventTime: '',
    venue: '',
    guestCount: '',
    duration: '',
    musicPreferences: '',
    specialRequests: '',
    lightingNeeded: 'yes',
    budget: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] =
    useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const endpoint = 'https://formspree.io/f/mwvlpygj';

      // Formspree accepts JSON with proper headers
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventType: '',
          eventDate: '',
          eventTime: '',
          venue: '',
          guestCount: '',
          duration: '',
          musicPreferences: '',
          specialRequests: '',
          lightingNeeded: 'yes',
          budget: ''
        });
      } else {
        console.error('Form backend error:', await response.text());
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Network / fetch error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-red-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block border-2 border-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold uppercase tracking-wide">
              Book Your Event
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-6">
            Let&apos;s Make Your Event
            <br />
            Unforgettable
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Fill out the form below and we&apos;ll get back to you within 24
            hours with availability and a custom quote for your event.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <form
            id="booking-form"
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Event Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Full Name *
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
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
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
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors text-sm"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="eventType"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Event Type *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors text-sm cursor-pointer"
                  >
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="school">School Event</option>
                    <option value="community">Community Event</option>
                    <option value="private">Private Party</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="eventDate"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Event Date *
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors text-sm cursor-pointer"
                  />
                </div>

                <div>
                  <label
                    htmlFor="eventTime"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Event Time *
                  </label>
                  <input
                    type="time"
                    id="eventTime"
                    name="eventTime"
                    value={formData.eventTime}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors text-sm cursor-pointer"
                  />
                </div>

                <div>
                  <label
                    htmlFor="venue"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Venue Location *
                  </label>
                  <input
                    type="text"
                    id="venue"
                    name="venue"
                    value={formData.venue}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors text-sm"
                    placeholder="City, State"
                  />
                </div>

                <div>
                  <label
                    htmlFor="guestCount"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Expected Guest Count *
                  </label>
                  <input
                    type="number"
                    id="guestCount"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    required
                    min={1}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors text-sm"
                    placeholder="100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="duration"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Event Duration (hours) *
                  </label>
                  <input
                    type="number"
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    required
                    min={1}
                    max={12}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors text-sm"
                    placeholder="4"
                  />
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors text-sm cursor-pointer"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-500">Under $500</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-2000">$1,000 - $2,000</option>
                    <option value="2000-3000">$2,000 - $3,000</option>
                    <option value="over-3000">Over $3,000</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Lighting Package Needed? *
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="lightingNeeded"
                        value="yes"
                        checked={formData.lightingNeeded === 'yes'}
                        onChange={handleChange}
                        className="w-5 h-5 text-red-600 cursor-pointer"
                      />
                      <span className="text-sm text-gray-700">
                        Yes, include lighting
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="lightingNeeded"
                        value="no"
                        checked={formData.lightingNeeded === 'no'}
                        onChange={handleChange}
                        className="w-5 h-5 text-red-600 cursor-pointer"
                      />
                      <span className="text-sm text-gray-700">
                        No, sound only
                      </span>
                    </label>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="musicPreferences"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Music Preferences
                  </label>
                  <textarea
                    id="musicPreferences"
                    name="musicPreferences"
                    value={formData.musicPreferences}
                    onChange={handleChange}
                    rows={3}
                    maxLength={500}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors text-sm resize-none"
                    placeholder="Tell us about your music preferences, favorite genres, must-play songs, etc."
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">
                    {formData.musicPreferences.length}/500 characters
                  </p>
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="specialRequests"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Special Requests or Additional Information
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors text-sm resize-none"
                    placeholder="Any special requests, specific equipment needs, or additional details we should know about?"
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">
                    {formData.specialRequests.length}/500 characters
                  </p>
                </div>
              </div>

              {submitStatus === 'success' && (
                <div className="mt-6 p-4 bg-green-50 border-2 border-green-500 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-check-line text-green-600 text-xl"></i>
                    </div>
                    <p className="text-sm font-semibold text-green-700">
                      Thank you! Your booking request has been submitted. We&apos;ll
                      contact you within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-6 p-4 bg-red-50 border-2 border-red-500 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-error-warning-line text-red-600 text-xl"></i>
                    </div>
                    <p className="text-sm font-semibold text-red-700">
                      Something went wrong. Please try again or contact us
                      directly.
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 text-white px-8 py-4 rounded-full text-base font-bold hover:bg-red-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
                </button>
              </div>
            </div>
          </form>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-red-600 rounded-full mx-auto mb-4">
                <i className="ri-time-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Quick Response
              </h3>
              <p className="text-sm text-gray-600">
                We respond to all inquiries within 24 hours
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-purple-600 rounded-full mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Secure Booking
              </h3>
              <p className="text-sm text-gray-600">
                Your information is safe and secure with us
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-teal-600 rounded-full mx-auto mb-4">
                <i className="ri-star-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Custom Packages
              </h3>
              <p className="text-sm text-gray-600">
                Tailored services to fit your event needs
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

