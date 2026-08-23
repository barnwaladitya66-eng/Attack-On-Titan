// Canvas Atmospheric Effects: Shingeki Embers, Steam & Lightning Effects
class AOTParticles {
  constructor(canvasId = 'bg-canvas') {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) {
      this.canvas = document.createElement('canvas');
      this.canvas.id = canvasId;
      this.canvas.style.position = 'fixed';
      this.canvas.style.top = '0';
      this.canvas.style.left = '0';
      this.canvas.style.width = '100%';
      this.canvas.style.height = '100%';
      this.canvas.style.pointerEvents = 'none';
      this.canvas.style.zIndex = '0';
      document.body.prepend(this.canvas);
    }
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.lightningBolts = [];
    this.numParticles = 65;
    this.mouseX = 0;
    this.mouseY = 0;
    this.mouseActive = false;

    this.resize();
    this.init();
    this.bindEvents();
    this.animate();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  init() {
    this.particles = [];
    for (let i = 0; i < this.numParticles; i++) {
      this.particles.push(this.createParticle());
    }
  }

  createParticle(isBottom = false) {
    const isEmber = Math.random() > 0.4;
    return {
      x: Math.random() * this.width,
      y: isBottom ? this.height + Math.random() * 20 : Math.random() * this.height,
      radius: isEmber ? Math.random() * 2.2 + 0.6 : Math.random() * 4.5 + 2.0,
      vx: (Math.random() - 0.5) * 0.8 + 0.2,
      vy: isEmber ? -(Math.random() * 1.2 + 0.5) : -(Math.random() * 0.4 + 0.2),
      alpha: Math.random() * 0.8 + 0.2,
      maxAlpha: Math.random() * 0.8 + 0.2,
      decay: Math.random() * 0.004 + 0.002,
      color: isEmber 
        ? (Math.random() > 0.3 ? 'rgba(255, 120, 30, ' : 'rgba(230, 57, 70, ') 
        : 'rgba(120, 130, 140, ',
      isEmber: isEmber,
      glow: isEmber ? Math.random() * 12 + 6 : 0,
      pulse: Math.random() * Math.PI
    };
  }

  bindEvents() {
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
      this.mouseActive = true;
    });
    window.addEventListener('mouseleave', () => {
      this.mouseActive = false;
    });
  }

  triggerLightning() {
    const startX = Math.random() * this.width;
    const startY = 0;
    const branches = [];
    
    const generateBolt = (x1, y1, x2, y2, depth = 0) => {
      if (depth > 4) return;
      const dx = x2 - x1;
      const dy = y2 - y1;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 15) {
        branches.push({ x1, y1, x2, y2, alpha: 1 });
        return;
      }
      const midX = (x1 + x2) / 2 + (Math.random() - 0.5) * 40;
      const midY = (y1 + y2) / 2 + (Math.random() - 0.5) * 20;
      generateBolt(x1, y1, midX, midY, depth + 1);
      generateBolt(midX, midY, x2, y2, depth + 1);
      
      if (Math.random() > 0.7 && depth < 3) {
        const branchX = midX + (Math.random() - 0.5) * 80;
        const branchY = midY + Math.random() * 60;
        generateBolt(midX, midY, branchX, branchY, depth + 2);
      }
    };

    const targetX = startX + (Math.random() - 0.5) * 200;
    const targetY = Math.random() * (this.height * 0.7) + (this.height * 0.2);
    generateBolt(startX, startY, targetX, targetY);

    this.lightningBolts.push({
      branches: branches,
      alpha: 1,
      decay: 0.08
    });
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Render Lightning
    for (let l = this.lightningBolts.length - 1; l >= 0; l--) {
      const bolt = this.lightningBolts[l];
      this.ctx.save();
      this.ctx.strokeStyle = `rgba(255, 230, 150, ${bolt.alpha})`;
      this.ctx.shadowColor = 'rgba(255, 180, 50, 0.9)';
      this.ctx.shadowBlur = 20;
      this.ctx.lineWidth = 2.5;

      bolt.branches.forEach(b => {
        this.ctx.beginPath();
        this.ctx.moveTo(b.x1, b.y1);
        this.ctx.lineTo(b.x2, b.y2);
        this.ctx.stroke();
      });

      this.ctx.restore();
      bolt.alpha -= bolt.decay;
      if (bolt.alpha <= 0) {
        this.lightningBolts.splice(l, 1);
      }
    }

    // Render Embers & Smoke
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      
      p.pulse += 0.04;
      p.x += p.vx + Math.sin(p.pulse) * 0.3;
      p.y += p.vy;
      p.alpha -= p.decay;

      // Mouse repelling/swirl
      if (this.mouseActive) {
        const dx = p.x - this.mouseX;
        const dy = p.y - this.mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          p.x += (dx / dist) * force * 2;
          p.y += (dy / dist) * force * 2;
        }
      }

      if (p.alpha <= 0 || p.y < -10 || p.x < -10 || p.x > this.width + 10) {
        this.particles[i] = this.createParticle(true);
        continue;
      }

      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

      if (p.isEmber) {
        this.ctx.fillStyle = `${p.color}${p.alpha})`;
        this.ctx.shadowColor = 'rgba(255, 100, 20, 0.8)';
        this.ctx.shadowBlur = p.glow;
      } else {
        this.ctx.fillStyle = `${p.color}${p.alpha * 0.35})`;
        this.ctx.shadowBlur = 0;
      }

      this.ctx.fill();
      this.ctx.restore();
    }

    requestAnimationFrame(() => this.animate());
  }
}

// Auto-instantiate when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.aotParticles = new AOTParticles();
});
