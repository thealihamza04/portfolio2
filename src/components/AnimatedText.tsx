
import React from 'react';
import { motion } from 'framer-motion';
import { staggeredLettersFade, staggeredFadeIn } from '../lib/motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = "", 
  once = true 
}) => {
  // For phrases split by space
  const words = text.split(" ");
  
  // Split word render
  const renderWords = () => {
    return (
      <motion.div
        className="flex flex-wrap  "
        variants={staggeredFadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once }}
      >
        {words.map((word, index) => (
          <motion.span
            className="mr-2 inline-block "
            key={index}
            variants={staggeredLettersFade}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={`${className} overflow-hidden`}>
      {renderWords()}
    </div>
  );
};

export default AnimatedText;
