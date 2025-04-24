import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function CursorEffect() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
      });

      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3
      });
    };

    const onMouseEnter = () => {
      gsap.to([cursor, follower], {
        scale: 1,
        opacity: 1,
        duration: 0.3
      });
    };

    const onMouseLeave = () => {
      gsap.to([cursor, follower], {
        scale: 0,
        opacity: 0,
        duration: 0.3
      });
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    // Add magnetic effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        gsap.to(follower, {
          scale: 1.5,
          duration: 0.3
        });
      });

      element.addEventListener('mouseleave', () => {
        gsap.to(follower, {
          scale: 1,
          duration: 0.3
        });
      });
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-4 h-4 bg-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        ref={followerRef}
        className="fixed w-8 h-8 bg-white/30 rounded-full pointer-events-none z-50 backdrop-blur-sm"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
}