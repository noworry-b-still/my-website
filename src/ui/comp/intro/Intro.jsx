import React, { useEffect, useRef, useState } from 'react';
import { Terminal, Cpu, Network } from 'lucide-react';
import TechnicalArsenal from './TechnicalArsenal';
import './Intro.css';

const Intro = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [particles, setParticles] = useState([]);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [debug, setDebug] = useState({ width: 0, height: 0, mouseX: 0, mouseY: 0 });
    const [showDebug, setShowDebug] = useState(false); // Set to true to show debug info

    // Initialize canvas and particles
    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        const ctx = canvas.getContext('2d');

        // Handle resize
        const handleResize = () => {
            canvas.width = container.offsetWidth;
            canvas.height = container.offsetHeight;

            setDebug(prev => ({
                ...prev,
                width: canvas.width,
                height: canvas.height
            }));

            // Create particles
            const particleCount = Math.min(100, Math.floor(canvas.width * canvas.height / 10000));
            const newParticles = [];

            for (let i = 0; i < particleCount; i++) {
                newParticles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2 + 0.5,
                    speedX: (Math.random() - 0.5) * 0.5,
                    speedY: (Math.random() - 0.5) * 0.5,
                    color: `rgba(90, 45, 130, ${Math.random() * 0.5 + 0.1})`
                });
            }

            setParticles(newParticles);
        };

        // Set initial canvas size and particles
        handleResize();

        // Add resize listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Handle mouse movement
    useEffect(() => {
        const handleMouseMove = (e) => {
            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            setMousePos({ x, y });
            setDebug(prev => ({
                ...prev,
                mouseX: x.toFixed(0),
                mouseY: y.toFixed(0)
            }));
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Animation loop
    useEffect(() => {
        if (!canvasRef.current || particles.length === 0) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationId;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update particles
            const updatedParticles = particles.map(particle => {
                // Move particle
                let x = particle.x + particle.speedX;
                let y = particle.y + particle.speedY;
                let speedX = particle.speedX;
                let speedY = particle.speedY;

                // Boundary check
                if (x < 0 || x > canvas.width) speedX *= -1;
                if (y < 0 || y > canvas.height) speedY *= -1;

                // Update position with boundary reflection
                x = Math.max(0, Math.min(canvas.width, x));
                y = Math.max(0, Math.min(canvas.height, y));

                // Draw particle
                ctx.beginPath();
                ctx.arc(x, y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.fill();

                // Connect to mouse if close enough
                const mouseDistance = Math.hypot(x - mousePos.x, y - mousePos.y);
                if (mouseDistance < 120) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(90, 45, 130, ${0.3 * (1 - mouseDistance / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(x, y);
                    ctx.lineTo(mousePos.x, mousePos.y);
                    ctx.stroke();
                }

                return {
                    ...particle,
                    x,
                    y,
                    speedX,
                    speedY
                };
            });

            // Connect nearby particles
            for (let i = 0; i < updatedParticles.length; i++) {
                const p1 = updatedParticles[i];

                for (let j = i + 1; j < updatedParticles.length; j++) {
                    const p2 = updatedParticles[j];
                    const distance = Math.hypot(p1.x - p2.x, p1.y - p2.y);

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(90, 45, 130, ${0.2 * (1 - distance / 100)})`;
                        ctx.lineWidth = 0.3;
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            setParticles(updatedParticles);
            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationId);
        };
    }, [particles, mousePos]);

    return (
        <div className="creative-intro-container" ref={containerRef}>
            <canvas ref={canvasRef} className="particles-canvas"></canvas>

            {showDebug && (
                <div className="particles-debug">
                    Canvas: {debug.width}x{debug.height}<br />
                    Mouse: {debug.mouseX}, {debug.mouseY}
                </div>
            )}

            <div className="intro-content-wrapper">
                <div className="creative-intro-header">
                    <div className="greeting-container">
                        <div className="neon-text-container">
                            <h3 className="intro-greeting">Namaste,</h3>
                            <h1 className="intro-name glitch" data-text="I'm Dinesh Pandikona">
                                I'm Dinesh Pandikona
                            </h1>
                        </div>
                        <div className="waving-hand">👋</div>
                    </div>

                    <div className="avatar-container">
                        <div className="avatar-hexagon">
                            <div className="avatar-image"></div>
                        </div>
                    </div>
                </div>

                <div className="intro-sections-container">
                    <div className="intro-section with-gradient">
                        <div className="section-icon-container">
                            <Terminal className="intro-icon" />
                            <div className="icon-glow"></div>
                        </div>
                        <div className="section-content">
                            <p className="intro-text">
                                I'm passionate about systems that chat over coffee (or maybe just packets <span className="highlight-emoji">✌🏽</span>).
                                <span className="gradient-text">There's something fascinating about how they gossip on a grand scale</span>, and I'm
                                always eager to unravel their secrets.
                            </p>
                        </div>
                    </div>

                    <div className="intro-section with-gradient">
                        <div className="section-icon-container">
                            <Cpu className="intro-icon" />
                            <div className="icon-glow"></div>
                        </div>
                        <div className="section-content">
                            <p className="intro-text">
                                My approach to learning? <span className="highlight-text">Taking things apart to see what makes them tick.</span> I believe
                                the best way to understand a system is to deconstruct it and
                                rebuild it from the ground up.
                            </p>
                        </div>
                    </div>

                    <div className="intro-section with-gradient">
                        <div className="section-icon-container">
                            <Network className="intro-icon" />
                            <div className="icon-glow"></div>
                        </div>
                        <div className="section-content">
                            <p className="intro-text">
                                As a <span className="highlight-text">full-stack developer</span> with a deep fascination for <span className="highlight-text">distributed systems</span>,
                                I thrive on building scalable solutions that connect and communicate across
                                the digital landscape.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="arsenal-wrapper">
                    <TechnicalArsenal />
                </div>
            </div>
        </div>
    );
};

export default Intro;