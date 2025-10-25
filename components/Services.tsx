"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useMemo } from 'react';

const Services = () => {
  const services = useMemo(() => [
    {
      title: "Marketing d'influence",
      description: "Accompagnement ponctuel ou annuel avec nos équipes de gestion de projet et planning stratégique pour des campagnes créatives.",
      icon: "/baff.png",
      features: ["Campagnes créatives", "Planning stratégique", "Gestion de projet"]
    },
    
    {
      title: "Brand Content",
      description: "Accompagnement dans vos productions de contenus photos et vidéos pour renforcer votre identité de marque.",
      icon: "/medal.png",
      features: ["Production photo", "Production vidéo", "Identité de marque"]
    },
    {
      title: "Organisation d'événement",
      description: "Organisation complète d'événements, gestion logistique, coordination des prestataires et mise en place d'expériences mémorables.",
      icon: "/calendar.png",
      features: ["Gestion logistique", "Coordination prestataires", "Expériences mémorables"]
    },
    {
      title: "Expérience de marque",
      description: "Organisation d'événements locaux, set design, recherche de prestataires et logistique pour des événements impactants.",
      icon: "/target.png",
      features: ["Set design", "Événements locaux", "Recherche prestataires"]
    },
    {
      title: "Stratégie et formations",
      description: "Accompagnement dans vos réflexions stratégiques et création de guidelines locales Influence/Social Média.",
      icon: "/key.png",
      features: ["Réflexions stratégiques", "Guidelines locales", "Formations"]
    },
    {
      title: "Développement Web",
      description: "Création de sites web modernes, applications web et solutions digitales sur mesure pour votre entreprise.",
      icon: "/dev.png",
      features: ["Sites web modernes", "Applications web", "Solutions sur mesure"]
    }
  ], []);

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  }), []);

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, #9b5de5 1px, transparent 1px),
                           radial-gradient(circle at 80% 80%, #f15bb5 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
          backgroundPosition: '0 0, 50px 50px'
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-100/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-100/30 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Column - Services Grid */}
            <motion.div
            className="relative lg:order-1 w-full"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  {/* Service Icon */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 relative">
                        <Image
                          src={service.icon}
                          alt={service.title}
                          fill
                        className="object-contain"
                          quality={75}
                      />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Service Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              </div>
            </motion.div>

          {/* Right Column - Purple Speech Bubble Card */}
          <motion.div
            className="relative lg:order-2"
            variants={itemVariants}
          >
            <div className="relative bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl p-8 shadow-2xl">
              {/* Speech bubble tail */}
              <div className="absolute -left-4 top-8 w-0 h-0 border-t-[20px] border-b-[20px] border-r-[20px] border-transparent border-r-purple-600"></div>
              
              {/* Tab */}
              <motion.div
                className="absolute -top-3 left-6 bg-purple-500 rounded-full px-4 py-2 text-white text-sm font-medium"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Nos Offres
        </motion.div>

              {/* Content */}
        <motion.div
                className="text-white space-y-6"
                initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
                <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                  Des Solutions Complètes pour Votre Croissance
                </h2>
                
                <p className="text-purple-100 leading-relaxed">
                  De la stratégie à l&apos;exécution, nous vous accompagnons avec une approche 
                  créative et des solutions sur mesure pour transformer votre présence digitale 
                  et atteindre vos objectifs business.
                </p>

                <div className="space-y-4">
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                    <span className="text-purple-100">Stratégie personnalisée</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                    <span className="text-purple-100">Exécution créative</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                    <span className="text-purple-100">Résultats mesurables</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Bottom elements */}
              <motion.div
                className="flex items-center justify-between mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/20 rounded-full px-3 py-1 text-white text-sm">
                  Cliq
                </div>
                <motion.a
                  href="#qui-sommes-nous"
                  className="bg-black text-white rounded-full px-6 py-3 font-semibold flex items-center gap-2 hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  DÉCOUVRIR NOS SERVICES
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;