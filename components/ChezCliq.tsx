"use client";

import { motion } from 'framer-motion';

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
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="chez-cliq" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Title */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8"
            variants={itemVariants}
          >
            <motion.span 
              className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent inline-block"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              Chez Cliq
            </motion.span>
          </motion.h2>
        </motion.div>
        
        {/* Video Section */}
        <motion.div
          className="flex justify-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl border-2 sm:border-4 border-purple-500"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            style={{
              width: '100%',
              maxWidth: '400px',
              aspectRatio: '9/16' // Vertical video aspect ratio
            }}
          >
            <div style={{padding:"177.78% 0 0 0",position:"relative"}}>
              <iframe 
                src="https://player.vimeo.com/video/1126504474?badge=0&autopause=0&player_id=0&app_id=58479" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  borderRadius: '8px'
                }} 
                title="Chez Cliq - Behind the Scenes"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChezCliq;
