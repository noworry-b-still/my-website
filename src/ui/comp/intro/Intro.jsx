import React, { useEffect, useRef } from 'react';
import { Terminal, Cpu, Network } from 'lucide-react';
import TechnicalArsenal from './TechnicalArsenal';
import './Intro.css';

const Intro = () => {
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);
    const mousePositionRef = useRef({ x: 0, y: 0 });

    // Initialize particles for network effect background
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Set canvas dimensions to match parent container
        const resizeCanvas = () => {
            const container = canvas.parentElement;
            canvas.width = container.offsetWidth;
            canvas.height = container.offsetHeight;

            // Initialize particles when canvas is resized
            initializeParticles();
        };

        // Create particles
        const initializeParticles = () => {
            const particleCount = Math.min(100, Math.floor(canvas.width * canvas.height / 10000));
            particlesRef.current = [];

            for (let i = 0; i < particleCount; i++) {
                particlesRef.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2 + 0.5,
                    speedX: (Math.random() - 0.5) * 0.5,
                    speedY: (Math.random() - 0.5) * 0.5,
                    color: `rgba(90, 45, 130, ${Math.random() * 0.5 + 0.1})`
                });
            }
        };

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw particles
            particlesRef.current.forEach((particle, index) => {
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                // Boundary check
                if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.fill();

                // Connect particles close to mouse
                const mouseDistance = Math.hypot(
                    particle.x - mousePositionRef.current.x,
                    particle.y - mousePositionRef.current.y
                );

                if (mouseDistance < 120) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(90, 45, 130, ${0.3 * (1 - mouseDistance / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(mousePositionRef.current.x, mousePositionRef.current.y);
                    ctx.stroke();
                }

                // Connect nearby particles
                for (let j = index + 1; j < particlesRef.current.length; j++) {
                    const otherParticle = particlesRef.current[j];
                    const distance = Math.hypot(
                        particle.x - otherParticle.x,
                        particle.y - otherParticle.y
                    );

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(90, 45, 130, ${0.2 * (1 - distance / 100)})`;
                        ctx.lineWidth = 0.3;
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        // Track mouse position
        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mousePositionRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        };

        // Initialize
        window.addEventListener('resize', resizeCanvas);
        canvas.addEventListener('mousemove', handleMouseMove);
        resizeCanvas();
        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            canvas.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="creative-intro-container">
            <canvas ref={canvasRef} className="particles-canvas"></canvas>

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