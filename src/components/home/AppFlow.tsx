import React, { useEffect, useRef } from "react";
import HeroNew from "../HeroNew";

const AppFlow: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        const mouse: {
            x: number | null;
            y: number | null;
            radius: number;
        } = {
            x: null,
            y: null,
            radius: 200,
        };

        class Particle {
            x: number;
            y: number;
            directionX: number;
            directionY: number;
            size: number;
            color: string;

            constructor(
                x: number,
                y: number,
                directionX: number,
                directionY: number,
                size: number,
                color: string
            ) {
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.color = color;
            }

            draw(): void {
                if(ctx) {
                    ctx.beginPath();
                    ctx.arc(
                        this.x,
                        this.y,
                        this.size,
                        0,
                        Math.PI * 2,
                        false
                    );
    
                    ctx.fillStyle = this.color;
                    ctx.fill();
                }
            }

            update(): void {
                // Bounce from edges
                if (
                    canvas && this.x > canvas.width - this.size ||
                    this.x < this.size
                ) {
                    this.directionX = -this.directionX;
                }

                if (
                    canvas && this.y > canvas.height - this.size ||
                    this.y < this.size
                ) {
                    this.directionY = -this.directionY;
                }

                // Mouse collision
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;

                    const distance = Math.sqrt(dx * dx + dy * dy);

                    // Prevent division by zero
                    if (distance > 0 && distance < mouse.radius + this.size) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;

                        const force =
                            (mouse.radius - distance) / mouse.radius;

                        this.x -= forceDirectionX * force * 5;
                        this.y -= forceDirectionY * force * 5;
                    }
                }

                this.x += this.directionX;
                this.y += this.directionY;

                this.draw();
            }
        }

        const init = (): void => {
            particles = [];

            const numberOfParticles =
                (canvas.width * canvas.height) / 9000;

            for (let i = 0; i < numberOfParticles; i++) {
                const size = Math.random() * 2 + 1;

                const x =
                    Math.random() *
                        (canvas.width - size * 2) +
                    size;

                const y =
                    Math.random() *
                        (canvas.height - size * 2) +
                    size;

                const directionX =
                    Math.random() * 0.4 - 0.2;

                const directionY =
                    Math.random() * 0.4 - 0.2;

                const color = "rgba(74, 51, 131, 0.8)";

                particles.push(
                    new Particle(
                        x,
                        y,
                        directionX,
                        directionY,
                        size,
                        color
                    )
                );
            }
        };

        const resizeCanvas = (): void => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            init();
        };

        const connect = (): void => {
            for (let a = 0; a < particles.length; a++) {
                for (let b = a + 1; b < particles.length; b++) {
                    const dx =
                        particles[a].x - particles[b].x;

                    const dy =
                        particles[a].y - particles[b].y;

                    const distance =
                        dx * dx + dy * dy;

                    const maxDistance =
                        (canvas.width / 7) *
                        (canvas.height / 7);

                    if (distance < maxDistance) {
                        let strokeColor =
                            "rgba(24, 68, 120, 0.2)";

                        if (
                            mouse.x !== null &&
                            mouse.y !== null
                        ) {
                            const mouseDx =
                                particles[a].x - mouse.x;

                            const mouseDy =
                                particles[a].y - mouse.y;

                            const mouseDistance =
                                Math.sqrt(
                                    mouseDx * mouseDx +
                                        mouseDy * mouseDy
                                );

                            if (
                                mouseDistance <
                                mouse.radius
                            ) {
                                strokeColor =
                                    "rgba(255, 255, 255, 0.1)";
                            }
                        }

                        ctx.strokeStyle = strokeColor;
                        ctx.lineWidth = 1;

                        ctx.beginPath();

                        ctx.moveTo(
                            particles[a].x,
                            particles[a].y
                        );

                        ctx.lineTo(
                            particles[b].x,
                            particles[b].y
                        );

                        ctx.stroke();
                    }
                }
            }
        };

        const animate = (): void => {
            animationFrameId =
                requestAnimationFrame(animate);

            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );

            for (const particle of particles) {
                particle.update();
            }

            connect();
        };

        const handleMouseMove = (
            event: MouseEvent
        ): void => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        };

        const handleMouseOut = (): void => {
            mouse.x = null;
            mouse.y = null;
        };

        window.addEventListener(
            "resize",
            resizeCanvas
        );

        window.addEventListener(
            "mousemove",
            handleMouseMove
        );

        window.addEventListener(
            "mouseout",
            handleMouseOut
        );

        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener(
                "resize",
                resizeCanvas
            );

            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );

            window.removeEventListener(
                "mouseout",
                handleMouseOut
            );

            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="absolute hero top-0 w-full flex flex-col items-center justify-center overflow-hidden z-10 h-[700px] md:h-[880px]">
            <canvas
                ref={canvasRef}
                className="bg-transparent absolute top-0 left-0 w-full h-full"
            />

            <HeroNew />
        </div>
    );
};

export default AppFlow;