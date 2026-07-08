import { Heart, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const quickLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Reservations', href: '#reserve' },
    { name: 'Our Story', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const contactInfo = [
    { icon: MapPin, text: '1400 Lab Lane, Hawkins' },
    { icon: Phone, text: '+1 (812) 555-0147' },
    { icon: Mail, text: 'portal@upsidedowndiner.com' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-950 to-black border-t border-red-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="font-horror text-2xl sm:text-3xl text-red-600 mb-3 sm:mb-4 animate-flicker">
              THE UPSIDE DOWN
            </h2>
            <p className="text-gray-500 mb-6 max-w-md text-sm sm:text-base leading-relaxed">
              Where the food is strange and the company is stranger. 
              Step through the portal and experience dining like never before.
            </p>
            {/* Social Links */}
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  className="p-2 sm:p-3 bg-gray-900/50 hover:bg-red-900/30 rounded-lg border border-gray-800 hover:border-red-900/50 transition-all duration-300 group"
                  aria-label={social.label}
                  title={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-red-500 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4 uppercase tracking-wider text-xs sm:text-sm font-medium">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-500 hover:text-red-500 transition-colors text-sm duration-300 font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="font-bold text-white mb-4 uppercase tracking-wider text-xs sm:text-sm font-medium">Contact</h3>
            <ul className="space-y-2 sm:space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3 text-gray-500 text-sm">
                  <item.icon className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800" />

        {/* Bottom Section */}
        <div className="pt-8 sm:pt-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2 text-gray-500 text-xs sm:text-sm">
              <span>Made with</span>
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 animate-pulse" />
              <span>and a touch of the Upside Down</span>
            </div>
            <p className="text-gray-600 text-xs">
              © {currentYear} The Upside Down Diner. A fictional restaurant inspired by Stranger Things.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
