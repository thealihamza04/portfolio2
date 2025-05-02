
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center section-padding">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div 
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply blur-3xl opacity-70"
          animate={{ 
            x: [0, 30, 0], 
            y: [0, -30, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/3 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply blur-3xl opacity-70"
          animate={{ 
            x: [0, -40, 0], 
            y: [0, 40, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 10,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-pink-200 rounded-full mix-blend-multiply blur-3xl opacity-70"
          animate={{ 
            x: [0, 50, 0], 
            y: [0, 30, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 12,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-portfolio-gradient rounded-full blur-xl opacity-70 -z-10 scale-110" />
              <img 
                src="https://via.placeholder.com/150" 
                alt="Profile" 
                className="rounded-full w-32 h-32 object-cover border-4 border-white shadow-lg"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8"
          >
            <span className="text-portfolio-gray font-medium text-lg">Hello, I'm</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 mt-2">
              <span className="gradient-text">John Doe</span>
            </h1>
          </motion.div>

          <div className="overflow-hidden mb-8">
            <AnimatedText
              text="Creative Developer & Designer creating beautiful digital experiences"
              className="text-xl md:text-3xl font-semibold max-w-3xl"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a href="#projects" className="button-primary">
              View My Work
            </a>
            <a href="#contact" className="button-outline">
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          >
            <span className="text-sm text-portfolio-gray mb-2">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-portfolio-purple"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
