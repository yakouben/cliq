"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight, Play, Users, Zap, Heart } from 'lucide-react';

const ChezCliq = () => {
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
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="chez-cliq" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Column - Purple Speech Bubble Card */}
          <motion.div
            className="relative lg:order-1"
            variants={itemVariants}
          >
            <div className="relative bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl p-8 shadow-2xl">
              {/* Speech bubble tail */}
              <div className="absolute -right-4 top-8 w-0 h-0 border-t-[20px] border-b-[20px] border-l-[20px] border-transparent border-l-purple-600"></div>
              
              {/* Tab */}
              <motion.div
                className="absolute -top-3 left-6 bg-purple-500 rounded-full px-4 py-2 text-white text-sm font-medium"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Chez Cliq
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
                  L&apos;Esprit Cliq : Créativité, Innovation & Passion
                </h2>
                
                <p className="text-purple-100 leading-relaxed">
                  Découvrez l&apos;univers unique de Cliq, où chaque projet est une nouvelle aventure créative. 
                  Notre équipe passionnée transforme vos idées en expériences digitales exceptionnelles.
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
                    <span className="text-purple-100">Équipe créative passionnée</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                    <span className="text-purple-100">Innovation constante</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                    <span className="text-purple-100">Approche personnalisée</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                    <span className="text-purple-100">Excellence dans chaque détail</span>
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
                  DÉCOUVRIR NOTRE ÉQUIPE
                  <ArrowUpRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Video */}
          <motion.div
            className="relative lg:order-2 w-full"
            variants={itemVariants}
          >
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-purple-500 w-full"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div 
                style={{
                  padding: '75% 0 0 0',
                  position: 'relative',
                  width: '100%'
                }}
              >
                <iframe 
                  src="https://player.vimeo.com/video/1126504474?badge=0&autopause=0&autoplay=1&loop=1&player_id=0&app_id=58479" 
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
                  title="Chez Cliq - Behind the Scenes"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChezCliq;