"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';
import { useState, useEffect } from 'react';

const RealizationsSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  if (!isClient) {
    return (
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Right - Purple Speech Bubble Card (First on mobile) */}
            <div className="relative lg:order-2">
              <div className="relative bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl p-8 shadow-2xl">
                {/* Speech bubble tail */}
                <div className="absolute -left-4 top-8 w-0 h-0 border-t-[20px] border-b-[20px] border-r-[20px] border-transparent border-r-purple-600"></div>
                
                {/* Tab */}
                <div className="absolute -top-3 left-6 bg-purple-500 rounded-full px-4 py-2 text-white text-sm font-medium">
                  Nos Réalisations
                </div>

                {/* Content */}
                <div className="text-white space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                    Une Agence Créative au Service de Votre Vision
                  </h2>
                  
                  <p className="text-purple-100 leading-relaxed">
                    Chez Cliq, nous transformons vos concepts en contenus visuels exceptionnels. 
                    Notre approche créative et notre expertise technique nous permettent de créer 
                    des vidéos qui marquent les esprits et génèrent des résultats concrets.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                      <span className="text-purple-100">Production vidéo professionnelle</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                      <span className="text-purple-100">Stratégie créative sur mesure</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                      <span className="text-purple-100">Équipe d&apos;experts dédiés</span>
                    </div>
                  </div>
                </div>

                {/* Bottom elements */}
                <div className="flex items-center justify-between mt-8">
                  <div className="bg-white/20 rounded-full px-3 py-1 text-white text-sm">
                    Cliq
                  </div>
                  <button className="bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-full px-6 py-3 font-semibold flex items-center gap-2 hover:from-purple-700 hover:to-purple-800 transition-all duration-300">
                    DÉCOUVRIR NOS SERVICES
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Left - Video (Second on mobile) */}
            <div className="relative lg:order-1 w-full">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-purple-500 w-full">
                <div style={{ padding: '75% 0 0 0', position: 'relative', width: '100%' }}>
                  <iframe 
                    src="https://player.vimeo.com/video/1126662727?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      borderRadius: '20px'
                    }} 
                    title="IMG_2599"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white relative overflow-hidden">
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
          {/* Left Column - Video (Second on mobile) */}
          <motion.div
            className="relative lg:order-1 w-full"
            variants={itemVariants}
          >
            {/* Video Container */}
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-purple-500 w-full"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Vimeo Video Embed */}
              <div 
                style={{
                  padding: '75% 0 0 0',
                  position: 'relative',
                  width: '100%'
                }}
              >
                <iframe 
                  src="https://player.vimeo.com/video/1126662727?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '20px'
                  }} 
                  title="IMG_2599"
                />
              </div>
            </motion.div>

            {/* Enhanced Decorative Elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-28 h-28 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-36 h-36 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-full blur-2xl"
              animate={{
                scale: [1.3, 1, 1.3],
                opacity: [0.7, 0.4, 0.7]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>

          {/* Right Column - Purple Speech Bubble Card (First on mobile) */}
          <motion.div
            className="relative lg:order-2"
            variants={itemVariants}
          >
            <motion.div
              className="relative bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl p-8 shadow-2xl"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
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
                Nos Réalisations
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
                  Une Agence Créative au Service de Votre Vision
                </h2>
                
                <p className="text-purple-100 leading-relaxed">
                  Chez Cliq, nous transformons vos concepts en contenus visuels exceptionnels. 
                  Notre approche créative et notre expertise technique nous permettent de créer 
                  des vidéos qui marquent les esprits et génèrent des résultats concrets.
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
                    <span className="text-purple-100">Production vidéo professionnelle</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                    <span className="text-purple-100">Stratégie créative sur mesure</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                    <span className="text-purple-100">Équipe d&apos;experts dédiés</span>
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
                <motion.button
                  className="bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-full px-6 py-3 font-semibold flex items-center gap-2 hover:from-purple-700 hover:to-purple-800 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  DÉCOUVRIR NOS SERVICES
                  <ArrowUpRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RealizationsSection;