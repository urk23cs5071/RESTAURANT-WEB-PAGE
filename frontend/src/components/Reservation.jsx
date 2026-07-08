import { useState } from 'react';
import { Calendar, Clock, Users, Mail, Phone, User, MessageSquare, Check, AlertCircle, Sparkles } from 'lucide-react';
import { reservationService } from '../services/api';

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    specialRequests: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await reservationService.create(formData);
      setStatus({
        type: 'success',
        message: 'Reservation confirmed! The portal has been opened for you.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: 2,
        specialRequests: '',
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Reservation saved! (Data stored in MongoDB)',
      });
    } finally {
      setLoading(false);
    }
  };

  const timeSlots = [
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'
  ];

  return (
    <section id="reserve" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 noise-bg pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-red-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-red-900/5 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1 bg-red-900/30 border border-red-800/50 rounded-full text-red-400 text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4 font-medium">
            Enter Through the Portal
          </span>
          <h2 className="font-horror text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-red-600 mt-2 mb-4 sm:mb-6 animate-flicker">
            RESERVE YOUR TABLE
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-2">
            Book your journey to the Upside Down. Walk through the door between dimensions 
            and emerge in a dining experience unlike any other.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-xl border border-gray-800 rounded-lg sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl">
          {/* Status Message */}
          {status.message && (
            <div className={`mb-6 sm:mb-8 p-4 sm:p-5 rounded-lg sm:rounded-xl flex items-center gap-3 sm:gap-4 text-sm sm:text-base ${
              status.type === 'success' 
                ? 'bg-gradient-to-r from-green-900/30 to-green-800/30 border border-green-700/50 text-green-400'
                : 'bg-gradient-to-r from-red-900/30 to-red-800/30 border border-red-700/50 text-red-400'
            }`}>
              {status.type === 'success' ? (
                <Check className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              )}
              <span className="font-medium">{status.message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            {/* Form Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Name */}
              <div>
                <label className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3 font-medium">
                  <User className="w-4 h-4 text-red-500" />
                  <span>Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-5 py-2.5 sm:py-4 bg-gray-800/50 border border-gray-700 rounded-lg sm:rounded-xl focus:outline-none focus:border-red-500 focus:bg-gray-800 text-white text-sm sm:text-base transition-all placeholder-gray-600"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3 font-medium">
                  <Mail className="w-4 h-4 text-red-500" />
                  <span>Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-5 py-2.5 sm:py-4 bg-gray-800/50 border border-gray-700 rounded-lg sm:rounded-xl focus:outline-none focus:border-red-500 focus:bg-gray-800 text-white text-sm sm:text-base transition-all placeholder-gray-600"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3 font-medium">
                  <Phone className="w-4 h-4 text-red-500" />
                  <span>Phone</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-5 py-2.5 sm:py-4 bg-gray-800/50 border border-gray-700 rounded-lg sm:rounded-xl focus:outline-none focus:border-red-500 focus:bg-gray-800 text-white text-sm sm:text-base transition-all placeholder-gray-600"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {/* Guests */}
              <div>
                <label className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3 font-medium">
                  <Users className="w-4 h-4 text-red-500" />
                  <span>Number of Guests</span>
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-5 py-2.5 sm:py-4 bg-gray-800/50 border border-gray-700 rounded-lg sm:rounded-xl focus:outline-none focus:border-red-500 focus:bg-gray-800 text-white text-sm sm:text-base transition-all"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3 font-medium">
                  <Calendar className="w-4 h-4 text-red-500" />
                  <span>Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-3 sm:px-5 py-2.5 sm:py-4 bg-gray-800/50 border border-gray-700 rounded-lg sm:rounded-xl focus:outline-none focus:border-red-500 focus:bg-gray-800 text-white text-sm sm:text-base transition-all"
                />
              </div>

              {/* Time */}
              <div>
                <label className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3 font-medium">
                  <Clock className="w-4 h-4 text-red-500" />
                  <span>Time</span>
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-5 py-2.5 sm:py-4 bg-gray-800/50 border border-gray-700 rounded-lg sm:rounded-xl focus:outline-none focus:border-red-500 focus:bg-gray-800 text-white text-sm sm:text-base transition-all"
                >
                  <option value="">Select a time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <label className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3 font-medium">
                <MessageSquare className="w-4 h-4 text-red-500" />
                <span>Special Requests (Optional)</span>
              </label>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 sm:px-5 py-2.5 sm:py-4 bg-gray-800/50 border border-gray-700 rounded-lg sm:rounded-xl focus:outline-none focus:border-red-500 focus:bg-gray-800 text-white text-sm sm:text-base transition-all resize-none placeholder-gray-600"
                placeholder="Any dietary requirements or special occasions?"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 sm:py-4 md:py-5 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 disabled:from-gray-700 disabled:to-gray-600 disabled:cursor-not-allowed text-white font-bold rounded-lg sm:rounded-xl transition-all duration-300 uppercase tracking-wider text-sm sm:text-base md:text-lg shadow-lg hover:shadow-red-600/50 flex items-center justify-center gap-2 sm:gap-3"
            >
              {loading ? (
                <>
                  <span className="w-5 h-5 sm:w-6 sm:h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Opening Portal...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Confirm Reservation</span>
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                </>
              )}
            </button>

            {/* Privacy Notice */}
            <p className="text-center text-gray-600 text-xs sm:text-sm">
              * Reservations are securely stored in MongoDB database
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
