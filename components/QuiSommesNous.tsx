"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { safeWindow } from '@/lib/safeWindow';
import { VideoPlayer } from '@/components/VideoPlayer';

const QuiSommesNous = () => {
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
    <section id="qui-sommes-nous" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Video Column - Second on mobile, first on desktop */}
          <motion.div
            className="relative order-2 lg:order-1 w-full"
            variants={itemVariants}
          >
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-purple-500 w-full"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <VideoPlayer 
                src="https://player.vimeo.com/video/1126659044?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1"
                title="À propos de Cliq"
              />
            </motion.div>
          </motion.div>

          {/* Content Column - First on mobile, second on desktop */}
          <motion.div
            className="relative order-1 lg:order-2"
            variants={itemVariants}
          >
            <div className="relative bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl">
              {/* Speech bubble tail */}
              <div className="absolute -left-3 sm:-left-4 top-6 sm:top-8 w-0 h-0 border-t-[15px] sm:border-t-[20px] border-b-[15px] sm:border-b-[20px] border-r-[15px] sm:border-r-[20px] border-transparent border-r-purple-600"></div>
              
              {/* Tab */}
              <motion.div
                className="absolute -top-2 sm:-top-3 left-4 sm:left-6 bg-purple-500 rounded-full px-3 sm:px-4 py-1 sm:py-2 text-white text-xs sm:text-sm font-medium"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Qui Sommes-Nous
              </motion.div>

              {/* Content */}
              <motion.div
                className="text-white space-y-4 sm:space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                  Une Équipe Passionnée au Service de Votre Vision
                </h2>
                
                <p className="text-purple-100 leading-relaxed text-sm sm:text-base">
                  Chez Cliq, nous sommes une équipe de créatifs et de stratèges passionnés, 
                  dédiés à transformer vos idées en réalité. Notre expertise couvre tous les 
                  aspects du marketing digital et de la communication.
                </p>

                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <motion.div
                    className="flex items-center gap-1.5 sm:gap-2 bg-white/10 rounded-lg px-2 sm:px-3 py-2 backdrop-blur-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                  >
                    <div className="w-1.5 h-1.5 bg-purple-300 rounded-full flex-shrink-0"></div>
                    <span className="text-purple-100 text-[10px] sm:text-xs md:text-sm font-bold">Marketing d&apos;influence</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-1.5 sm:gap-2 bg-white/10 rounded-lg px-2 sm:px-3 py-2 backdrop-blur-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                  >
                    <div className="w-1.5 h-1.5 bg-purple-300 rounded-full flex-shrink-0"></div>
                    <span className="text-purple-100 text-[10px] sm:text-xs md:text-sm font-bold">Brand Content</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-1.5 sm:gap-2 bg-white/10 rounded-lg px-2 sm:px-3 py-2 backdrop-blur-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.75 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                  >
                    <div className="w-1.5 h-1.5 bg-purple-300 rounded-full flex-shrink-0"></div>
                    <span className="text-purple-100 text-[10px] sm:text-xs md:text-sm font-bold">Événements</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-1.5 sm:gap-2 bg-white/10 rounded-lg px-2 sm:px-3 py-2 backdrop-blur-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                  >
                    <div className="w-1.5 h-1.5 bg-purple-300 rounded-full flex-shrink-0"></div>
                    <span className="text-purple-100 text-[10px] sm:text-xs md:text-sm font-bold">Développement Web</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-1.5 sm:gap-2 bg-white/10 rounded-lg px-2 sm:px-3 py-2 backdrop-blur-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.85 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                  >
                    <div className="w-1.5 h-1.5 bg-purple-300 rounded-full flex-shrink-0"></div>
                    <span className="text-purple-100 text-[10px] sm:text-xs md:text-sm font-bold">Création de contenu/UGC</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-1.5 sm:gap-2 bg-white/10 rounded-lg px-2 sm:px-3 py-2 backdrop-blur-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                  >
                    <div className="w-1.5 h-1.5 bg-purple-300 rounded-full flex-shrink-0"></div>
                    <span className="text-purple-100 text-[10px] sm:text-xs md:text-sm font-bold">Graphisme</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-1.5 sm:gap-2 bg-white/10 rounded-lg px-2 sm:px-3 py-2 backdrop-blur-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.95 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                  >
                    <div className="w-1.5 h-1.5 bg-purple-300 rounded-full flex-shrink-0"></div>
                    <span className="text-purple-100 text-[10px] sm:text-xs md:text-sm font-bold">Community Management</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-1.5 sm:gap-2 bg-white/10 rounded-lg px-2 sm:px-3 py-2 backdrop-blur-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                  >
                    <div className="w-1.5 h-1.5 bg-purple-300 rounded-full flex-shrink-0"></div>
                    <span className="text-purple-100 text-[10px] sm:text-xs md:text-sm font-bold">Film Making</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Bottom elements */}
              <motion.div
                className="flex items-center justify-between mt-6 sm:mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/20 rounded-full px-2 sm:px-3 py-1 text-white text-xs sm:text-sm">
                  Cliq
                </div>
                <motion.button
                  className="bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-full px-4 sm:px-6 py-2 sm:py-3 font-semibold flex items-center gap-2 hover:from-purple-700 hover:to-purple-800 transition-all duration-300 text-xs sm:text-sm"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => safeWindow?.open('https://docs.google.com/forms/d/e/1FAIpQLSfz4a-fOs9EYhxgqzs4MLun-5ZkMjOshC3Yj2fkhkfVF0xWog/viewform?usp=header', '_blank', 'noopener,noreferrer')}
                >
                  DEMANDER UN DEVIS
                  <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuiSommesNous;