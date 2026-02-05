import { useEffect, useRef } from 'react';
import jellyImgSrc from '../assets/images/jelly.png';
import fishImgSrc from '@/assets/FishesBackground/fish.png';
import shrimpImgSrc from '@/assets/FishesBackground/shrimmp.png';


type CreatureType = 'shrimp' | 'jelly' | 'fish';

interface CreatureConfig {
  type: CreatureType;
  src: string;
  count: number;
  baseSize: number;
}

const CREATURES: CreatureConfig[] = [
  { type: 'fish', src: fishImgSrc, count: 3, baseSize: 100 },
  { type: 'shrimp', src: shrimpImgSrc, count: 3, baseSize: 100 },
  { type: 'jelly', src: jellyImgSrc, count: 3, baseSize: 90 },
];

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

    // Preload images
    const images: Record<string, HTMLImageElement> = {};
    CREATURES.forEach(config => {
      const img = new Image();
      img.src = config.src;
      images[config.type] = img;
    });

    class MarineCreature {
      type: CreatureType;
      x: number;
      y: number;
      baseY: number;
      speedX: number;
      speedY: number;
      size: number;
      direction: number; // 1 (right) or -1 (left)
      phase: number;
      oscillationSpeed: number;
      angle: number; // For rotation

      constructor(type: CreatureType) {
        this.type = type;
        this.direction = Math.random() > 0.5 ? 1 : -1;
        this.phase = Math.random() * Math.PI * 2;
        this.oscillationSpeed = Math.random() * 0.05 + 0.02;
        this.angle = 0;

        // const config = CREATURES.find(c => c.type === type)!; // Unused, but previously here
        // Scale logic
        const scale = Math.random() * 0.05 + 0.05; 
        this.size = scale; 

        if (type === 'jelly') {
           // Jellyfish floating vertically
           this.x = Math.random() * width;
           this.baseY = Math.random() * height;
           this.speedX = (Math.random() * 0.2 - 0.05); 
           this.speedY = (Math.random() * 0.2 + 0.1) * -1;
        } else if (type === 'fish') {
           this.x = Math.random() * width;
           this.baseY = Math.random() * height;
           this.speedX = (Math.random() * 0.12 + 0.08) * this.direction; 
           this.speedY = 0;
           this.oscillationSpeed = 0.05;
        } else {
           // Shrimp 
           this.x = Math.random() * width;
           this.baseY = Math.random() * height;
           this.speedX = (Math.random() * 0.08 + 0.02) * this.direction;
           this.speedY = 0;
        }
        
        this.y = this.baseY;
      }

      update() {
        this.phase += this.oscillationSpeed;

        // --- MOVEMENT LOGIC ---
        if (this.type === 'shrimp') {
             // Swim horizontal + slight sine wave + slight jerkiness
             this.x += this.speedX;
             this.y = this.baseY - scrollY * 0.2; // Straight line
             this.angle = 0; // No head movement
        } 
        else if (this.type === 'jelly') {
             // Move vertical
             this.y += this.speedY; // Moving up
             this.x += Math.sin(this.phase) * 0.5; // Slight side wobble
        }
        else if (this.type === 'fish') {
             this.x += this.speedX;
             this.y = this.baseY - scrollY * 0.2; // Straight line
             this.angle = 0; // No head movement
        }

        // --- WRAP AROUND ---
        const hBuffer = 200;
        if (this.x > width + hBuffer) this.x = -hBuffer;
        else if (this.x < -hBuffer) this.x = width + hBuffer;

        // Specific Y Wrap for non-jelly (Jelly moves continuously up)
        if (this.type !== 'jelly') {
            const vBuffer = 200;
            // Parallax wrap
            if (this.y < -vBuffer) {
                this.baseY += height + vBuffer * 2;
                // this.y will update next frame
            } else if (this.y > height + vBuffer) {
                this.baseY -= height + vBuffer * 2;
            }
        } else {
            // Jelly wrap logic
             if (this.y < -200) {
                 this.y = height + 200;
             }
        }
      }

      draw() {
        const img = images[this.type];
        if (!img || !img.complete) return;

        ctx!.save();
        ctx!.translate(this.x, this.y);

        // --- TRANSFORMS PER TYPE ---
        if (this.type === 'jelly') {
             // Pulsating vertical stretch
             const squish = 1 + Math.sin(this.phase) * 0.05;
             ctx!.scale(this.size * squish, this.size / squish);
        }
        else {
             // Rotate for swimming effect
             ctx!.rotate(this.angle);
             // Standard flip for direction
             ctx!.scale(this.direction * this.size, this.size);
        }

        ctx!.globalCompositeOperation = 'screen'; // Blend mode
        
        const w = img.naturalWidth || 100;
        const h = img.naturalHeight || 100;
        ctx!.drawImage(img, -w/2, -h/2);

        ctx!.restore();
      }
    }

    const creatures: MarineCreature[] = [];
    CREATURES.forEach(c => {
        for(let i=0; i<c.count; i++) {
            creatures.push(new MarineCreature(c.type));
        }
    });

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      creatures.forEach(c => {
        c.update();
        c.draw();
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
