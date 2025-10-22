"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const services = [
    "Marketing d'influence",
    "Social Media", 
    "Brand Content",
    "Événementiel",
    "Développement Web"
  ];

  const socialLinks = [
    { 
      icon: MessageCircle, 
      name: "WhatsApp", 
      href: "https://wa.me/213558497591",
      text: "+213 558 49 75 91"
    },
    { 
      icon: Instagram, 
      name: "Instagram", 
      href: "https://www.instagram.com/cliqevents_off?igsh=MTlqNW43OXpwMGE2eQ==",
      text: "@cliqevents_off"
    }
  ];

  return (
    <footer id="footer" className="relative gradient-purple text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Image 
                  src="/logo-without-bg.png" 
                  alt="Cliq Logo" 
                  width={32} 
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold">Cliq</span>
            </div>
            
            <p className="text-white/90 text-base leading-relaxed max-w-sm">
              Agence 360° spécialisée en marketing d&apos;influence, communication et branding premium.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-white/80" />
                <a href="mailto:cliqevents3@gmail.com" className="text-white/90 hover:text-white transition-colors text-sm">
                  cliqevents3@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-white/80" />
                <a href="tel:+213540017730" className="text-white/90 hover:text-white transition-colors text-sm">
                  +213 558 49 75 91
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-white/80" />
                <span className="text-white/90 text-sm">Draria Alger, Algérie</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-white/90 hover:text-white transition-colors text-sm block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Contactez-nous</h3>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 group"
                  aria-label={social.name}
                >
                  <div className="w-10 h-10 bg-white/20 group-hover:bg-white/30 rounded-lg flex items-center justify-center text-white/80 group-hover:text-white transition-all duration-200">
                    <social.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{social.name}</p>
                    <p className="text-white/80 text-sm">{social.text}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <p className="text-white/70 text-sm">
              © 2025 Cliq Events. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6 text-sm text-white/70">
              <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
