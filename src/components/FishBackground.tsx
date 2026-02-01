import { useEffect, useRef } from 'react';
import fishImgSrc from '../assets/images/fish.svg';

export function FishBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let scrollY = window.scrollY;

    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);

    const fishImage = new Image();
    fishImage.src = fishImgSrc;

    class Fish {
      x: number;
      y: number;
      baseY: number;
      speed: number;
      size: number;
      direction: number; // 1 for right, -1 for left
      parallaxFactor: number;
      wobbleOffset: number;
      wobbleSpeed: number;

      constructor() {
        this.direction = Math.random() > 0.5 ? 1 : -1;
        // Reducing size to match "1 to 2.5 cm" roughly. 
        // Assuming base image is large, we reduce scale significantly. 
        // 1cm ~ 38px. If image is 1024px, we need 0.04 scale for 1cm.
        // Let's go with a slightly visible range: 0.08 to 0.12 scale.
        this.size = Math.random() * 0.03 + 0.06; 
        this.x = Math.random() * width;
        this.baseY = Math.random() * height * 1.5; // Spread vertically
        this.y = this.baseY;
        this.speed = (Math.random() * 1 + .8) * this.direction;
        this.parallaxFactor = Math.random() * 0.2 + 0.05;
        this.wobbleOffset = Math.random() * Math.PI * 2;
        this.wobbleSpeed = Math.random() * 0.06 + 0.015;
      }

      update() {
        this.x += this.speed;
        this.wobbleOffset += this.wobbleSpeed;

        // Gentle vertical wobble to simulate swimming
        const wobble = Math.sin(this.wobbleOffset) * 10; 

        // Wrap around horizontally
        const hBuffer = 300; // Large buffer for the image
        if (this.direction === 1 && this.x > width + hBuffer) {
            this.x = -hBuffer;
            this.baseY = Math.random() * height + scrollY; 
        } else if (this.direction === -1 && this.x < -hBuffer) {
            this.x = width + hBuffer;
            this.baseY = Math.random() * height + scrollY;
        }

        this.y = this.baseY - scrollY * this.parallaxFactor + wobble;

        // Wrap around vertically (Infinite Scroll Effect)
        const vBuffer = 200; // Buffer so they don't pop in/out visibly
        
        // If fish moves above the viewport
        if (this.y < -vBuffer) {
            // Respawn at bottom
            // We want newY = height + vBuffer
            // height + vBuffer = newBaseY - scrollY * parallax + wobble
            // newBaseY = height + vBuffer + scrollY * parallax - wobble
            this.baseY = (height + vBuffer) + scrollY * this.parallaxFactor - wobble;
            this.y = height + vBuffer; // Force update to avoid jitter
        }
        // If fish moves below the viewport
        else if (this.y > height + vBuffer) {
            // Respawn at top
            // We want newY = -vBuffer
            // -vBuffer = newBaseY - scrollY * parallax + wobble
            // newBaseY = -vBuffer + scrollY * parallax - wobble
            this.baseY = (-vBuffer) + scrollY * this.parallaxFactor - wobble;
            this.y = -vBuffer;
        }
      }

      draw() {
        if (!ctx || !fishImage.complete) return;
        
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.scale(this.direction * this.size, this.size); 
        
        // Remove black background from the image using screen blending
        ctx.globalCompositeOperation = 'screen';
        
        // Draw image centered
        // Assuming image is roughly 512x512 or similar. 
        // We draw it relative to its center.
        const imgWidth = fishImage.naturalWidth || 100;
        const imgHeight = fishImage.naturalHeight || 100;
        
        ctx.drawImage(fishImage, -imgWidth / 2, -imgHeight / 2);

        ctx.restore();
      }
    }

    const fishes: Fish[] = [];
    const fishCount = 10; // Reduced count

    // Initialize fishes only after image loads to ensure dimensions are known?
    // Or just start loop and they draw when ready.
    for (let i = 0; i < fishCount; i++) {
        fishes.push(new Fish());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      fishes.forEach(f => {
        f.update();
        f.draw();
      });

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1] pointer-events-none"
    />
  );
}
