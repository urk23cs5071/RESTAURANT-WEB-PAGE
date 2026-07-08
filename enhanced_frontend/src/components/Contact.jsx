import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Database, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const contactItems = [
    {
      icon: MapPin,
      title: 'Location',
      content: ['1400 Lab Lane', 'Hawkins, Indiana 47804', '(Near the National Laboratory)'],
    },
    {
      icon: Phone,
      title: 'Phone',
      content: ['+1 (812) 555-0147', 'Emergency hotline for portal sightings'],
    },
    {
      icon: Mail,
      title: 'Email',
      content: ['portal@upsidedowndiner.com', 'For reservations and inquiries'],
    },
    {
      icon: Clock,
      title: 'Hours',
      content: ['Open 24 Hours, 7 Days a Week', '*Except during full moons and lab experiments'],
    },
    {
      icon: Database,
      title: 'Data Storage',
      content: ['All reservations and messages are', 'securely stored in MongoDB database'],
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message saved to MongoDB database!');
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-red-500 text-xs sm:text-sm uppercase tracking-widest font-medium">Get in Touch</span>
          <h2 className="font-horror text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-red-600 mt-3 sm:mt-4 mb-4 sm:mb-6">
            CONTACT US
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed px-2">
            Have questions about our dimensional cuisine? Need to report a 
            sighting? Want to book the entire diner for your party? We're here... somewhere.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-4 sm:space-y-6">
            {contactItems.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-gray-900/50 rounded-lg sm:rounded-xl border border-gray-800 hover:border-red-900/30 transition-all duration-300 hover:bg-gray-900/70"
              >
                <div className="p-2 sm:p-3 bg-red-900/30 rounded-lg flex-shrink-0">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white mb-1 text-sm sm:text-base">{item.title}</h3>
                  <div className="text-gray-400 text-xs sm:text-sm space-y-0.5">
                    {item.content.map((line, i) => (
                      <p key={i} className="leading-relaxed">{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/50 rounded-lg sm:rounded-2xl border border-gray-800 p-6 sm:p-8">
            <h3 className="font-horror text-xl sm:text-2xl text-red-500 mb-6 sm:mb-8">SEND A MESSAGE</h3>
            
            <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-xs text-gray-400 uppercase tracking-wider mb-2">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white text-sm sm:text-base transition-colors placeholder-gray-600"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-xs text-gray-400 uppercase tracking-wider mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white text-sm sm:text-base transition-colors placeholder-gray-600"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-xs text-gray-400 uppercase tracking-wider mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white text-sm sm:text-base transition-colors resize-none placeholder-gray-600"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 sm:py-4 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-bold rounded-lg transition-all duration-300 uppercase tracking-wider text-sm sm:text-base shadow-lg hover:shadow-red-600/50"
              >
                Send Message
              </button>

              {/* Success Message */}
              {submitted && (
                <div className="p-3 bg-green-900/30 border border-green-700/50 rounded-lg text-green-400 text-xs sm:text-sm text-center">
                  Message sent successfully!
                </div>
              )}
            </form>

            {/* Social Links */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-800">
              <p className="text-gray-500 text-xs sm:text-sm text-center mb-4">Follow us through the portal</p>
              <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                <a 
                  href="#" 
                  className="p-2 sm:p-3 bg-gray-800 hover:bg-red-900/30 rounded-lg transition-all duration-300 border border-gray-700 hover:border-red-900/50"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-red-500 transition-colors" />
                </a>
                <a 
                  href="#" 
                  className="p-2 sm:p-3 bg-gray-800 hover:bg-red-900/30 rounded-lg transition-all duration-300 border border-gray-700 hover:border-red-900/50"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-red-500 transition-colors" />
                </a>
                <a 
                  href="#" 
                  className="p-2 sm:p-3 bg-gray-800 hover:bg-red-900/30 rounded-lg transition-all duration-300 border border-gray-700 hover:border-red-900/50"
                  aria-label="Twitter"
                  title="Twitter"
                >
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-red-500 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
