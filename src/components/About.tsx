
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import { fadeIn, staggerContainer } from '../lib/motion';

const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Framer Motion', level: 80 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'UI/UX Design', level: 75 },
  { name: 'Three.js', level: 70 },
];

const About = () => {
  return (
    <section id="about" className="py-20 section-padding">
      <div className="container mx-auto">
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mb-16 text-center"
        >
          <motion.p variants={fadeIn('up', 0.2)} className="text-portfolio-blue font-medium mb-2">
            About Me
          </motion.p>
          <motion.h2 variants={fadeIn('up', 0.3)} className="text-4xl font-bold mb-4">
            My Background & Skills
          </motion.h2>
          <motion.div variants={fadeIn('up', 0.4)} className="w-20 h-1 bg-portfolio-purple mx-auto"></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Who am I?</h3>
            
            <div className="space-y-4 text-lg">
              <AnimatedText 
                text="I'm a passionate frontend developer and designer with 5+ years of experience creating beautiful web experiences."
                className="text-balance text-lg"
              />
              
              <AnimatedText 
                text="My journey started with a deep love for both design and technology. I believe that the best digital products come from merging aesthetics with functionality."
                className="text-balance text-lg"
              />
              
              <AnimatedText 
                text="I specialize in building responsive, animated interfaces that delight users while maintaining excellent performance and accessibility."
                className="text-balance text-lg"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <a href="#projects" className="button-primary">
                View Projects
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold mb-6">My Skills</h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-portfolio-gray">{skill.level}%</span>
                  </div>
                  <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-portfolio-gradient rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8"
            >
              {['JavaScript', 'Node.js', 'CSS', 'HTML5', 'Git', 'Figma'].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-gray-100 rounded-full text-center text-sm font-medium"
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
