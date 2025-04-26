import React, { useEffect, useRef } from 'react';

import { useContext } from 'react';
import { DarkModeContext } from '../layout/DarkModeContext';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
}

interface Line {
  from: Particle;
  to: Particle;
  width: number;
  color: string;
  opacity: number;
}

const NetworkAnimation: React.FC = () => {
  const { darkMode } = useContext(DarkModeContext);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  
  
  useEffect(() => {
    const handleDarkModeChange = () => {
      if (canvasRef.current) {
        initCanvas();
        animate();
      }
    };
    
    window.addEventListener('darkModeChange', handleDarkModeChange);
    
    return () => {
      window.removeEventListener('darkModeChange', handleDarkModeChange);
    };
  }, [darkMode]);
  

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let particles: Particle[] = [];
    let lines: Line[] = [];
    let width = 0;
    let height = 0;
    
    const gradientColors = darkMode ? [
      '#10B981', // emerald
      '#3B82F6', // blue
      '#059669', // green
      '#6366F1', // indigo
    ] : [
      '#059669', // green
      '#10B981', // emerald
      '#3B82F6', // blue
      '#F87171', // red
    ];
    
    const initCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      createParticles();
    };
    
    const createParticles = () => {
      particles = [];
      const particleCount = Math.min(Math.floor(width * height / 30000), 80);
      
      for (let i = 0; i < particleCount; i++) {
        const color = gradientColors[Math.floor(Math.random() * gradientColors.length)];
        
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          color,
        });
      }
    };
    
    const createLines = () => {
      lines = [];
      const maxDistance = Math.min(width, height) / 3;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            lines.push({
              from: particles[i],
              to: particles[j],
              width: 1,
              color: particles[i].color,
              opacity: 1 - distance / maxDistance,
            });
          }
        }
      }
    };
    
    const updateParticles = () => {
      for (let particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > width) {
          particle.vx *= -1;
        }
        
        if (particle.y < 0 || particle.y > height) {
          particle.vy *= -1;
        }
      }
      
      createLines();
    };
    
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw lines
      for (let line of lines) {
        ctx.beginPath();
        ctx.moveTo(line.from.x, line.from.y);
        ctx.lineTo(line.to.x, line.to.y);
        ctx.strokeStyle = line.color + Math.floor(line.opacity * 50).toString(16).padStart(2, '0');
        ctx.lineWidth = line.width;
        ctx.stroke();
      }
      
      // Draw particles
      for (let particle of particles) {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      }
    };
    
    const animate = () => {
      updateParticles();
      draw();
      animationRef.current = requestAnimationFrame(animate);
    };
    
    const handleResize = () => {
      initCanvas();
    };
    
    initCanvas();
    animate();
     
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [darkMode]);
  
  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950' : 'bg-gradient-to-b from-white via-gray-100 to-gray-50'}`}
      key={darkMode ? 'dark' : 'light'}
    />
  );
};

export default NetworkAnimation;