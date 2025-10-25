"use client";

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useEffect, useState } from 'react';

interface VideoPlayerProps {
  src: string;
  title: string;
  className?: string;
}

export const VideoPlayer = ({ src, title, className = "" }: VideoPlayerProps) => {
  const { ref, hasIntersected, isMounted } = useIntersectionObserver({
    threshold: 0.05,
    rootMargin: '50px',
    triggerOnce: true,
  });
  
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    if (isMounted && hasIntersected) {
      // Add a small delay to ensure the element is fully visible
      const timer = setTimeout(() => {
        setShouldLoadVideo(true);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isMounted, hasIntersected]);

  return (
    <div 
      ref={ref}
      style={{
        padding: '75% 0 0 0',
        position: 'relative',
        width: '100%'
      }}
      className={className}
    >
      {shouldLoadVideo ? (
        <iframe 
          src={src}
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
          title={title}
        />
      ) : (
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '20px',
            backgroundColor: '#f3f4f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#6b7280'
          }}
        >
          Loading video...
        </div>
      )}
    </div>
  );
};
