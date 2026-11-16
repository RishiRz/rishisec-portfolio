import { useEffect, useRef } from 'react';

interface MatrixRainProps {
  /**
   * true  — fixed canvas covering the whole viewport (page background).
   * false — absolute canvas filling the nearest positioned parent
   *         (used to embed rain inside individual sections).
   */
  fullscreen?: boolean;
}

/**
 * Matrix-style falling character rain rendered on a canvas.
 * Uses katakana + hex chars like the classic hacker terminal aesthetic.
 */
function MatrixRain({ fullscreen = true }: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const CHARS =
      'アイウエオカキクケコサシスセソ0123456789ABCDEF<>/{}[]$#@%&*';
    const FONT_SIZE = 15;

    let columns = 0;
    let drops: number[] = [];
    let animationId: number;
    let lastTime = 0;
    let resizeObserver: ResizeObserver | undefined;
    const FRAME_DELAY = 55; // ms between drops moving — controls speed

    const sizeCanvas = () => {
      if (fullscreen) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      } else {
        // Fill the parent section instead of the viewport
        const parent = canvas.parentElement;
        canvas.width = parent?.clientWidth || window.innerWidth;
        canvas.height = parent?.clientHeight || window.innerHeight;
      }

      columns = Math.floor(canvas.width / FONT_SIZE);
      drops = Array.from(
        { length: columns },
        () => Math.floor(Math.random() * -100)
      );
    };

    const draw = (time: number) => {
      animationId = requestAnimationFrame(draw);

      if (time - lastTime < FRAME_DELAY) return;
      lastTime = time;

      if (fullscreen) {
        // Fade previous frame toward the page background color
        ctx.fillStyle = 'rgba(5, 8, 13, 0.09)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      } else {
        // Fade toward transparency so the section's own
        // background stays visible behind the rain
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillStyle = 'rgba(0, 0, 0, 0.09)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = 'source-over';
      }

      ctx.font = `${FONT_SIZE}px 'JetBrains Mono', monospace`;

      for (let i = 0; i < columns; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * FONT_SIZE;
        const y = drops[i] * FONT_SIZE;

        // Occasionally flash a bright cyan head character
        if (Math.random() > 0.985) {
          ctx.fillStyle = '#00d9ff';
        } else {
          ctx.fillStyle = 'rgba(0, 255, 136, 0.55)';
        }

        ctx.fillText(char, x, y);

        // Reset drop after it passes the bottom, with randomness
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = Math.floor(Math.random() * -50);
        }

        drops[i]++;
      }
    };

    sizeCanvas();

    if (fullscreen) {
      window.addEventListener('resize', sizeCanvas);
    } else if (canvas.parentElement) {
      // Re-fit when the section itself changes size
      resizeObserver = new ResizeObserver(sizeCanvas);
      resizeObserver.observe(canvas.parentElement);
    }

    animationId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', sizeCanvas);
      resizeObserver?.disconnect();
      cancelAnimationFrame(animationId);
    };
  }, [fullscreen]);

  return (
    <canvas
      ref={canvasRef}
      className={
        fullscreen ? 'matrix-rain' : 'matrix-rain matrix-rain--embedded'
      }
      aria-hidden="true"
    />
  );
}

export default MatrixRain;