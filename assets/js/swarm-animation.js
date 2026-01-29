/**
 * Swarm Robotics Animation
 * A canvas-based flocking simulation that follows the mouse cursor
 */

(function() {
    'use strict';
    
    const canvas = document.getElementById('swarm-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    let mouse = { x: null, y: null };
    let lastMouse = { x: null, y: null };
    let mouseStillTime = 0;
    let mouseOnScreen = false;
    const robots = [];
    const NUM_ROBOTS = 50;
    const ROBOT_OPACITY = 0.4;
    
    // Pulsation settings
    let pulsePhase = 0;
    const PULSE_SPEED = 0.02;
    const CONVERGE_THRESHOLD = 100;
    const STILL_TIME_THRESHOLD = 60;
    
    // Delta time for consistent speed across displays
    let lastTime = performance.now();
    const TARGET_FPS = 60;
    const TARGET_FRAME_TIME = 1000 / TARGET_FPS;
    
    // Get computed background color from body to match theme
    function getBackgroundColor() {
        const bodyStyle = getComputedStyle(document.body);
        return bodyStyle.backgroundColor || 'rgba(245, 245, 245, 0.3)';
    }
    
    // Get theme color for robots
    function getThemeColor() {
        const root = getComputedStyle(document.documentElement);
        return root.getPropertyValue('--global-theme-color').trim() || '#2c3e50';
    }
    
    // Resize canvas to window (accounting for device pixel ratio for sharpness, but keeping logical size)
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Track mouse position
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        mouseOnScreen = true;
    });
    
    // Detect mouse leaving the screen
    document.addEventListener('mouseleave', () => {
        mouseOnScreen = false;
        mouse.x = null;
        mouse.y = null;
    });
    
    // Detect mouse entering the screen
    document.addEventListener('mouseenter', () => {
        mouseOnScreen = true;
    });
    
    // Check if swarm is centered around mouse
    function isSwarmCentered() {
        if (mouse.x === null || mouse.y === null) return false;
        
        let totalDist = 0;
        for (let robot of robots) {
            const dx = robot.x - mouse.x;
            const dy = robot.y - mouse.y;
            totalDist += Math.sqrt(dx * dx + dy * dy);
        }
        const avgDist = totalDist / robots.length;
        return avgDist < CONVERGE_THRESHOLD;
    }
    
    // Check if mouse is still
    function checkMouseStill() {
        if (mouse.x === lastMouse.x && mouse.y === lastMouse.y) {
            mouseStillTime++;
        } else {
            mouseStillTime = 0;
        }
        lastMouse.x = mouse.x;
        lastMouse.y = mouse.y;
        return mouseStillTime > STILL_TIME_THRESHOLD;
    }
    
    // Robot class
    class Robot {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 2;
            this.vy = (Math.random() - 0.5) * 2;
            this.radius = 12;
            this.maxSpeed = 4;
            this.baseColor = 200 + Math.random() * 40;
            this.wanderAngle = Math.random() * Math.PI * 2;
        }
        
        update(robots, pulseForce, deltaMultiplier = 1) {
            if (mouseOnScreen && mouse.x !== null && mouse.y !== null) {
                // === FLOCKING MODE (mouse on screen) ===
                
                // Flocking behaviors
                let sepX = 0, sepY = 0, sepCount = 0;
                let alignX = 0, alignY = 0, alignCount = 0;
                let cohX = 0, cohY = 0, cohCount = 0;
                
                for (let other of robots) {
                    if (other === this) continue;
                    const dx = other.x - this.x;
                    const dy = other.y - this.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    
                    if (dist < 30) {
                        sepX -= dx / dist;
                        sepY -= dy / dist;
                        sepCount++;
                    }
                    if (dist < 60) {
                        alignX += other.vx;
                        alignY += other.vy;
                        alignCount++;
                    }
                    if (dist < 80) {
                        cohX += other.x;
                        cohY += other.y;
                        cohCount++;
                    }
                }
                
                if (sepCount > 0) {
                    this.vx += sepX * 0.05;
                    this.vy += sepY * 0.05;
                }
                if (alignCount > 0) {
                    this.vx += (alignX / alignCount - this.vx) * 0.02;
                    this.vy += (alignY / alignCount - this.vy) * 0.02;
                }
                if (cohCount > 0) {
                    const avgX = cohX / cohCount;
                    const avgY = cohY / cohCount;
                    this.vx += (avgX - this.x) * 0.001;
                    this.vy += (avgY - this.y) * 0.001;
                }
                
                // Mouse attraction with pulsation
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist > 0) {
                    let attractionStrength = 0.08;
                    
                    if (pulseForce !== 0) {
                        if (pulseForce > 0) {
                            this.vx -= (dx / dist) * pulseForce * 0.25;
                            this.vy -= (dy / dist) * pulseForce * 0.25;
                        } else {
                            this.vx += (dx / dist) * Math.abs(pulseForce) * 0.15;
                            this.vy += (dy / dist) * Math.abs(pulseForce) * 0.15;
                        }
                    } else {
                        this.vx += (dx / dist) * attractionStrength;
                        this.vy += (dy / dist) * attractionStrength;
                    }
                }
                
                // Bounce off walls in flocking mode
                const bounce = 0.8;
                const padding = this.radius;
                
                if (this.x <= padding) {
                    this.x = padding;
                    this.vx *= -bounce;
                }
                if (this.x >= canvas.width - padding) {
                    this.x = canvas.width - padding;
                    this.vx *= -bounce;
                }
                if (this.y <= padding) {
                    this.y = padding;
                    this.vy *= -bounce;
                }
                if (this.y >= canvas.height - padding) {
                    this.y = canvas.height - padding;
                    this.vy *= -bounce;
                }
                
            } else {
                // === WANDERING MODE (mouse off screen) ===
                
                // Random wandering: slowly change direction
                this.wanderAngle += (Math.random() - 0.5) * 0.3;
                this.vx += Math.cos(this.wanderAngle) * 0.02;
                this.vy += Math.sin(this.wanderAngle) * 0.02;
                
                // Bounce off walls
                const bounce = 0.8;
                const padding = this.radius;
                
                if (this.x <= padding) {
                    this.x = padding;
                    this.vx *= -bounce;
                    this.wanderAngle = Math.random() * Math.PI - Math.PI / 2; // Face right
                }
                if (this.x >= canvas.width - padding) {
                    this.x = canvas.width - padding;
                    this.vx *= -bounce;
                    this.wanderAngle = Math.random() * Math.PI + Math.PI / 2; // Face left
                }
                if (this.y <= padding) {
                    this.y = padding;
                    this.vy *= -bounce;
                    this.wanderAngle = Math.random() * Math.PI; // Face down
                }
                if (this.y >= canvas.height - padding) {
                    this.y = canvas.height - padding;
                    this.vy *= -bounce;
                    this.wanderAngle = -Math.random() * Math.PI; // Face up
                }
                
                // Light separation to avoid clustering
                for (let other of robots) {
                    if (other === this) continue;
                    const dx = other.x - this.x;
                    const dy = other.y - this.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    
                    if (dist < 25 && dist > 0) {
                        this.vx -= (dx / dist) * 0.03;
                        this.vy -= (dy / dist) * 0.03;
                    }
                }
            }
            
            // Dynamic max speed based on pulse
            const currentMaxSpeed = this.maxSpeed + Math.abs(pulseForce) * 1;
            
            // Limit speed
            const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
            if (speed > currentMaxSpeed) {
                this.vx = (this.vx / speed) * currentMaxSpeed;
                this.vy = (this.vy / speed) * currentMaxSpeed;
            }
            
            // Minimum speed in wandering mode
            if (!mouseOnScreen && speed < 0.5) {
                this.vx += Math.cos(this.wanderAngle) * 0.1;
                this.vy += Math.sin(this.wanderAngle) * 0.1;
            }
            
            // Update position (scaled by delta time for consistent speed across displays)
            this.x += this.vx * deltaMultiplier;
            this.y += this.vy * deltaMultiplier;
        }
        
        draw(pulseForce) {
            // Dynamic color based on pulse phase
            const hue = this.baseColor + pulseForce * 30;
            const lightness = 50 + pulseForce * 10;
            
            // Dynamic size based on pulse
            const currentRadius = this.radius + Math.abs(pulseForce) * 4;
            
            // Draw glow effect during pulse
            if (Math.abs(pulseForce) > 0.3) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, currentRadius * 2, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${hue}, 70%, 50%, ${ROBOT_OPACITY * 0.3})`;
                ctx.fill();
            }
            
            // Draw robot body with transparency
            ctx.beginPath();
            ctx.arc(this.x, this.y, currentRadius, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${hue}, 70%, ${lightness}%, ${ROBOT_OPACITY})`;
            ctx.fill();
            
            // Draw direction indicator with transparency
            const angle = Math.atan2(this.vy, this.vx);
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(
                this.x + Math.cos(angle) * currentRadius * 2,
                this.y + Math.sin(angle) * currentRadius * 2
            );
            ctx.strokeStyle = `rgba(44, 62, 80, ${ROBOT_OPACITY})`;
            ctx.lineWidth = 2;
            ctx.stroke();
        }
    }
    
    // Create robots
    for (let i = 0; i < NUM_ROBOTS; i++) {
        robots.push(new Robot());
    }
    
    // Animation loop
    function animate(currentTime) {
        // Calculate delta time for consistent speed across all display sizes
        const deltaTime = currentTime - lastTime;
        lastTime = currentTime;
        const deltaMultiplier = deltaTime / TARGET_FRAME_TIME;
        
        // Use semi-transparent background for trail effect
        const bgColor = getBackgroundColor();
        // Parse the background color and add transparency
        if (bgColor.startsWith('rgb(')) {
            const rgb = bgColor.match(/\d+/g);
            ctx.fillStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.3)`;
        } else if (bgColor.startsWith('rgba(')) {
            const rgba = bgColor.match(/[\d.]+/g);
            ctx.fillStyle = `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, 0.3)`;
        } else {
            ctx.fillStyle = 'rgba(245, 245, 245, 0.3)';
        }
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Check if we should pulse
        const mouseIsStill = checkMouseStill();
        const swarmCentered = isSwarmCentered();
        
        let pulseForce = 0;
        
        if (mouseOnScreen && mouseIsStill && swarmCentered) {
            pulsePhase += PULSE_SPEED * deltaMultiplier;
            pulseForce = Math.sin(pulsePhase);
        } else {
            pulsePhase = 0;
        }
        
        for (let robot of robots) {
            robot.update(robots, pulseForce, deltaMultiplier);
            robot.draw(pulseForce);
        }
        
        requestAnimationFrame(animate);
    }
    
    // Start animation when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => requestAnimationFrame(animate));
    } else {
        requestAnimationFrame(animate);
    }
})();
