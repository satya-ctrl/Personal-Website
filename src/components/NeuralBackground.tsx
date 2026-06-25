import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  opacity: number;
}

const NeuralBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let nodes: Node[] = [];
    
    // Mouse tracking
    let mouse = { x: -1000, y: -1000 };
    const maxConnectionDistance = 150;
    const mouseAttractRadius = 250;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createNodes = () => {
      const area = canvas.width * canvas.height;
      // Adjust density based on screen size
      const count = Math.min(Math.floor(area / 12000), 120);
      nodes = Array.from({ length: count }, () => {
        const radius = Math.random() * 1.5 + 0.8;
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius,
          baseRadius: radius,
          opacity: Math.random() * 0.5 + 0.2,
        };
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < nodes.length; i++) {
        const p = nodes[i];

        // Apply mouse attraction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);

        if (distToMouse < mouseAttractRadius) {
          const force = (mouseAttractRadius - distToMouse) / mouseAttractRadius;
          p.x += dx * force * 0.02; // Attract slightly
          p.y += dy * force * 0.02;
          p.radius = p.baseRadius + (force * 1.5); // Glow larger near mouse
        } else {
          p.radius = p.baseRadius; // Reset radius
        }

        // Standard movement
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off walls
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Draw node (synapse core)
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        // Using a soft cyber blue/white glow
        ctx.fillStyle = `rgba(100, 200, 255, ${p.opacity})`;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const p2 = nodes[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const dist = Math.sqrt(cdx * cdx + cdy * cdy);

          if (dist < maxConnectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            
            // Highlight connections near mouse
            const lineOpacity = (1 - dist / maxConnectionDistance) * 0.15;
            if (distToMouse < mouseAttractRadius) {
              ctx.strokeStyle = `rgba(100, 200, 255, ${lineOpacity * 2.5})`;
            } else {
              ctx.strokeStyle = `rgba(215, 226, 234, ${lineOpacity})`;
            }
            
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', () => {
      resize();
      createNodes();
    });
    
    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    resize();
    createNodes();
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 0,
        mixBlendMode: 'screen',
        background: '#000000'
      }}
    />
  );
};

export default NeuralBackground;
