
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const mouseDown = () => setCursorVariant('clicked');
    const mouseUp = () => setCursorVariant('default');
    const mouseEnterLink = () => setCursorVariant('hover');
    const mouseLeaveLink = () => setCursorVariant('default');

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);
    
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', mouseEnterLink);
      link.addEventListener('mouseleave', mouseLeaveLink);
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);
      
      links.forEach(link => {
        link.removeEventListener('mouseenter', mouseEnterLink);
        link.removeEventListener('mouseleave', mouseLeaveLink);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: 'rgba(155, 135, 245, 0.3)',
      mixBlendMode: 'normal',
      scale: 1
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: 'rgba(155, 135, 245, 0.5)',
      mixBlendMode: 'difference',
      scale: 1.5
    },
    clicked: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: 'rgba(74, 108, 247, 0.5)',
      mixBlendMode: 'normal',
      scale: 0.8
    }
  };

  // Only show on desktop
  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50 hidden lg:block"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
};

export default CursorFollower;
