import React, { useEffect, useRef } from 'react';
import './CircuitBackground.css';

const CircuitBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let pulses = [];

        // Resize canvas to fill the screen
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            drawCircuit(); // Redraw circuit when resized
        };

        // Initialize
        handleResize();
        window.addEventListener('resize', handleResize);

        // Circuit node class
        class Node {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.connections = [];
                this.size = Math.random() * 2 + 1;
            }

            connect(node) {
                if (!this.connections.includes(node)) {
                    this.connections.push(node);
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(90, 45, 130, 0.5)';
                ctx.fill();

                // Draw connections
                this.connections.forEach(node => {
                    ctx.beginPath();
                    ctx.moveTo(this.x, this.y);
                    ctx.lineTo(node.x, node.y);
                    ctx.strokeStyle = 'rgba(90, 45, 130, 0.2)';
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                });
            }
        }

        // Data pulse effect class
        class Pulse {
            constructor(startNode, endNode) {
                this.startNode = startNode;
                this.endNode = endNode;
                this.progress = 0;
                this.speed = 0.005 + Math.random() * 0.01;
                this.size = Math.random() * 2 + 2;
                this.alpha = 1;
            }

            update() {
                this.progress += this.speed;
                if (this.progress >= 1) {
                    this.alpha -= 0.02;
                }
                return this.alpha > 0;
            }

            draw() {
                const x = this.startNode.x + (this.endNode.x - this.startNode.x) * this.progress;
                const y = this.startNode.y + (this.endNode.y - this.startNode.y) * this.progress;

                ctx.beginPath();
                ctx.arc(x, y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(90, 45, 130, ${this.alpha * 0.8})`;
                ctx.fill();

                // Glow effect
                ctx.beginPath();
                ctx.arc(x, y, this.size * 2, 0, Math.PI * 2);
                const gradient = ctx.createRadialGradient(x, y, this.size, x, y, this.size * 2);
                gradient.addColorStop(0, `rgba(90, 45, 130, ${this.alpha * 0.5})`);
                gradient.addColorStop(1, 'rgba(90, 45, 130, 0)');
                ctx.fillStyle = gradient;
                ctx.fill();
            }
        }

        // Create circuit nodes
        const createNodes = () => {
            const nodes = [];
            const gridSize = 80; // Distance between nodes
            const noiseOffset = gridSize / 2; // Max random offset

            // Calculate grid dimensions
            const cols = Math.ceil(canvas.width / gridSize) + 1;
            const rows = Math.ceil(canvas.height / gridSize) + 1;

            // Create nodes in a grid with random offsets
            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = i * gridSize + (Math.random() * noiseOffset - noiseOffset / 2);
                    const y = j * gridSize + (Math.random() * noiseOffset - noiseOffset / 2);
                    nodes.push(new Node(x, y));
                }
            }

            // Connect nearby nodes
            nodes.forEach(node => {
                nodes.forEach(otherNode => {
                    if (node !== otherNode) {
                        const distance = Math.hypot(node.x - otherNode.x, node.y - otherNode.y);
                        if (distance < gridSize * 1.5) {
                            // Don't connect every possible node to avoid a messy look
                            if (Math.random() > 0.5) {
                                node.connect(otherNode);
                            }
                        }
                    }
                });
            });

            return nodes;
        };

        // Create new data pulse
        const createPulse = (nodes) => {
            if (pulses.length > 20) return; // Limit number of active pulses

            const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
            if (randomNode.connections.length > 0) {
                const randomConnection = randomNode.connections[Math.floor(Math.random() * randomNode.connections.length)];
                pulses.push(new Pulse(randomNode, randomConnection));
            }
        };

        // Draw circuit
        const nodes = createNodes();

        const drawCircuit = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw all nodes and connections
            nodes.forEach(node => node.draw());

            // Update and draw pulses
            pulses = pulses.filter(pulse => pulse.update());
            pulses.forEach(pulse => pulse.draw());

            // Randomly create new pulses
            if (Math.random() < 0.05) {
                createPulse(nodes);
            }

            animationFrameId = requestAnimationFrame(drawCircuit);
        };

        drawCircuit();

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="circuit-background" />;
};

export default CircuitBackground;