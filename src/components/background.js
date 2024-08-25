// src/components/BackgroundEffect.js

import React, { useEffect, useRef } from "react";
import "./background.css";

const BackgroundEffect = () => {
  const canvasRef = useRef(null);
  const dots = useRef([]);
  const numDots = 100; // Number of dots
  const maxDistance = 150; // Maximum distance to connect dots

  // Function to create random floating dots
  const createDots = () => {
    for (let i = 0; i < numDots; i++) {
      dots.current.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: Math.random() * 0.5 - 0.25, // Small horizontal velocity
        vy: Math.random() * 0.5 - 0.25, // Small vertical velocity
        radius: 2 + Math.random() * 2, // Random size for the dots
      });
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size to the window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create dots
    createDots();

    // Animation loop to update the canvas
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.current.forEach((dot) => {
        // Move dots
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Bounce dots off the walls
        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;

        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = "gold";
        ctx.fill();

        // Draw lines between close dots
        dots.current.forEach((otherDot) => {
          if (dot !== otherDot) {
            const dx = dot.x - otherDot.x;
            const dy = dot.y - otherDot.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < maxDistance) {
              ctx.beginPath();
              ctx.moveTo(dot.x, dot.y);
              ctx.lineTo(otherDot.x, otherDot.y);
              ctx.strokeStyle = `rgba(255, 215, 0, ${1 - distance / maxDistance})`; // Fade line based on distance
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Update canvas size on window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="background-canvas"></canvas>;
};

export default BackgroundEffect;
