"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface RibbonTextProps {
  text: string;
  className?: string;
  strokeColor?: string;
  fillColor?: string;
  duration?: number;
}

const RibbonText = ({ 
  text, 
  className = "", 
  strokeColor = "#8B5CF6", 
  fillColor = "#FFFFFF",
  duration = 4 
}: RibbonTextProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className={`relative ${className}`}>
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-6xl font-bold text-purple-600 opacity-30">{text}</span>
        </div>
      </div>
    );
  }

  // Create responsive ribbon paths based on screen size
  const ribbonPath = "M 30 80 Q 100 20 200 70 Q 300 120 400 30 Q 500 0 600 50 Q 700 90 800 30 Q 900 0 1000 40";
  
  // Create text path for the ribbon
  const textPath = "M 30 80 Q 100 20 200 70 Q 300 120 400 30 Q 500 0 600 50 Q 700 90 800 30 Q 900 0 1000 40";

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 1030 150"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.2))' }}
      >
        {/* Outer Shadow Path */}
        <motion.path
          d={ribbonPath}
          fill="none"
          stroke="rgba(0,0,0,0.4)"
          strokeWidth="24"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: duration * 0.6,
            ease: "easeInOut"
          }}
        />
        
        {/* Main Outline Path */}
        <motion.path
          d={ribbonPath}
          fill="none"
          stroke={strokeColor}
          strokeWidth="20"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: duration * 0.6,
            ease: "easeInOut"
          }}
          style={{
            filter: 'drop-shadow(6px 6px 12px rgba(0,0,0,0.4))'
          }}
        />
        
        {/* Inner Highlight Path */}
        <motion.path
          d={ribbonPath}
          fill="none"
          stroke="rgba(255,255,255,0.8)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: duration * 0.6,
            delay: 0.1,
            ease: "easeInOut"
          }}
        />
        
        {/* Ribbon Fill Path */}
        <motion.path
          d={ribbonPath}
          fill="none"
          stroke={fillColor}
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: duration * 0.6,
            delay: 0.2,
            ease: "easeInOut"
          }}
        />
        
        {/* Text following the path */}
        <motion.text
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: duration * 0.4, duration: 0.8 }}
        >
          <textPath
            href={`#textPath-${text.replace(/\s+/g, '-')}`}
            startOffset="0%"
            className="text-5xl font-black fill-purple-700"
            style={{ 
              fontFamily: 'Arial, sans-serif',
              textShadow: '3px 3px 6px rgba(0,0,0,0.5), 1px 1px 2px rgba(255,255,255,0.9)',
              fontSize: '52px',
              stroke: 'rgba(255,255,255,0.9)',
              strokeWidth: '2px',
              paintOrder: 'stroke fill'
            }}
          >
            {text}
          </textPath>
        </motion.text>
        
        {/* Define the text path */}
        <defs>
          <path
            id={`textPath-${text.replace(/\s+/g, '-')}`}
            d={textPath}
          />
        </defs>
        
        {/* Decorative elements */}
        <motion.circle
          cx="120"
          cy="100"
          r="6"
          fill={strokeColor}
          stroke="rgba(255,255,255,0.8)"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: duration * 0.7, duration: 0.3 }}
          style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))' }}
        />
        <motion.circle
          cx="400"
          cy="50"
          r="5"
          fill={strokeColor}
          stroke="rgba(255,255,255,0.8)"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: duration * 0.8, duration: 0.3 }}
          style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))' }}
        />
        <motion.circle
          cx="700"
          cy="25"
          r="5.5"
          fill={strokeColor}
          stroke="rgba(255,255,255,0.8)"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: duration * 0.9, duration: 0.3 }}
          style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))' }}
        />
        
        {/* Additional ribbon details */}
        <motion.path
          d="M 80 110 Q 150 120 220 110"
          fill="none"
          stroke={strokeColor}
          strokeWidth="5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: duration * 0.5, duration: 0.5 }}
          style={{ filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.2))' }}
        />
        <motion.path
          d="M 500 70 Q 600 60 700 70"
          fill="none"
          stroke={strokeColor}
          strokeWidth="5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: duration * 0.6, duration: 0.5 }}
          style={{ filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.2))' }}
        />
      </svg>
    </div>
  );
};

export default RibbonText;
