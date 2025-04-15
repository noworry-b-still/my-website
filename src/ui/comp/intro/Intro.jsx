import React, { useEffect, useRef, useState } from 'react';
import { Terminal, Cpu, Network } from 'lucide-react';
import TechnicalArsenal from './TechnicalArsenal';
import './Intro.css';

const Intro = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const particlesRef = useRef([]);  // Store particles in a ref instead of state
    const mousePosRef = useRef({ x: 0, y: 0 });  // Store mouse position in a ref
    const [debug, setDebug] = useState({ width: 0, height: 0, mouseX: 0, mouseY: 0 });
    const [showDebug, setShowDebug] = useState(false);
    const animationIdRef = useRef(null);

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

            particlesRef.current = newParticles;
        };

        // Set initial canvas size and particles
        handleResize();

        // Add resize listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            if (animationIdRef.current) {
                cancelAnimationFrame(animationIdRef.current);
            }
        };
    }, []);

    // Handle mouse movement
    useEffect(() => {
        const handleMouseMove = (e) => {
            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            mousePosRef.current = { x, y }; // Update ref instead of state

            // Only update debug info if debugging is enabled (won't affect animation)
            if (showDebug) {
                setDebug(prev => ({
                    ...prev,
                    mouseX: x.toFixed(0),
                    mouseY: y.toFixed(0)
                }));
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [showDebug]);

    // Animation loop - completely rewritten to avoid state updates
    useEffect(() => {
        if (!canvasRef.current || particlesRef.current.length === 0) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const particles = particlesRef.current;
            const mousePos = mousePosRef.current;

            // Update and draw particles
            for (let i = 0; i < particles.length; i++) {
                const particle = particles[i];

                // Move particle
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                // Boundary check
                if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

                // Update position with boundary reflection
                particle.x = Math.max(0, Math.min(canvas.width, particle.x));
                particle.y = Math.max(0, Math.min(canvas.height, particle.y));

                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.fill();

                // Connect to mouse if close enough
                const mouseDistance = Math.hypot(particle.x - mousePos.x, particle.y - mousePos.y);
                if (mouseDistance < 120) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(90, 45, 130, ${0.3 * (1 - mouseDistance / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(mousePos.x, mousePos.y);
                    ctx.stroke();
                }
            }

            // Connect nearby particles
            for (let i = 0; i < particles.length; i++) {
                const p1 = particles[i];

                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
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

            // No setState call here anymore!
            animationIdRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            if (animationIdRef.current) {
                cancelAnimationFrame(animationIdRef.current);
            }
        };
    }, []); // Empty dependency array - only run once on mount

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